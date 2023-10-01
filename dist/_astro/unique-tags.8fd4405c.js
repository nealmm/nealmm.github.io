import{c as a,s as i,r as u,m as c}from"./_astro_assets.c9893cd2.js";import{u as d}from"./hoisted.828b0d8f.js";import"./astro-assets-services.685f5bc4.js";const p=async function(){return{}};async function f(s){return p().then(t=>s.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(r,e)=>i({src:t[e].src,...t[e].attributes})))}const n=await f(`<h2 id="this-post-is-to-test-zod-transform">This post is to test zod transform</h2>
<p>If you open the file <code>src/content/post/unique-tags.md</code>, the tags array has a number of duplicate blog strings of various cases.</p>
<p>These are removed as part of the removeDupsAndLowercase function found in <code>src/content/config.ts</code>.</p>`),l={title:"Unique tags validation",publishDate:"30 January 2023",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",tags:["blog","blog","Blog","test","bloG","Test","BLOG"],minutesRead:"1 min read"},m="/Users/matt/Desktop/nealmm.github.io/src/content/post/unique-tags.md",g=void 0;function v(){return`
## This post is to test zod transform

If you open the file \`src/content/post/unique-tags.md\`, the tags array has a number of duplicate blog strings of various cases.

These are removed as part of the removeDupsAndLowercase function found in \`src/content/config.ts\`.
`}function y(){return n}function A(){return[{depth:2,slug:"this-post-is-to-test-zod-transform",text:"This post is to test zod transform"}]}const z=a((s,t,r)=>{const{layout:e,...o}=l;return o.file=m,o.url=g,u`${c()}${d(n)}`});export{z as Content,y as compiledContent,z as default,m as file,l as frontmatter,A as getHeadings,v as rawContent,g as url};
