import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './AudioPlayer.module.css';

export interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  coverColor?: string;
  className?: string;
}

export function AudioPlayer({
  src,
  title = '未知曲目',
  artist,
  coverColor = '#c4946c',
  className = '',
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pct, setPct] = useState(0);
  const [cur, setCur] = useState('0:00');
  const [dur, setDur] = useState('0:00');

  const fmt = useCallback((s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const u = () => {
      setPct((a.currentTime / a.duration) * 100 || 0);
      setCur(fmt(a.currentTime));
    };
    const l = () => setDur(fmt(a.duration));
    const e = () => setPlaying(false);
    a.addEventListener('timeupdate', u);
    a.addEventListener('loadedmetadata', l);
    a.addEventListener('ended', e);
    return () => {
      a.removeEventListener('timeupdate', u);
      a.removeEventListener('loadedmetadata', l);
      a.removeEventListener('ended', e);
    };
  }, [fmt]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    playing ? a.pause() : a.play();
    setPlaying(!playing);
  };

  const seek = (e: React.MouseEvent) => {
    const a = audioRef.current;
    if (!a) return;
    const r = e.currentTarget.getBoundingClientRect();
    a.currentTime = ((e.clientX - r.left) / r.width) * a.duration;
  };

  const skip = (s: number) => {
    const a = audioRef.current;
    if (a) a.currentTime = Math.max(0, Math.min(a.duration || 0, a.currentTime + s));
  };

  // SVG Icons — no emoji
  const PlayIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M4 1.5L14 8L4 14.5V1.5Z" />
    </svg>
  );
  const PauseIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="3" y="2" width="3.5" height="12" rx="1" />
      <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
    </svg>
  );
  const SkipBackIcon = (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
      <path d="M13 2L6 7.5V3L1 8L6 13V8.5L13 14V2Z" />
    </svg>
  );
  const SkipFwdIcon = (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
      <path d="M3 2L10 7.5V3L15 8L10 13V8.5L3 14V2Z" />
    </svg>
  );

  return (
    <div className={`${styles.player} ${className}`}>
      <audio ref={audioRef} src={src} preload="metadata" />
      {/* Vinyl disc — pure CSS */}
      <div className={`${styles.disc} ${playing ? styles.spinning : ''}`}>
        <div className={styles.groove} />
        <div className={styles.groove2} />
        <div className={styles.groove3} />
        <div
          className={styles.label}
          style={{ background: coverColor }}
        >
          <div className={styles.labelHole} />
        </div>
        {playing && <div className={styles.shine} />}
      </div>
      {/* Info + progress */}
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        {artist && <div className={styles.artist}>{artist}</div>}
        <div className={styles.progress} onClick={seek}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
        <div className={styles.time}>
          <span>{cur}</span>
          <span>{dur}</span>
        </div>
      </div>
      {/* Controls */}
      <div className={styles.controls}>
        <button className={`${styles.btn} ${styles.btnSm}`} onClick={() => skip(-10)} aria-label="后退10秒">
          {SkipBackIcon}
        </button>
        <button className={styles.btn} onClick={toggle} aria-label={playing ? '暂停' : '播放'}>
          {playing ? PauseIcon : PlayIcon}
        </button>
        <button className={`${styles.btn} ${styles.btnSm}`} onClick={() => skip(10)} aria-label="前进10秒">
          {SkipFwdIcon}
        </button>
      </div>
    </div>
  );
}
