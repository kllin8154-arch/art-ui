import React,{useState,useRef,useCallback}from'react';import styles from'./Dropzone.module.css';

interface DropzoneProps{onFiles?:(files:File[])=>void;accept?:string;multiple?:boolean;className?:string;children?:React.ReactNode}
export function Dropzone({onFiles,accept,multiple,className='',children}:DropzoneProps){
  const[dragging,setDragging]=useState(false);const inputRef=useRef<HTMLInputElement>(null);
  const handleFiles=useCallback((files:FileList|null)=>{if(files&&onFiles)onFiles(Array.from(files))},[onFiles]);
  const onDrop=useCallback((e:React.DragEvent)=>{e.preventDefault();setDragging(false);handleFiles(e.dataTransfer.files)},[handleFiles]);
  return <div className={`${styles.zone} ${dragging?styles.dragging:''} ${className}`}
    onDragOver={e=>{e.preventDefault();setDragging(true)}} onDragLeave={()=>setDragging(false)} onDrop={onDrop}
    onClick={()=>inputRef.current?.click()}>
    <input ref={inputRef} type="file" accept={accept} multiple={multiple} onChange={e=>handleFiles(e.target.files)} style={{display:'none'}}/>
    {children||<><div className={styles.icon}>📁</div><div className={styles.text}>拖拽文件到此处，或点击上传</div><div className={styles.hint}>{accept?`支持 ${accept}`:'支持所有文件类型'}</div></>}
  </div>;
}
