import{c as h}from"../chunks/css.cecdfecc.js";import{s as A,n as q}from"../chunks/scheduler.f1cf81fe.js";import{S as F,i as M,g as S,m as x,s as I,h as b,j as y,n as z,f as g,c as O,k as u,a as U,x as a,A as w}from"../chunks/index.178ed77d.js";const G=!0,H=()=>({textClass:h({fontSize:"2xl",fontWeight:"bold",color:"green.500"}),textClass2:h({fontSize:"2xl",color:"red.500",fontWeight:"bold"}),ghostBtn:h({fontSize:"2xl",color:"orange.500"})}),X=Object.freeze(Object.defineProperty({__proto__:null,load:H,prerender:G},Symbol.toStringTag,{value:"Module"}));function J(s){let t,l,_=s[2]("style props")+"",c,d,v,n,f=s[2]("style reactive")+"",m,p,o,T=s[2]("static reactive")+"",E,W,i,k,C,B,j;return{c(){t=S("section"),l=S("div"),c=x(_),v=I(),n=S("div"),m=x(f),p=I(),o=S("div"),E=x(T),W=I(),i=S("button"),k=x("toggle"),this.h()},l(r){t=b(r,"SECTION",{});var e=y(t);l=b(e,"DIV",{class:!0});var D=y(l);c=z(D,_),D.forEach(g),v=O(e),n=b(e,"DIV",{class:!0});var P=y(n);m=z(P,f),P.forEach(g),p=O(e),o=b(e,"DIV",{class:!0});var V=y(o);E=z(V,T),V.forEach(g),W=O(e),i=b(e,"BUTTON",{class:!0});var N=y(i);k=z(N,"toggle"),N.forEach(g),e.forEach(g),this.h()},h(){u(l,"class",d=s[0].textClass),u(n,"class",s[1]),u(o,"class",s[3]),u(i,"class",C=s[0].ghostBtn)},m(r,e){U(r,t,e),a(t,l),a(l,c),a(t,v),a(t,n),a(n,m),a(t,p),a(t,o),a(o,E),a(t,W),a(t,i),a(i,k),B||(j=w(i,"click",s[4]),B=!0)},p(r,[e]){e&1&&d!==(d=r[0].textClass)&&u(l,"class",d),e&2&&u(n,"class",r[1]),e&1&&C!==(C=r[0].ghostBtn)&&u(i,"class",C)},i:q,o:q,d(r){r&&g(t),B=!1,j()}}}function K(s,t,l){let _,c,d;const v=o=>`Svelte kit PandaCSS 🐼! ${o}`;let{data:n}=t,f=!1;const m=h({fontSize:"2xl",fontWeight:"bold",color:"red.500"}),p=()=>l(5,f=!f);return s.$$set=o=>{"data"in o&&l(0,n=o.data)},s.$$.update=()=>{s.$$.dirty&224&&l(1,d=f?h(_):h(c))},l(7,_={fontSize:"2xl",fontWeight:"bold",color:"red.500"}),l(6,c={fontSize:"2xl",fontWeight:"bold",color:"blue.500"}),[n,d,v,m,p,f,c,_]}class Y extends F{constructor(t){super(),M(this,t,K,J,A,{data:0})}}export{Y as component,X as universal};
