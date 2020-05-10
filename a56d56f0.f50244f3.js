(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(9),a=(n(0),n(193)),o={},c={id:"design/index",title:"index",description:"# Design",source:"@site/docs/design/index.md",permalink:"/docs/design/index"},s=[{value:"Principled design",id:"principled-design",children:[]},{value:"Project structure",id:"project-structure",children:[]},{value:"Support",id:"support",children:[]}],l={rightToc:s},p="wrapper";function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"design"},"Design"),Object(a.b)("p",null,"CIlib is software library which aids in the experimentation and\nresearch of Computational Intelligence algorithms. Previously, in\nversion 1.0 and lower, CIlib started demonstrating several\nshortcomings, and as a result, the current development process\nbegan. In order to address these shortcomings, the following goals\nwere highlighted:"),Object(a.b)("h2",{id:"principled-design"},"Principled design"),Object(a.b)("p",null,"It is very important to ensure that the library code is pure - thereby\nreducing complexity. This has many advantages but, most importantly, it\nallows for the controlling of side-effects which is a primary concern,\nespecially when randomness is involved. As a consequence of this, and\nother aspects, CIlib makes an active effort to address the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Correctness:")," All algorithmic components should be correct and\noperate as intended, doing nothing more. Peer-review is hugely valuable\nin this regard, providing the confidence that the implementations are\ncorrect and sound."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Type safety:")," The use of types is a fantastic way to ensure that a\nprogram cannot represent invalid states. This removes a huge set of\npotential errors and ensures greater confidence, as the compiler is\nalways double-checking the code."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Reproducability:")," Within scientific research, being able to reproduce\nthe work of another researcher is important. It's also a fundamental\npart of the scientific method. With complexities such as randomness,\nthis becomes much more difficult and is generally extremely cumbersome.\nCIlib must allow for the perfect replication of experimental work.")),Object(a.b)("h2",{id:"project-structure"},"Project structure"),Object(a.b)("p",null,"Trying to maintain a modular set of functionalities, CIlib consists of\nseveral sub-projects:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"core")," - contains typeclass definitions together with required data structures"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"exec")," - simplistic execution code allowing for experimental execution"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"de")," - data structures and logic related to Differential Evolution"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"docs")," - sources for the website"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"ga")," - data structures and logic related to Genetic Algorithms"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"moo")," - typeclasses, instances and data structures for Multi-Objective\nOptimization"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"pso")," - data structures and logic related to Particle Swarm Optimization")),Object(a.b)("h2",{id:"support"},"Support"),Object(a.b)("p",null,"If you have any feedback or questions, please contact is in ",Object(a.b)("inlineCode",{parentName:"p"},"#cilib")," on\n",Object(a.b)("inlineCode",{parentName:"p"},"FreeNode")," IRC or come chat to us in the project's\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitter.im/ciren/cilib"}),"Gitter channel"),"; alternatively, feel free\nto open an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ciren/cilib/issues"}),"issue"),"."))}u.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);