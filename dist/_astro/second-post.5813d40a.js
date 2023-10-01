import{c as r,s as p,r as l,m as c}from"./_astro_assets.c9893cd2.js";import{u as i}from"./hoisted.828b0d8f.js";import"./astro-assets-services.685f5bc4.js";const u=async function(){return{}};async function d(t){return u().then(n=>t.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(o,s)=>p({src:n[s].src,...n[s].attributes})))}const a=await d(`<h2 id="this-is-a-post-made-with-markdown">This is a post made with Markdown</h2>
<pre is:raw="" class="astro-code dracula" style="background-color: #282A36; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;" tabindex="0"><code><span class="line"><span style="color: #6272A4">// Example JavaScript</span></span>
<span class="line"><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">returnSeven</span><span style="color: #F8F8F2">() {</span></span>
<span class="line"><span style="color: #F8F8F2">	</span><span style="color: #FF79C6">return</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">7</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">}</span></span></code></pre>`),m={title:"My Second Post",publishDate:"12 June 2022",description:"Another example post for Astro Cactus, this time written in a plain markdown file",tags:["example","blog"],minutesRead:"1 min read"},F="/Users/matt/Desktop/nealmm.github.io/src/content/post/second-post.md",w=void 0;function b(){return`
## This is a post made with Markdown

\`\`\`js
// Example JavaScript
function returnSeven() {
	return 7;
}
\`\`\`
`}function k(){return a}function A(){return[{depth:2,slug:"this-is-a-post-made-with-markdown",text:"This is a post made with Markdown"}]}const g=r((t,n,o)=>{const{layout:s,...e}=m;return e.file=F,e.url=w,l`${c()}${i(a)}`});export{g as Content,k as compiledContent,g as default,F as file,m as frontmatter,A as getHeadings,b as rawContent,w as url};
