webpackJsonp([35783957827783],{46:function(e,t,n){var a,r;!function(o){var l;if(a=o,r="function"==typeof a?a.call(t,n,t,e):a,!(void 0!==r&&(e.exports=r)),l=!0,e.exports=o(),l=!0,!l){var i=window.Cookies,c=window.Cookies=o();c.noConflict=function(){return window.Cookies=i,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(a){function r(){}function o(t,n,o){if("undefined"!=typeof document){o=e({path:"/"},r.defaults,o),"number"==typeof o.expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var l=JSON.stringify(n);/^[\{\[]/.test(l)&&(n=l)}catch(e){}n=a.write?a.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,o[c]!==!0&&(i+="="+o[c].split(";")[0]));return document.cookie=t+"="+n+i}}function l(e,n){if("undefined"!=typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],l=0;l<o.length;l++){var i=o[l].split("="),c=i.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var u=t(i[0]);if(c=(a.read||a)(c,u)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(r[u]=c,e===u)break}catch(e){}}return e?r[e]:r}}return r.set=o,r.get=function(e){return l(e,!1)},r.getJSON=function(e){return l(e,!0)},r.remove=function(t,n){o(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}return n(function(){})})},107:function(e,t){},79:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r);n(107);var l=function(e){e.hideUX;return o.default.createElement("section",{className:"container mt-5 mb-5",id:"about"},o.default.createElement("div",{id:"contact",className:"contact-links d-flex align-items-center justify-content-after"},o.default.createElement("a",{type:"button",className:"btn btn-light mb-4 mb-sm-0 mr-4",href:"/Matt Harris Resume.pdf",target:"_blank"},"Resume"),o.default.createElement("a",{href:"mailto:matthewzharris@gmail.com",className:"mr-4"},"matthewzharris@gmail.com"),o.default.createElement("a",{href:"https://www.linkedin.com/in/matthewzharris/",target:"_blank"},"linkedin")))};l.defaultProps={hideUX:!1},t.default=l,e.exports=t.default},80:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l=n(14),i=a(l),c=n(117),u=a(c),s=n(76),f=a(s),d=n(77),m=a(d),p=n(115),h=a(p),g=function(){return o.default.createElement(r.Fragment,null,o.default.createElement("section",{className:"container mb-5 pb-5",id:"work"},o.default.createElement("div",{className:"row"},o.default.createElement("h5",{className:"col-sm"},"Current Work")),o.default.createElement("div",{className:"row mb-4"},o.default.createElement("div",{className:"col-md-12 mb-4 mb-md-0"},o.default.createElement(i.default,{href:"https://www.datadoghq.com/product/cloud-cost-management/",title:"Cloud Cost Management",image:h.default})))),o.default.createElement("section",{className:"container mb-5 pb-5",id:"work"},o.default.createElement("div",{className:"row"},o.default.createElement("h5",{className:"col-sm"},"Past Work")),o.default.createElement("div",{className:"row mb-4"},o.default.createElement("div",{className:"col-md-12 mb-4 mb-md-0"},o.default.createElement(i.default,{href:"https://www.nginx.com/",image:u.default}))),o.default.createElement("div",{className:"row mb-4"},o.default.createElement("div",{className:"col-md-8"},o.default.createElement(i.default,{link:"/new-engen-design-system/",title:"New Engen Design System",image:f.default})),o.default.createElement("div",{className:"col-md-4"},o.default.createElement(i.default,{link:"/hazel/",title:"Hazel Analytics",subtitle:"Web app redesign",image:m.default})))))};t.default=g,e.exports=t.default},37:function(e,t){"use strict";t.__esModule=!0;t.PATH_PREFIX_COOKIE="mzhpathprefix"},115:function(e,t,n){e.exports=n.p+"static/datadog-logo.feb3d97f.png"},117:function(e,t,n){e.exports=n.p+"static/nginx.90ad15ca.png"},194:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),c=a(i),u=n(46),s=a(u),f=n(13),d=a(f),m=n(80),p=a(m),h=n(79),g=a(h),w=n(37),E=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){s.default.set(w.PATH_PREFIX_COOKIE,"")},t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement(d.default,{title:"Matt Harris"},c.default.createElement("p",{className:"index-subtitle"},"Product-minded UX Designer based in San Francisco working at"," ",c.default.createElement("a",{href:"https://datadoghq.com/",target:"_blank"},"Datadog"),".")),c.default.createElement(p.default,null),c.default.createElement(g.default,null))},t}(i.Component);t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-d4a2be28c8c3d761e803.js.map