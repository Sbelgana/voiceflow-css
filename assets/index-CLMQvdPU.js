import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{t as c,C as d}from"./tag-DslUz7EE.js";import{s as n,p as m}from"./animation-I98MwHEk.js";const s=1e3,i=c(d.TYPING_INDICATOR),r=n(i("span"),{display:"inline-flex"}),e=n(i("span","dot"),{height:8,width:8,margin:"0 2px",borderRadius:"$round",backgroundColor:"#adadb3",opacity:.2,animation:`${m} ${s}ms`,animationIterationCount:"infinite"}),y=Math.floor(s/3),t=()=>o.jsx(r,{children:Array.from({length:3}).map((p,a)=>o.jsx(e,{css:{animationDelay:`${y*(a+1)}ms`}},a))}),_=Object.assign(t,{Container:r,Dot:e});try{t.displayName="TypingIndicator",t.__docgenInfo={description:"An animated indicator to show that the system is preparing a response.",displayName:"TypingIndicator",props:{}}}catch{}export{_ as T};
