import{g as w}from"./index-BBkUAzwr.js";var d=function(t,r){var n="000000000"+t;return n.substr(n.length-r)},y=d,h=typeof window=="object"?window:self,S=Object.keys(h).length,b=navigator.mimeTypes?navigator.mimeTypes.length:0,V=y((b+navigator.userAgent.length).toString(36)+S.toString(36),4),C=function(){return V},g,c=typeof window<"u"&&(window.crypto||window.msCrypto)||typeof self<"u"&&self.crypto;if(c){var M=Math.pow(2,32)-1;g=function(){return Math.abs(c.getRandomValues(new Uint32Array(1))[0]/M)}}else g=Math.random;var R=g,o=C,p=d,$=R,i=0,l=4,u=36,v=Math.pow(u,l);function f(){return p(($()*v<<0).toString(u),l)}function m(){return i=i<v?i:0,i++,i-1}function a(){var e="c",t=new Date().getTime().toString(u),r=p(m().toString(u),l),n=o(),s=f()+f();return e+t+r+n+s}a.slug=function(){var t=new Date().getTime().toString(36),r=m().toString(36).slice(-4),n=o().slice(0,1)+o().slice(-1),s=f().slice(-2);return t.slice(-2)+r+n+s};a.isCuid=function(t){return typeof t!="string"?!1:!!t.startsWith("c")};a.isSlug=function(t){if(typeof t!="string")return!1;var r=t.length;return r>=7&&r<=10};a.fingerprint=o;var j=a;const T=w(j);export{T as c};
