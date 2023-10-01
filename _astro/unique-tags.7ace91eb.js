const t="unique-tags.md",s="post",e="unique-tags",a=`
## This post is to test zod transform

If you open the file \`src/content/post/unique-tags.md\`, the tags array has a number of duplicate blog strings of various cases.

These are removed as part of the removeDupsAndLowercase function found in \`src/content/config.ts\`.
`,n={title:"Unique tags validation",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",publishDate:new Date(16750548e5),draft:!1,tags:["blog","test"]},o={type:"content",filePath:"/Users/matt/Desktop/nealmm.github.io/src/content/post/unique-tags.md",rawData:`
title: "Unique tags validation"
publishDate: "30 January 2023"
description: "This post is used for validating if duplicate tags are removed, regardless of the string case"
tags: ["blog", "blog", "Blog", "test", "bloG", "Test", "BLOG"]`};export{o as _internal,a as body,s as collection,n as data,t as id,e as slug};
