(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{191:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(198),c=t(206),m=t(196);var i=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(m.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata;return r.a.createElement(l.a,{title:n.title,description:n.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),(n.nextItem||n.prevItem)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:n.nextItem,prevItem:n.prevItem}))))))}},206:function(e,a,t){"use strict";t(67);var n=t(0),r=t.n(n),l=t(194),c=t.n(l),m=t(193),i=t(196),o=t(215),s=t(123),u=t.n(s),v=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,g=e.children,p=e.frontMatter,d=e.metadata,E=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,N=d.date,h=d.permalink,_=d.tags,k=p.author,y=p.title,w=p.author_url||p.authorURL,P=p.author_title||p.authorTitle,I=p.author_image_url||p.authorImageURL;return r.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],l=v[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},b?y:r.a.createElement(i.a,{to:h},y)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:N,className:u.a.blogPostDate},l," ",s,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},I&&r.a.createElement("a",{className:"avatar__photo-link",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:I,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},P)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},g)),(_.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:d.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More")))))}},207:function(e,a,t){"use strict";(function(e){var n=t(1),r=(t(208),t(209),t(204),t(210),t(0)),l=t.n(r),c=t(194),m=t.n(c),i=t(216),o=t(214),s=t.n(o),u=t(211),v=t.n(u),g=t(212),p=t.n(g),d=t(195),E=t(122),f=t.n(E),b=t(203);(void 0!==e?e:window).Prism=b.a,t(213);var N=/{([\d,-]+)}/;a.a=function(e){var a=e.children,t=e.className,c=e.metastring,o=Object(d.a)().siteConfig.themeConfig.prism,u=void 0===o?{}:o,g=Object(r.useState)(!1),E=g[0],b=g[1],h=Object(r.useRef)(null),_=Object(r.useRef)(null),k=[];if(c&&N.test(c)){var y=c.match(N)[1];k=p.a.parse(y).filter((function(e){return e>0}))}Object(r.useEffect)((function(){var e;return _.current&&(e=new v.a(_.current,{target:function(){return h.current}})),function(){e&&e.destroy()}}),[_.current,h.current]);var w=t&&t.replace(/language-/,"");!w&&u.defaultLanguage&&(w=u.defaultLanguage);var P=function(){window.getSelection().empty(),b(!0),setTimeout((function(){return b(!1)}),2e3)};return l.a.createElement(i.a,Object(n.a)({},i.b,{theme:u.theme||s.a,code:a.trim(),language:w}),(function(e){var a=e.className,t=e.style,r=e.tokens,c=e.getLineProps,i=e.getTokenProps;return l.a.createElement("div",{className:f.a.codeBlockWrapper},l.a.createElement("pre",{ref:h,className:m()(a,f.a.codeBlock),style:t},r.map((function(e,a){var t=c({line:e,key:a});return k.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:a},t),e.map((function(e,a){return l.a.createElement("span",Object(n.a)({key:a},i({token:e,key:a})))})))}))),l.a.createElement("button",{ref:_,type:"button","aria-label":"Copy code to clipboard",className:f.a.copyButton,onClick:P},E?"Copied":"Copy"))}))}}).call(this,t(66))}}]);