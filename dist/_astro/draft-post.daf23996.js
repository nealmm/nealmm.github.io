import{c as a,s as i,r as c,m as u}from"./_astro_assets.c9893cd2.js";import{u as l}from"./hoisted.828b0d8f.js";import"./astro-assets-services.685f5bc4.js";const p=async function(){return{}};async function d(n){return p().then(t=>n.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(o,e)=>i({src:t[e].src,...t[e].attributes})))}const r=await d("<p>If this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.</p>"),f={title:"A working draft title",description:"This post is for testing the draft post functionality",publishDate:"10 Sept 2023",tags:["test"],draft:!0,minutesRead:"1 min read"},m="/Users/matt/Desktop/nealmm.github.io/src/content/post/draft-post.md",h=void 0;function w(){return`
If this is working correctly, this post should only be accessible in a dev environment, as well as any tags that are unique to this post.
`}function A(){return r}function _(){return[]}const k=a((n,t,o)=>{const{layout:e,...s}=f;return s.file=m,s.url=h,c`${u()}${l(r)}`});export{k as Content,A as compiledContent,k as default,m as file,f as frontmatter,_ as getHeadings,w as rawContent,h as url};
