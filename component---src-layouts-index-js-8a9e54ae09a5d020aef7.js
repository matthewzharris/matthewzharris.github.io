webpackJsonp([0x67ef26645b2a,60335399758886],{93:function(e,t){e.exports={data:{site:{siteMetadata:{title:"matt harris"}}},layoutContext:{}}},157:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),l=n(r),i=a(210),s=n(i),c=a(93),u=n(c);t.default=function(e){return l.default.createElement(s.default,o({},e,u.default))},e.exports=t.default},319:function(e,t){},323:function(e,t){},160:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),s=n(i),c=a(8),u=n(c),f=a(148),d=a(12),A=n(d),p=a(458),g=n(p),m=a(11);a(323);var h=function(e){function t(){var a,n,l;o(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=r(this,e.call.apply(e,[this].concat(s))),n.state={pathPrefix:""},l=a,r(n,l)}return l(t,e),t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){var t=A.default.get(m.PATH_PREFIX_COOKIE);t&&e.setState({pathPrefix:t})},500)},t.prototype.render=function(){var e=this.state.pathPrefix;return s.default.createElement(f.Transition,{config:f.config.slow,from:{top:-50},enter:{top:0}},function(t){return s.default.createElement("ul",{style:t,className:"nav justify-content-end p-2 fixed-top"},s.default.createElement(u.default,{className:"nav-logo-link",to:e+"/"},s.default.createElement("img",{className:"nav-logo",src:g.default,alt:"logo"})),s.default.createElement("li",{className:"nav-item"},s.default.createElement(u.default,{className:"nav-link",to:e+"/#work"},"Work")),s.default.createElement("li",{className:"nav-item"},s.default.createElement(u.default,{className:"nav-link",to:e+"/#about"},"About")),s.default.createElement("li",{className:"nav-item"},s.default.createElement(u.default,{className:"nav-link",to:e+"/#contact"},"Contact")))})},t}(i.Component);t.default=h,e.exports=t.default},449:function(e,t){e.exports="data:image/png;base64,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"},458:function(e,t,a){e.exports=a.p+"static/logo.db21d1c1.png"},327:function(e,t){},210:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=a(1),r=n(o),l=a(7),i=n(l),s=a(29),c=n(s),u=a(160),f=n(u);a(319),a(327);var d=a(449),A=n(d),p=function(e){var t=e.children,a=e.data;return r.default.createElement("div",null,r.default.createElement(c.default,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"matt harris portfolio"},{name:"keywords",content:"ux, design, portfolio, matt harris"}]},r.default.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-128123257-1"}),r.default.createElement("script",null,"window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n\n        gtag('config', 'UA-128123257-1');"),r.default.createElement("link",{key:"icon",rel:"icon",href:A.default}),r.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif",rel:"stylesheet"}),r.default.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.4.1/js/all.js",integrity:"sha384-L469/ELG4Bg9sDQbl0hvjMq8pOcqFgkSpwhwnslzvVVGpDjYJ6wJJyYjvG3u8XW7",crossorigin:"anonymous"})),r.default.createElement(f.default,null),r.default.createElement("div",null,t()))};p.propTypes={children:i.default.func},t.default=p;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-8a9e54ae09a5d020aef7.js.map