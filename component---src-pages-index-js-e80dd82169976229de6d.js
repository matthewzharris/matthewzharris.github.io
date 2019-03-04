webpackJsonp([35783957827783],{39:function(e,t,n){var a,r;!function(i){var l=!1;if(a=i,r="function"==typeof a?a.call(t,n,t,e):a,!(void 0!==r&&(e.exports=r)),l=!0,e.exports=i(),l=!0,!l){var o=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=o,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}function t(n){function a(t,r,i){var l;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},a.defaults,i),"number"==typeof i.expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*i.expires),i.expires=o}i.expires=i.expires?i.expires.toUTCString():"";try{l=JSON.stringify(r),/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var s in i)i[s]&&(c+="; "+s,i[s]!==!0&&(c+="="+i[s]));return document.cookie=t+"="+r+c}t||(l={});for(var u=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,f=0;f<u.length;f++){var m=u[f].split("="),p=m.slice(1).join("=");this.json||'"'!==p.charAt(0)||(p=p.slice(1,-1));try{var h=m[0].replace(d,decodeURIComponent);if(p=n.read?n.read(p,h):n(p,h)||p.replace(d,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(e){}if(t===h){l=p;break}t||(l[h]=p)}catch(e){}}return l}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,n){a(t,"",e(n,{expires:-1}))},a.withConverter=t,a}return t(function(){})})},85:function(e,t){},58:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),i=a(r),l=n(26);a(l);n(85);var o=function(e){var t=e.hideUX;return i.default.createElement("section",{className:"container mt-5 mb-5",id:"about"},i.default.createElement("div",{className:"row"},i.default.createElement("h2",{className:"col-sm"},"About")),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-lg about-img mb-4 mb-lg-0"}),i.default.createElement("div",{className:"col-lg"},i.default.createElement("p",null,"Whether flipping through the latest",i.default.createElement("i",null," Design within Reach")," or traveling to the Rietveld Schröder house in the Netherlands, I’ve always been obsessed with good design—from product to typography to architecture. That obsession with design includes technology and interfaces, which led me to UX design. A Virginia native, I moved to Seattle to be a part of the vibrant UX design community. On weekends, you can typically find me exploring the city, hiking a nearby mountain, or watching old movies with my dog Bogart."),t?null:i.default.createElement(r.Fragment,null,i.default.createElement("p",null,i.default.createElement("strong",null,"Why UX")),i.default.createElement("p",null,"A focus on users has always been a part of my process. In my UX career and past experience in tech consulting, I’ve seen firsthand users interacting with software and have been fascinated with the implications of design on their experiences. Moving to a proactive design role to create for users needs is incredibly fulfilling work that I look forward to sharing with the community.")),i.default.createElement("div",{id:"contact",className:"contact-links d-flex align-items-center justify-content-between"},i.default.createElement("a",{type:"button",className:"btn btn-light mb-4 mb-sm-0",href:"./Matt Harris Resume.pdf",target:"_blank"},"Resume"),i.default.createElement("a",{href:"mailto:matthewzharris@gmail.com"},"matthewzharris@gmail.com"),i.default.createElement("a",{href:"https://www.linkedin.com/in/matthewzharris/",target:"_blank"},"linkedin"),i.default.createElement("a",{href:"https://github.com/matthewzharris",target:"_blank"},"github")))))};o.defaultProps={hideUX:!1},t.default=o,e.exports=t.default},152:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),i=a(r),l=n(13),o=a(l),c=n(40),s=a(c),u=n(94),d=a(u),f=n(93),m=a(f),p=n(56),h=a(p),g=n(95),b=a(g),v=function(){return i.default.createElement("section",{className:"container mb-5 pb-5",id:"work"},i.default.createElement("div",{className:"row"},i.default.createElement("h2",{className:"col-sm"},"Work")),i.default.createElement("div",{className:"row mb-4"},i.default.createElement("div",{className:"col-sm"},i.default.createElement(o.default,{link:"/cue/",title:"Cue Reminder",subtitle:"Information Architecture, Interaction Design, Visual Design",image:s.default}))),i.default.createElement("div",{className:"row mb-4"},i.default.createElement("div",{className:"col-md-4 mb-4 mb-md-0"},i.default.createElement(o.default,{link:"/seahappyhours/",title:"SEA Happy Hours",subtitle:"UX Design",image:b.default,cover:!1})),i.default.createElement("div",{className:"col-md-8"},i.default.createElement(o.default,{link:"/ready/",title:"ReadySeattle",subtitle:"Information Architecture, Visual Design, Project Management",image:d.default,cover:!1}))),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-md-8 mb-4 mb-md-0"},i.default.createElement(o.default,{link:"/retrofit/",title:"Retrofit Home",subtitle:"User Research, Information Architecture, Interaction Design",image:m.default,cover:!1})),i.default.createElement("div",{className:"col-md-4"},i.default.createElement(o.default,{link:"/emerald/",title:"Emerald Seattle",subtitle:"Interaction Design, Visual Design, Project Management",image:h.default,cover:!1}))))};t.default=v,e.exports=t.default},31:function(e,t){"use strict";t.__esModule=!0;t.PATH_PREFIX_COOKIE="mzhpathprefix"},93:function(e,t,n){e.exports=n.p+"static/P2HeroFinal.c2c506f3.jpg"},94:function(e,t,n){e.exports=n.p+"static/P3HeroFinal.b87f2b4f.jpg"},95:function(e,t,n){e.exports=n.p+"static/SHHhero2.206d3e5c.jpg"},180:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(1),c=a(o),s=n(26),u=(a(s),n(39)),d=a(u),f=n(12),m=a(f),p=n(152),h=a(p),g=n(58),b=a(g),v=n(31),E=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){d.default.set(v.PATH_PREFIX_COOKIE,"")},t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement(m.default,{title:"matt harris"},c.default.createElement("p",null,"I’m a UX Designer who loves creating beautiful, simple experiences for users")),c.default.createElement(h.default,null),c.default.createElement(b.default,null))},t}(o.Component);t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-e80dd82169976229de6d.js.map