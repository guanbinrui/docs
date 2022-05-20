"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[6244],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,v=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(62848),i=n(79213),o=(n(59496),n(49613)),a=["components"],c={id:"kv-faq",title:"FAQ",sidebar_position:5},p=void 0,u={unversionedId:"kv-service/kv-faq",id:"kv-service/kv-faq",title:"FAQ",description:"I got public key mismatch error in POST /v1/kv",source:"@site/docs/kv-service/faq.md",sourceDirName:"kv-service",slug:"/kv-service/kv-faq",permalink:"/kv-service/kv-faq",draft:!1,editUrl:"https://github.com/nextdotid/docs/docs/kv-service/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"kv-faq",title:"FAQ",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/kv-service/kv-intro"},next:{title:"API",permalink:"/kv-service/kv-api"}},s={},l=[{value:"I got <code>public key mismatch</code> error in <code>POST /v1/kv</code>",id:"bad-signature",level:2},{value:"Does KVService rely on an existed Persona / binding on ProofService?",id:"does-kvservice-rely-on-an-existed-persona--binding-on-proofservice",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bad-signature"},"I got ",(0,o.kt)("inlineCode",{parentName:"h2"},"public key mismatch")," error in ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST /v1/kv")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/proof-service/ps-faq#bad-signature"},"ProofService FAQ"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Double check ",(0,o.kt)("inlineCode",{parentName:"p"},"dataToSign.length")," part.")),(0,o.kt)("h2",{id:"does-kvservice-rely-on-an-existed-persona--binding-on-proofservice"},"Does KVService rely on an existed Persona / binding on ProofService?"),(0,o.kt)("p",null,"Not really! You can use this as a storage for every secp256k1 keypair\n(",(0,o.kt)("inlineCode",{parentName:"p"},'platform == nextid && identity == "0xPUBLIC_KEY"'),") without even\nusing it on ProofService."),(0,o.kt)("p",null,"But, if you want to save data related to a specific account, we still\nencourage you to put it under precise ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"identity"),"."),(0,o.kt)("p",null,"A typical case is, your DApp allows user to set different NFT avatar\non Twitter and Github. In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"identity")," should\nbe specified (instead of being put under an ambiguous persona pubkey)."))}f.isMDXComponent=!0}}]);