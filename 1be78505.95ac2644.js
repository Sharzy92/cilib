(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(e,t,a){"use strict";a.r(t);a(204);var n=a(0),l=a.n(n),r=a(193),c=a(195),i=a(57),o=a(198),s=a(194),u=a.n(s),m=a(196),d=a(132),f=a.n(d),b=24;function p(e){var t=e.item,a=e.onItemClick,r=e.collapsible,c=t.items,i=t.href,o=t.label,s=t.type,d=Object(n.useState)(t.collapsed),f=d[0],b=d[1],v=Object(n.useState)(null),h=v[0],k=v[1];t.collapsed!==h&&(k(t.collapsed),b(t.collapsed));var E=Object(n.useCallback)((function(e){e.preventDefault(),b((function(e){return!e}))}));switch(s){case"category":return c.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":f}),key:o},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":r,"menu__link--active":r&&!t.collapsed}),href:"#!",onClick:r?E:void 0},o),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(p,{key:e.label,item:e,onItemClick:a,collapsible:r})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(m.a,{activeClassName:"menu__link--active",className:"menu__link",exact:!0,to:i,onClick:a},o))}}var v=function(e){var t=Object(n.useState)(!1),a=t[0],r=t[1],c=e.docsSidebars,i=e.location,o=e.sidebar,s=e.sidebarCollapsible;if(!o)return null;var m=c[o];if(!m)throw new Error('Cannot find the sidebar "'+o+'" in the sidebar config!');return s&&m.forEach((function(e){return function e(t,a){var n=t.items,l=t.href;switch(t.type){case"category":var r=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!r,r;case"link":default:return l===a.pathname.replace(/\/$/,"")}}(e,i)})),l.a.createElement("div",{className:f.a.sidebar},l.a.createElement("div",{className:u()("menu","menu--responsive",{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){r(!a)}},a?l.a.createElement("span",{className:u()(f.a.sidebarMenuIcon,f.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:f.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:b,width:b,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},m.map((function(e){return l.a.createElement(p,{key:e.label,item:e,onItemClick:function(){r(!1)},collapsible:s})})))))},h=a(215),k=a(218),E=a(35),g=a(135),N=a.n(g);t.default=function(e){var t,a,n=e.route,s=e.docsMetadata,u=e.location,m=s.permalinkToSidebar,d=s.docsSidebars,f=s.version,b=m[u.pathname.replace(/\/$/,"")],p=Object(c.a)().siteConfig,g=(p=void 0===p?{}:p).themeConfig,w=(void 0===g?{}:g).sidebarCollapsible,C=void 0===w||w;return t=n.routes,a=u.pathname,t.some((function(e){return Object(E.c)(a,e)}))?l.a.createElement(o.a,{version:f},l.a.createElement("div",{className:N.a.docPage},b&&l.a.createElement("div",{className:N.a.docSidebarContainer},l.a.createElement(v,{docsSidebars:d,location:u,sidebar:b,sidebarCollapsible:C})),l.a.createElement("main",{className:N.a.docMainContainer},l.a.createElement(r.a,{components:h.a},Object(i.a)(n.routes))))):l.a.createElement(k.default,e)}},207:function(e,t,a){"use strict";(function(e){var n=a(1),l=(a(208),a(209),a(204),a(210),a(0)),r=a.n(l),c=a(194),i=a.n(c),o=a(216),s=a(214),u=a.n(s),m=a(211),d=a.n(m),f=a(212),b=a.n(f),p=a(195),v=a(122),h=a.n(v),k=a(203);(void 0!==e?e:window).Prism=k.a,a(213);var E=/{([\d,-]+)}/;t.a=function(e){var t=e.children,a=e.className,c=e.metastring,s=Object(p.a)().siteConfig.themeConfig.prism,m=void 0===s?{}:s,f=Object(l.useState)(!1),v=f[0],k=f[1],g=Object(l.useRef)(null),N=Object(l.useRef)(null),w=[];if(c&&E.test(c)){var C=c.match(E)[1];w=b.a.parse(C).filter((function(e){return e>0}))}Object(l.useEffect)((function(){var e;return N.current&&(e=new d.a(N.current,{target:function(){return g.current}})),function(){e&&e.destroy()}}),[N.current,g.current]);var y=a&&a.replace(/language-/,"");!y&&m.defaultLanguage&&(y=m.defaultLanguage);var _=function(){window.getSelection().empty(),k(!0),setTimeout((function(){return k(!1)}),2e3)};return r.a.createElement(o.a,Object(n.a)({},o.b,{theme:m.theme||u.a,code:t.trim(),language:y}),(function(e){var t=e.className,a=e.style,l=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.a.createElement("div",{className:h.a.codeBlockWrapper},r.a.createElement("pre",{ref:g,className:i()(t,h.a.codeBlock),style:a},l.map((function(e,t){var a=c({line:e,key:t});return w.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t})))})))}))),r.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:h.a.copyButton,onClick:_},v?"Copied":"Copy"))}))}}).call(this,a(66))},218:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(198);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);