(this.webpackJsonpCrownfunding=this.webpackJsonpCrownfunding||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(11),i=c.n(s),r=(c(23),c(24),c(5)),l=(c(25),c(26),c(1));var d=function(e){var t=e.children,c=e.onClick,n=e.btnStyle;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:" btn ".concat(n," "),onClick:c,type:"button",children:Object(l.jsx)("p",{children:t})})})},o=c.p+"static/media/logo.e6f12bc6.svg",j=c.p+"static/media/icon-hamburger.f8a9f0cf.svg",b=c.p+"static/media/icon-close-modal.732388df.svg",u=c(12),h=(c(28),function(e){var t=e.btnStyle,c=e.children,n=e.btnName,a=e.onClick;e.position;return Object(l.jsx)(u.a,{trigger:Object(l.jsxs)(d,{className:"button",btnStyle:t,onClick:a,children:[" ",n,"  "]}),closeOnDocumentClick:!0,children:function(e){return Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"close",children:Object(l.jsx)(d,{onClick:e,btnStyle:"btn-nav",children:Object(l.jsx)("img",{src:b,alt:"close"})})}),Object(l.jsx)("div",{className:"content",children:c})]})}})});var m=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("div",{className:"nav-icon",children:Object(l.jsx)("img",{src:o,alt:"crownfund"})}),c?Object(l.jsx)("div",{className:"hamburger",children:Object(l.jsx)(d,{onClick:function(){a(!1)},className:"burger",btnStyle:"btn-nav",children:Object(l.jsx)("img",{src:j,alt:"hamburger"})})}):Object(l.jsxs)("div",{className:"nav-hide",children:[Object(l.jsx)("div",{className:"close",children:Object(l.jsx)(d,{onClick:function(){a(!0)},className:"close",btnStyle:"btn-nav",children:Object(l.jsx)("img",{src:b,alt:"close"})})}),Object(l.jsxs)("div",{className:"nav-nav",children:[Object(l.jsx)("h4",{children:"About"}),Object(l.jsx)("hr",{}),Object(l.jsx)("h4",{children:"Discover"}),Object(l.jsx)("hr",{}),Object(l.jsx)("h4",{children:"Get Started"})]})]}),Object(l.jsx)("div",{className:"desktop-nav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"About"}),Object(l.jsx)("li",{children:"Discover"}),Object(l.jsx)("li",{children:"Get Started"})]})})]})};c(29);var O=function(e){var t=e.children;return Object(l.jsx)("div",{className:"card",children:t})},x=(c(30),c(31),c(32),c(33),c.p+"static/media/logo-mastercraft.dca2a831.svg"),p=c.p+"static/media/icon-bookmark.7777f8ec.svg";var v=function(){return Object(l.jsx)(O,{children:Object(l.jsxs)("div",{className:"home-card",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{src:x,alt:"Bamboo"})}),Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h3",{children:" Mastercraft Bamboo Monitor Riser "})}),Object(l.jsx)("div",{className:"detail",children:Object(l.jsx)("span",{children:" A beautiful & handcrafted monitor stand to reduce neck and eye strain. "})}),Object(l.jsxs)("div",{className:"btn-section",children:[Object(l.jsx)(h,{btnName:"Back this Project",btnStyle:"btn-default",children:Object(l.jsx)(M,{})}),Object(l.jsx)(d,{btnStyle:"btn-bookmark",className:"bookmark",children:Object(l.jsx)("img",{src:p,alt:"bookmark"})})]})]})})},f=(c(34),c.p+"static/media/icon-check.bdee5269.svg"),g=c(10),k=c.n(g),N=c(13),y=c(17),S=c(14),w=c(15);c(40);w.a.initializeApp({apiKey:"AIzaSyDZN9Jujj-lcXJdNtp2Wv6KGvAZKWyRhDI",authDomain:"crowdfund-26876.firebaseapp.com",projectId:"crowdfund-26876",storageBucket:"crowdfund-26876.appspot.com",messagingSenderId:"1033915997303",appId:"1:1033915997303:web:f7c59de8b79c040741fa72"});var C=w.a.firestore(),B=(w.a,a.a.createContext([{},function(){}])),T=a.a.createContext([{},function(){}]),P=a.a.createContext([{},function(){}]);var Y=function(e){var t=e.children,c=Object(n.useState)(0),a=Object(r.a)(c,2),s=a[0],i=a[1],d=Object(n.useState)(0),o=Object(r.a)(d,2),j=o[0],b=o[1],u=Object(n.useState)(null),h=Object(r.a)(u,2),m=(h[0],h[1],Object(n.useState)(!1)),O=Object(r.a)(m,2);return O[0],O[1],Object(n.useEffect)((function(){var e=[];(function(){var t=Object(S.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.collection("PledgeData").get().then((function(t){t.docs.forEach((function(t){var c=t.id,n=Object(y.a)(Object(y.a)({},t.data()),{},Object(N.a)({},"id",c));e.push(n),b(e[0].PledgeDonors),i(e[0].PledgeAmount)}))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(l.jsx)(B.Provider,{value:[s,i],children:Object(l.jsx)(T.Provider,{value:[j,b],children:t})})};var D=function(e){e.onclick;var t=e.head,c=e.amount,a=e.children,s=e.remain,i=Object(n.useState)(""),o=Object(r.a)(i,2),j=o[0],b=o[1],h=Object(n.useState)(!1),m=Object(r.a)(h,2),x=m[0],p=m[1],v=Object(n.useContext)(B),g=Object(r.a)(v,2),k=g[0],N=g[1],y=Object(n.useContext)(T),S=Object(r.a)(y,2),w=S[0],C=S[1],Y=Object(n.useContext)(P),D=Object(r.a)(Y,2),M=(D[0],D[1],function(){return p(!1)});return Object(l.jsx)(O,{children:Object(l.jsxs)("div",{className:"pledge-card",children:[Object(l.jsxs)("div",{className:"card-show",children:[Object(l.jsxs)("div",{className:"pledgecard-title",children:[Object(l.jsx)("div",{className:"checkbox",children:Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"checkbox",className:"checkb"})})}),Object(l.jsxs)("div",{className:"title-detail",children:[Object(l.jsx)("h3",{children:t}),function(e){return 0==e?null:Object(l.jsxs)("p",{children:["Pledge $",e," or more"]})}(c)]})]}),Object(l.jsxs)("p",{children:[a,"bvhkh"]}),Object(l.jsxs)("span",{children:[s," left"]})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"pledge-hide",children:[Object(l.jsx)("div",{className:"title",children:"Enter Your pledge"}),Object(l.jsxs)("div",{className:"pledge",children:[Object(l.jsxs)("div",{className:"label",children:[Object(l.jsx)("h4",{children:"$"}),Object(l.jsx)("label",{children:Object(l.jsx)("input",{type:"number",placeholder:c,min:"2",value:j,onChange:function(e){return b(e.target.value)}})})]}),Object(l.jsx)(d,{btnStyle:"btn-default",onClick:function(e){e.preventDefault(),j<c?alert("Please donate $".concat(c," or more")):(C(w+1),N(k+parseInt(j)),console.log("I am from PledgeCard ".concat(k)),p(!0))},children:"Continue"}),Object(l.jsx)(u.a,{open:x,closeOnDocumentClick:!0,onClose:M,children:Object(l.jsx)("div",{className:"thank-card",children:Object(l.jsxs)(O,{children:[Object(l.jsx)("div",{className:"check",children:Object(l.jsx)("img",{src:f,alt:"check"})}),Object(l.jsx)("div",{className:"thank-title",children:Object(l.jsx)("h3",{children:" Thanks for your support ! "})}),Object(l.jsx)("div",{className:"thank-description",children:Object(l.jsxs)("span",{children:["Your pledge of $",j," brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."]})}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{onClick:M,btnStyle:"btn-default",children:"Got it!"})})]})})})]})]})]})})};var M=function(){return Object(l.jsx)("div",{className:"pledge-bg",children:Object(l.jsx)(O,{children:Object(l.jsxs)("div",{className:"pledge",children:[Object(l.jsxs)("div",{className:"pledge-title",children:[Object(l.jsx)("h3",{children:"Back this project"}),Object(l.jsx)("p",{children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"})]}),Object(l.jsxs)("div",{className:"pledgecard-section",children:[Object(l.jsx)(D,{head:"Pledge with no reward",amount:"0",children:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."}),Object(l.jsx)(D,{head:"Bamboo Stand",amount:"25",remain:"101",children:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list."}),Object(l.jsx)(D,{head:"Black Edition Stand",amount:"75",remain:"64",children:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}),Object(l.jsx)(D,{head:"Mahogany Special Edition",amount:"200",remain:"0",children:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."})]})]})})})};var E=function(e){var t=e.btnStyle,c=e.rewardText,n=e.pledgeText,a=e.children,s=e.leftText,i=e.btnText;return Object(l.jsx)("div",{children:Object(l.jsx)(O,{children:Object(l.jsxs)("div",{className:"reward",children:[Object(l.jsx)("div",{className:"reward-title",children:Object(l.jsx)("h3",{children:c})}),Object(l.jsx)("div",{className:"pledge-text",children:Object(l.jsx)("h4",{children:n})}),Object(l.jsx)("div",{className:"description",children:Object(l.jsx)("span",{children:a})}),Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("span",{children:s})," left"]}),Object(l.jsx)("div",{className:"btn",children:Object(l.jsx)(h,{btnStyle:t,btnName:i,children:Object(l.jsx)(M,{})})})]})})})};var I=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(O,{children:[Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h3",{children:"About this project"}),Object(l.jsx)("p",{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(l.jsx)("p",{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."})]}),Object(l.jsxs)("div",{className:"reward-cards",children:[Object(l.jsx)(E,{rewardText:"Bamboo Stand",pledgeText:"Pledge $25 or more",leftText:"101",btnStyle:"btn-default1",btnText:"Select Reward",children:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list."}),Object(l.jsx)(E,{rewardText:"Black Edition Stand",pledgeText:"Pledge $75 or more",leftText:"64",btnStyle:"btn-default1",btnText:"Select Reward",children:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}),Object(l.jsx)(E,{rewardText:"Mahogany Special Edition",pledgeText:"Pledge $200 or more",leftText:"0",btnStyle:"btn-inactive",btnText:"Out of stock",children:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."})]})]})})};c(37);var A=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),d=i[0],o=i[1],j=Object(n.useState)("00"),b=Object(r.a)(j,2),u=b[0],h=b[1],m=Object(n.useContext)(B),x=Object(r.a)(m,2),p=x[0],v=(x[1],Object(n.useContext)(T)),f=Object(r.a)(v,2),g=f[0],N=(f[1],function(e,t){return Object(l.jsxs)("div",{className:"cash",children:[Object(l.jsx)("h3",{children:e}),Object(l.jsx)("p",{children:t})]})}),y=Object(n.useRef)(),w=function(){return 100*c/1e5};return Object(n.useEffect)((function(){return a(p),o(g),function(){var e=new Date("May 27, 2021 00:00:00").getTime();y=setInterval((function(){var t=(new Date).getTime(),c=e-t,n=Math.floor(c/864e5);c<0?clearInterval(y.current):h(n)}),1e3)}(),w(),function(){clearInterval(y.current)}}),[p,g]),Object(n.useEffect)((function(){if(0===c||0===d)return null;(function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.collection("PledgeData").doc("LWKP3XHvYQzG8ULWtzAd").update({PledgeAmount:c,PledgeDonors:d});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c,d]),Object(l.jsxs)(O,{children:[Object(l.jsx)("div",{className:"dashboard",children:Object(l.jsxs)("div",{className:"dashboard-details",children:[Object(l.jsxs)("div",{className:"pledge-amount",children:[N(" $".concat(c),"of $100,000 backed"),Object(l.jsx)("hr",{className:"line"})]}),Object(l.jsxs)("div",{className:"donors",children:[N(d,"total backers"),Object(l.jsx)("hr",{className:"line"})]}),Object(l.jsx)("div",{className:"days-left",children:N(u,"days left")})]})}),Object(l.jsx)("div",{className:"my-progress",style:{width:"100%",background:"hsla(0, 17%, 88%, 0.873)",border:"1px hidden",borderRadius:"15px",overflow:"hidden"},children:Object(l.jsx)("div",{className:"my-bar",style:{width:"".concat(w(),"%"),background:"hsl(163deg 55% 41%)",height:"12px",border:"1px hidden",borderRadius:"15px"}})})]})};c(38);var R=function(){return Object(l.jsx)(Y,{children:Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(v,{}),Object(l.jsx)(A,{}),Object(l.jsx)(I,{})]})})},$=c.p+"static/media/image-hero-mobile.d4f477d4.jpg",F=c.p+"static/media/image-hero-desktop.631209c1.jpg";var G=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsxs)("div",{className:"bg",children:[Object(l.jsx)("img",{src:$,alt:"bg-Image",className:"mobile"}),Object(l.jsx)("img",{src:F,alt:"bg-Image",className:"desktop"})]}),Object(l.jsx)(R,{})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root")),W()}},[[39,1,2]]]);
//# sourceMappingURL=main.2ba8e754.chunk.js.map