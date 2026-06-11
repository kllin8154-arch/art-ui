import React,{useState}from'react';import styles from'./MenuTree.module.css';

interface TreeNode{label:string;active?:boolean;children?:{label:string;active?:boolean}[]}
interface MenuTreeProps{nodes:TreeNode[];className?:string}

export function MenuTree({nodes,className=''}:MenuTreeProps){
  const[openSet,setOpenSet]=useState<Set<number>>(new Set());
  return <div className={`${styles.tree} ${className}`}>
    {nodes.map((node,i)=><div key={i} className={`${styles.node} ${openSet.has(i)?styles.open:''} ${node.active?styles.active:''}`}>
      <div className={styles.nodeLabel} onClick={()=>node.children&&setOpenSet(p=>{const n=new Set(p);n.has(i)?n.delete(i):n.add(i);return n})}>
        <span className={`${styles.arrow} ${openSet.has(i)?styles.arrowOpen:''}`}>{node.children?'▶':''}</span>{node.label}
      </div>
      {node.children&&<div className={styles.children}>{node.children.map((c,j)=><div key={j} className={`${styles.subNode} ${c.active?styles.subActive:''}`}>{c.label}</div>)}</div>}
    </div>)}
  </div>;
}
