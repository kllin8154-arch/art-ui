import React from'react';import styles from'./Table.module.css';
interface Column{key:string;title:string;render?:(val:any,row:any)=>React.ReactNode}
interface TableProps{columns:Column[];data:Record<string,any>[];striped?:boolean;className?:string}
export function Table({columns,data,striped,className=''}:TableProps){
  return <table className={`${styles.table} ${striped?styles.striped:''} ${className}`}><thead><tr>{columns.map(c=><th key={c.key} className={styles.th}>{c.title}</th>)}</tr></thead><tbody>{data.map((row,i)=><tr key={i} className={styles.tr}>{columns.map(c=><td key={c.key} className={styles.td}>{c.render?c.render(row[c.key],row):row[c.key]}</td>)}</tr>)}</tbody></table>;
}
