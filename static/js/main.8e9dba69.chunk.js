(this["webpackJsonpmaytan.me"]=this["webpackJsonpmaytan.me"]||[]).push([[0],{48:function(e,t,n){},54:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(2),i=(n(48),n(0)),c=n.n(i),r=n(10),s=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(11),j=n(29),l=n.n(j),b=n(89),d=n(90),u=n(91),O=n(86),m=n(95),h=n(92),x=n(93),p=n(97),v=n(38),g=n(79),f=n(98),y=n(28),k=Object(p.a)(Object(v.a)({palette:{type:"light",primary:{main:y.a[500]},background:{paper:"rgba(255,255,255,0.5)"}}})),w=Object(p.a)(Object(v.a)({palette:{type:"dark",primary:{main:y.a[900]},background:{paper:"rgba(66, 66, 66, 0.4)"}}})),E=Object(g.a)((function(){return Object(f.a)({title:{flexGrow:1}})})),S=(n(54),n(81)),T=n(82),N=n(96),I=n(83),M=n(84),A=n(85),R=n(87),P=n(88);var D=n(36),L=n(80),W=n(94),B=function(){var e=Object(D.a)(),t={xs:Object(L.a)(e.breakpoints.up("xs")),sm:Object(L.a)(e.breakpoints.up("sm")),md:Object(L.a)(e.breakpoints.up("md")),lg:Object(L.a)(e.breakpoints.up("lg")),xl:Object(L.a)(e.breakpoints.up("xl"))};return function(n){var a=Object(W.a)((function(e){return t[e]&&null!=n[e]}),e.breakpoints.keys);return a&&n[a]}},C=n.p+"static/media/microservices.882f3651.png",G=n.p+"static/media/data-lake.65b6ee4b.png";function K(){var e=c.a.useRef(null),t=function(e){var t=Object(i.useState)({inView:!1,triggered:!1,entry:void 0}),n=Object(o.a)(t,2),a=n[0],c=n[1],r=new IntersectionObserver((function(t,n){t[0].intersectionRatio>0&&(c({inView:!0,triggered:!0,entry:n}),n.unobserve(e.current))}),{threshold:0,rootMargin:"0%"});return Object(i.useEffect)((function(){e.current&&!a.triggered&&r.observe(e.current)})),[a.inView,a.entry]}(e),n=Object(o.a)(t,1)[0],r=B(),s=2e3;return Object(a.jsx)("div",{ref:e,children:Object(a.jsx)(S.a,{children:Object(a.jsxs)(T.a,{container:!0,spacing:r({xs:2,md:5}),children:[Object(a.jsx)(T.a,{item:!0,sm:12,md:4,children:Object(a.jsx)(N.a,{direction:"right",in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:s,children:Object(a.jsxs)(I.a,{children:[Object(a.jsx)(M.a,{className:"project-media",image:C,title:"Microservices"}),Object(a.jsx)(A.a,{children:Object(a.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:"Packaged microservices as containers and deployed into a Kubernetes cluster. The cluster uses Istio service mesh and microservices communicate with each other over HTTP, gRPC or pubsub."})}),Object(a.jsx)(R.a,{disableSpacing:!0,children:Object(a.jsx)(m.a,{"aria-label":"open project",href:"https://medium.com/@maytan.thegeek/deploying-microservices-on-eks-a-beginners-guide-part-1-1f6f20425802",target:"_blank",children:Object(a.jsx)(P.a,{})})})]})})}),Object(a.jsx)(T.a,{item:!0,sm:12,md:4,children:Object(a.jsx)(N.a,{direction:"up",in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:s,children:Object(a.jsxs)(I.a,{children:[Object(a.jsx)(M.a,{className:"project-media",image:G,title:"Data Lake"}),Object(a.jsx)(A.a,{children:Object(a.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:"Setup a data lake for big data use cases with AWS S3. Implemented custom ETl jobs for high quality data availability. This solution is 15x cheaper than previously existing one with only a 15 min added latency."})}),Object(a.jsx)(R.a,{disableSpacing:!0,children:Object(a.jsx)(m.a,{"aria-label":"open project",children:Object(a.jsx)(P.a,{})})})]})})}),Object(a.jsx)(T.a,{item:!0,sm:12,md:4,children:Object(a.jsx)(N.a,{direction:"down",in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:s,children:Object(a.jsxs)(I.a,{children:[Object(a.jsx)(M.a,{className:"project-media",image:"../assets/images/me.jpg",title:"Device Fleet Provisioning"}),Object(a.jsx)(A.a,{children:Object(a.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:"Created Ansible enabled IoT device fleet with OTA update capabilities. The devices are edge controllers built on RaspberryPi and run multiple containers serving different applications."})}),Object(a.jsx)(R.a,{disableSpacing:!0,children:Object(a.jsx)(m.a,{"aria-label":"open project",children:Object(a.jsx)(P.a,{})})})]})})})]})})})}n(57);function V(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(.5),s=Object(o.a)(r,2),j=s[0],l=s[1];return setTimeout((function(){var e=j+.5;l(e>3?.5:e),c(!n)}),1500),Object(a.jsxs)("div",{children:[1===Math.ceil(j)?Object(a.jsx)("div",{className:n?"intro-text fadeIn":"intro-text fadeOut",children:"I AM TANMAY"}):null,2===Math.ceil(j)?Object(a.jsx)("div",{className:n?"intro-text fadeIn":"intro-text fadeOut",children:"I MAKE PROGRAMS LOOK GOOD"}):null,3===Math.ceil(j)?Object(a.jsx)("div",{className:n?"intro-text fadeIn":"intro-text fadeOut",children:"AND PERFORM A LITTLE BETTER"}):null]})}n(58);function F(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=E();return Object(a.jsxs)(b.a,{theme:n?w:k,children:[Object(a.jsx)(d.a,{position:"sticky",children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(O.a,{variant:"h6",className:r.title,children:"My Home"}),Object(a.jsx)(m.a,{onClick:function(){c(!n)},children:n?Object(a.jsx)(h.a,{}):Object(a.jsx)(x.a,{})})]})}),Object(a.jsx)(l.a,{render:function(){return Object(a.jsxs)(l.a.Wrapper,{children:[Object(a.jsx)("div",{className:"section banner home",children:Object(a.jsx)(V,{})}),Object(a.jsx)("div",{className:"section banner section-1",children:Object(a.jsx)(K,{})}),Object(a.jsx)("div",{className:"section banner section-2"}),Object(a.jsx)("div",{className:"section banner foot"})]})}})]})}s.a.render(Object(a.jsx)(F,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.8e9dba69.chunk.js.map