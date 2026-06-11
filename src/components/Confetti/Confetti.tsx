import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  shape: 'rect' | 'circle' | 'ribbon';
  opacity: number;
  life: number;
  maxLife: number;
}

export interface ConfettiProps {
  active: boolean;
  count?: number;
  spread?: number;
  colors?: string[];
  duration?: number;
}

const defaultColors = [
  '#b87351', '#c4946c', '#d4a87e', // warm earth
  '#8b5e3c', '#a67c52', '#6b4c3b', // leather browns
  '#e07a5f', '#c1121f', '#d90429', // muted reds
  '#2a9d8f', '#264653', '#457b9d', // slate teals
  '#e9c46a', '#f4a261', '#e76f51', // sunset
];

export function Confetti({
  active,
  count = 80,
  spread = 60,
  colors = defaultColors,
  duration = 4000,
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const startTimeRef = useRef<number>(0);

  const createParticle = useCallback(
    (canvasW: number): Particle => {
      const x = Math.random() * canvasW;
      const shapeRand = Math.random();
      const shape: Particle['shape'] =
        shapeRand < 0.4 ? 'ribbon' : shapeRand < 0.7 ? 'rect' : 'circle';
      const baseW = 6 + Math.random() * 8;
      return {
        x,
        y: -(10 + Math.random() * 40),
        vx: (Math.random() - 0.5) * spread,
        vy: 1.5 + Math.random() * 4,
        w: shape === 'ribbon' ? baseW * 2.5 : baseW,
        h: shape === 'ribbon' ? baseW * 0.35 : baseW,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.3,
        shape,
        opacity: 1,
        life: 0,
        maxLife: 60 + Math.random() * 80,
      };
    },
    [spread, colors],
  );

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText =
      'position:fixed;inset:0;z-index:99999;pointer-events:none;';

    // Create initial burst
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(canvas.width));
    }
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      if (now - startTimeRef.current > duration + 1000) {
        // Fade and remove canvas
        if (canvas.style.opacity !== '0') {
          canvas.style.transition = 'opacity 0.5s';
          canvas.style.opacity = '0';
          setTimeout(() => canvas.remove(), 500);
        }
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = now - startTimeRef.current;
      const fadeStart = duration - 800;

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // gravity
        p.rotation += p.rotSpeed;
        p.life++;
        p.opacity = Math.min(1, 1 - Math.max(0, (p.life - p.maxLife * 0.7) / (p.maxLife * 0.3)));

        // Global fade near end
        if (elapsed > fadeStart) {
          p.opacity *= 1 - (elapsed - fadeStart) / (duration - fadeStart);
        }

        // Remove dead particles
        if (p.y > canvas.height + 50 || p.opacity <= 0.02 || p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.opacity);

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (p.shape === 'ribbon') {
          ctx.beginPath();
          ctx.moveTo(-p.w / 2, 0);
          ctx.quadraticCurveTo(-p.w / 4, -p.h * 2, 0, -p.h);
          ctx.quadraticCurveTo(p.w / 4, p.h * 0.5, p.w / 2, -p.h * 0.5);
          ctx.lineTo(p.w / 2, p.h * 0.5);
          ctx.quadraticCurveTo(p.w / 4, -p.h * 0.5, 0, p.h);
          ctx.quadraticCurveTo(-p.w / 4, p.h * 2, -p.w / 2, p.h * 0.5);
          ctx.closePath();
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }

        ctx.restore();
      }

      // Burst new particles in first 600ms for continuous effect
      if (elapsed < 600 && particles.length < count * 2) {
        for (let i = 0; i < 4; i++) {
          particles.push(createParticle(canvas.width));
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      particlesRef.current = [];
    };
  }, [active, count, spread, colors, duration, createParticle]);

  if (!active) return null;
  return <canvas ref={canvasRef} />;
}
