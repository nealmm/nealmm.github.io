import{R as m,m as u,F as d}from"./hoisted.828b0d8f.js";import{$ as g}from"./_astro_assets.c9893cd2.js";import"./astro-assets-services.685f5bc4.js";const p="astro:jsx",l=Symbol("empty"),a=t=>t;function s(t){return t&&typeof t=="object"&&t[p]}function f(t){if(typeof t.type=="string")return t;const e={};if(s(t.props.children)){const r=t.props.children;if(!s(r)||!("slot"in r.props))return;const o=a(r.props.slot);e[o]=[r],e[o].$$slot=!0,delete r.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(r=>{if(!s(r)||!("slot"in r.props))return r;const o=a(r.props.slot);return Array.isArray(e[o])?e[o].push(r):(e[o]=[r],e[o].$$slot=!0),delete r.props.slot,l}).filter(r=>r!==l)),Object.assign(t.props,e)}function h(t){return typeof t=="string"?u(t):Array.isArray(t)?t.map(e=>h(e)):t}function y(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const e=h(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:e});return}if("set:text"in t.props){const e=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:e});return}}}function n(t,e){const r={[m]:"astro:jsx",[p]:!0,type:t,props:e??{}};return y(r),f(r),r}const b={src:"/_astro/pug.63ee00da.jpeg",width:550,height:460,format:"jpg",orientation:1},w={title:"Testing testing 123!",publishDate:"13 May 2022",description:"Hello world!!! This is an example blog post showcasing some of the cool stuff Astro Cactus theme can do.",tags:["example","blog","cool"],minutesRead:"1 min read"};function A(){return[{depth:2,slug:"hello-world",text:"Hello World"},{depth:2,slug:"using-some-markdown-elements",text:"Using some markdown elements"},{depth:2,slug:"tailwind-css-prose-styling",text:"Tailwind CSS Prose styling"}]}const _=!0;function c(t){const e=Object.assign({h2:"h2",p:"p",code:"code","astro-image":"astro-image",pre:"pre",span:"span",a:"a",hr:"hr",ul:"ul",li:"li",ol:"ol",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote"},t.components),r=e["astro-image"];return n(d,{children:[n(e.h2,{id:"hello-world",children:"Hello World"}),`
`,n(e.p,{children:["Following is an example blog post written in an mdx file. You can find me @ src/content/post/hello-world/index.mdx. Here you can add/update/delete details and watch the changes live when running in develop mode, ",n(e.code,{children:"pnpm dev"})]}),`
`,n(e.p,{children:n(r,{src:b,alt:"A pug in the woods, wrapped in a blanket"})}),`
`,n(e.h2,{id:"using-some-markdown-elements",children:"Using some markdown elements"}),`
`,n(e.p,{children:"Here we have a simple js code block."}),`
`,n(e.pre,{"is:raw":"",class:"astro-code dracula",style:{backgroundColor:"#282A36",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0",children:n(e.code,{children:n(e.span,{class:"line",children:[n(e.span,{style:{color:"#FF79C6"},children:"let"}),n(e.span,{style:{color:"#F8F8F2"},children:" string "}),n(e.span,{style:{color:"#FF79C6"},children:"="}),n(e.span,{style:{color:"#F8F8F2"},children:" "}),n(e.span,{style:{color:"#E9F284"},children:'"'}),n(e.span,{style:{color:"#F1FA8C"},children:"JavaScript syntax highlighting"}),n(e.span,{style:{color:"#E9F284"},children:'"'}),n(e.span,{style:{color:"#F8F8F2"},children:";"})]})})}),`
`,n(e.p,{children:["This is styled by Shiki, set via the ",n(e.a,{href:"https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting",children:"config"})," for Astro."]}),`
`,n(e.p,{children:["You can choose your own theme from this ",n(e.a,{href:"https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes",children:"library"}),", which is currently set to Dracula, in the file ",n(e.code,{children:"astro.config.mjs"}),"."]}),`
`,n(e.p,{children:"Here is a horizontal rule."}),`
`,n(e.hr,{}),`
`,n(e.p,{children:"Here is a list:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Item number 1"}),`
`,n(e.li,{children:"Item number 2"}),`
`,n(e.li,{children:"Item number 3"}),`
`]}),`
`,n(e.p,{children:"And an ordered list:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"James Madison"}),`
`,n(e.li,{children:"James Monroe"}),`
`,n(e.li,{children:"John Quincy Adams"}),`
`]}),`
`,n(e.p,{children:"Here is a table:"}),`




















`,n(e.table,{children:[n(e.thead,{children:n(e.tr,{children:[n(e.th,{children:"Item"}),n(e.th,{align:"center",children:"Price"}),n(e.th,{align:"right",children:"# In stock"})]})}),n(e.tbody,{children:[n(e.tr,{children:[n(e.td,{children:"Juicy Apples"}),n(e.td,{align:"center",children:"1.99"}),n(e.td,{align:"right",children:"739"})]}),n(e.tr,{children:[n(e.td,{children:"Bananas"}),n(e.td,{align:"center",children:"1.89"}),n(e.td,{align:"right",children:"6"})]})]})]}),`
`,n(e.h2,{id:"tailwind-css-prose-styling",children:"Tailwind CSS Prose styling"}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:`I’m a simple blockquote.
I’m styled by Tailwind CSS prose plugin`}),`
`]})]})}function x(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(c,{...t})}):c(t)}const j="src/content/post/hello-world/index.mdx",C="/Users/matt/Desktop/nealmm.github.io/src/content/post/hello-world/index.mdx",i=(t={})=>x({...t,components:{Fragment:d,...t.components,"astro-image":t.components?.img??g}});i[Symbol.for("mdx-component")]=!0;i[Symbol.for("astro.needsHeadRendering")]=!w.layout;i.moduleId="/Users/matt/Desktop/nealmm.github.io/src/content/post/hello-world/index.mdx";export{i as Content,_ as __usesAstroImage,i as default,C as file,w as frontmatter,A as getHeadings,j as url};
