import React,{useEffect,useRef}from'react';import styles from'./InfiniteScroll.module.css';
interface InfiniteScrollProps{onLoadMore:()=>void;hasMore:boolean;loading?:boolean;children:React.ReactNode;className?:string}
export function InfiniteScroll({onLoadMore,hasMore,loading,children,className=''}:InfiniteScrollProps){
  const sentinelRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{const el=sentinelRef.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting&&hasMore&&!loading)onLoadMore()},{threshold:0});obs.observe(el);return()=>obs.disconnect()},[onLoadMore,hasMore,loading]);
  return <div className={className}>{children}<div ref={sentinelRef} className={styles.sentinel}/>{loading&&<div className={styles.loading}>加载中…</div>}</div>;
}
