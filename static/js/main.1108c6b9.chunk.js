(this.webpackJsonpquote4u=this.webpackJsonpquote4u||[]).push([[0],{18:function(t,e,a){t.exports=a(43)},23:function(t,e,a){},24:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},25:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),l=(a(23),a(24),a(25),a(12)),i=a(13),u=a(16),s=a(14),m=a(17),h=a(15),d=a.n(h),b=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(s.a)(e).call(this,t))).getNewQuote=function(){a.getQuote()},a.state={quote:"",author:""},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"getQuote",value:function(){var t=this;d.a.get("https://type.fit/api/quotes").then((function(e){var a=e.data,n=a[Math.floor(Math.random()*a.length)];t.setState({quote:n.text,author:n.author})}))}},{key:"render",value:function(){var t=this.state,e=t.quote,a=t.author;return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"title"},"Get your quote"),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{id:"text"},o.a.createElement("p",null,o.a.createElement("span",{className:"qtIcon"},o.a.createElement("i",{class:"fas fa-quote-left"})),"  ",e)),o.a.createElement("div",{id:"author"},o.a.createElement("p",null,"- ",a)),o.a.createElement("div",{id:"buttons"},o.a.createElement("button",{className:"bt media"},o.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(e," ").concat(a),target:"_blank",title:"Share this quote on Twitter!"},o.a.createElement("span",null,o.a.createElement("i",{className:"fab fa-twitter twitter-icon"})))),o.a.createElement("button",{className:"bt media"},o.a.createElement("a",{id:"tumblr-quote",href:"https://www.tumblr.com/share",target:"_blank",title:"Share this quote on Tumblr!"},o.a.createElement("span",null,o.a.createElement("i",{class:"fab fa-tumblr"}))),o.a.createElement("script",{id:"tumblr-js",async:!0,src:"https://assets.tumblr.com/share-button.js"})),o.a.createElement("button",{type:"button",id:"new-quote",className:"bt",onClick:this.getNewQuote},"New Quote")))))}}]),e}(n.Component);var f=function(){return o.a.createElement("div",null,o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1108c6b9.chunk.js.map