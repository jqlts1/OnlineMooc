(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{Nvxa:function(e,a,t){e.exports={login:"login___iChfK",getCaptcha:"getCaptcha___2wYPL",icon:"icon___2CKY9",other:"other___1JfJz",register:"register___2pF9n",prefixIcon:"prefixIcon___9_L4W",submit:"submit___5E7bY"}},allF:function(e,a,t){"use strict";t.r(a);var n=t("k1fw"),c=t("tJVT"),r=(t("fOrg"),t("+KLJ")),o=t("R+Pm"),i=t("q1tI"),l=t.n(i),s=t("9kvl"),u=(t("y8nQ"),t("Vl3Y")),m=(t("Znn+"),t("ZTPi")),p=t("oBTY"),d=t("yUgw"),b=t("TSYQ"),f=t.n(b),g=Object(i["createContext"])({}),h=g,E=(t("T2oS"),t("W9HT")),v=(t("14J3"),t("BMrR")),j=(t("+L6B"),t("2/Rp")),C=(t("jCWc"),t("kPKH")),O=(t("5NDa"),t("5rEg")),_=t("0Owb"),y=t("WmNS"),w=t.n(y),P=(t("miYZ"),t("tsqr")),x=t("9og8"),N=t("PpiC"),T=t("BGR+"),S=t("anxO"),k=t("cJ7L"),I=t("MGYb"),L=t("cGnJ"),U=t("Nvxa"),q=t.n(U),z=Object(o["a"])({scriptUrl:"//at.alicdn.com/t/font_1873282_onfaq4da0nb.js"}),G={UserName:{props:{size:"large",id:"userName",prefix:l.a.createElement(k["a"],{style:{color:"#1890ff"},className:q.a.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:l.a.createElement(I["a"],{className:q.a.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Email:{props:{size:"large",prefix:l.a.createElement(L["a"],{className:q.a.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:l.a.createElement(z,{type:"iconyanzhengma",className:q.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]},PicCaptcha:{props:{size:"large",prefix:l.a.createElement(z,{type:"iconyanzhengma",className:q.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}},J=u["a"].Item,A=function(e){var a=e.onChange,t=e.defaultValue,n=e.customProps,c=void 0===n?{}:n,r=e.rules,o={rules:r||c.rules};return a&&(o.onChange=a),t&&(o.initialValue=t),o},B=function(e){var a=Object(i["useState"])(e.countDown||0),t=Object(c["a"])(a,2),n=t[0],r=t[1],o=Object(i["useState"])(!1),s=Object(c["a"])(o,2),u=s[0],m=s[1],p=(e.onChange,e.customProps),d=(e.defaultValue,e.rules,e.name),b=(e.getCaptchaButtonText,e.getCaptchaSecondText,e.updateActive,e.type),f=(e.tabUtil,e.codeImg),g=e.codeLoading,h=(e.onGetPicCaptcha,Object(N["a"])(e,["onChange","customProps","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type","tabUtil","codeImg","codeLoading","onGetPicCaptcha"])),y=function(){var a=e.onGetPicCaptcha;a&&a()},k=Object(i["useCallback"])(function(){var e=Object(x["a"])(w.a.mark((function e(a){var t;return w.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(S["c"])(a);case 2:if(t=e.sent,!1!==t){e.next=5;break}return e.abrupt("return");case 5:P["a"].success("\u83b7\u53d6\u9a8c\u8bc1\u7801\u6210\u529f\uff01\u8bf7\u524d\u5f80\u90ae\u4ef6\u67e5\u770b\u9a8c\u8bc1\u7801"),m(!0);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]);if(Object(i["useEffect"])((function(){var a=0,t=e.countDown;return u&&(a=window.setInterval((function(){r((function(e){return e<=1?(m(!1),clearInterval(a),t||60):e-1}))}),1e3)),function(){return clearInterval(a)}}),[u]),!d)return null;var I=A(e),L=h||{};if("Captcha"===b){var U=Object(T["a"])(L,["onGetCaptcha","countDown"]);return l.a.createElement(J,{shouldUpdate:!0,noStyle:!0},(function(e){var a=e.getFieldValue;return l.a.createElement(v["a"],{gutter:8},l.a.createElement(C["a"],{span:16},l.a.createElement(J,Object(_["a"])({name:d},I),l.a.createElement(O["a"],Object(_["a"])({},p,U)))),l.a.createElement(C["a"],{span:8},l.a.createElement(j["a"],{disabled:u,className:q.a.getCaptcha,size:"large",onClick:function(){var e=a("email");k(e)}},u?"".concat(n," \u79d2"):"\u83b7\u53d6\u9a8c\u8bc1\u7801")))}))}if("PicCaptcha"===b){var z=Object(T["a"])(L,["onGetPicCaptcha","codeimg"]);return l.a.createElement(J,{shouldUpdate:!0,noStyle:!0},(function(e){e.getFieldValue;return l.a.createElement(v["a"],{gutter:8},l.a.createElement(C["a"],{span:16},l.a.createElement(J,Object(_["a"])({name:d},I),l.a.createElement(O["a"],Object(_["a"])({},p,z)))),l.a.createElement(C["a"],{span:8},l.a.createElement(E["a"],{spinning:g},l.a.createElement("img",{alt:"Captcha",style:{width:"100%",height:35,marginTop:2.5,marginLeft:10},src:f,onClick:y}))))}))}return"Password"===b?l.a.createElement(J,Object(_["a"])({name:d},I),l.a.createElement(O["a"].Password,Object(_["a"])({},p,L))):l.a.createElement(J,Object(_["a"])({name:d},I),l.a.createElement(O["a"],Object(_["a"])({},p,L)))},V={};Object.keys(G).forEach((function(e){var a=G[e];V[e]=function(t){return l.a.createElement(h.Consumer,null,(function(n){return l.a.createElement(B,Object(_["a"])({customProps:a.props,rules:a.rules},t,{type:e},n,{updateActive:n.updateActive}))}))}}));var Y=V,F=u["a"].Item,K=function(e){var a=e.className,t=Object(N["a"])(e,["className"]),n=f()(q.a.submit,a);return l.a.createElement(F,null,l.a.createElement(j["a"],Object(_["a"])({size:"large",className:n,type:"primary",htmlType:"submit"},t)))},W=K,Z=m["a"].TabPane,D=function(){var e=0;return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(a).concat(e)}}(),R=function(e){Object(i["useEffect"])((function(){var a=D("login-tab-"),t=e.tabUtil;t&&t.addTab(a)}),[]);var a=e.children;return l.a.createElement(Z,e,e.active&&a)},H=function(e){return l.a.createElement(h.Consumer,null,(function(a){return l.a.createElement(R,Object(_["a"])({tabUtil:a.tabUtil},e))}))};H.typeName="LoginTab";var M=H,Q=function(e){var a=e.className,t=Object(i["useState"])([]),n=Object(c["a"])(t,2),r=n[0],o=n[1],s=Object(i["useState"])({}),b=Object(c["a"])(s,2),g=b[0],E=b[1],v=Object(d["a"])("",{value:e.activeKey,onChange:e.onTabChange}),j=Object(c["a"])(v,2),C=j[0],O=j[1],_=[],y=[];return l.a.Children.forEach(e.children,(function(e){e&&("LoginTab"===e.type.typeName?_.push(e):y.push(e))})),l.a.createElement(h.Provider,{value:{tabUtil:{addTab:function(e){o([].concat(Object(p["a"])(r),[e]))},removeTab:function(e){o(r.filter((function(a){return a!==e})))}},updateActive:function(e){g&&(g[C]?g[C].push(e):g[C]=[e],E(g))}}},l.a.createElement("div",{className:f()(a,q.a.login)},l.a.createElement(u["a"],{form:e.from,onFinish:function(a){e.onSubmit&&e.onSubmit(a)}},r.length?l.a.createElement(l.a.Fragment,null,l.a.createElement(m["a"],{animated:!1,className:q.a.tabs,activeKey:C,onChange:function(e){O(e)}},_),y):e.children)))};Q.Tab=M,Q.Submit=W,Q.UserName=Y.UserName,Q.Password=Y.Password,Q.PicCaptcha=Y.PicCaptcha,Q.Email=Y.Email,Q.Captcha=Y.Captcha;var $=Q,X=t("x1+w"),ee=t.n(X),ae=$.Tab,te=$.UserName,ne=$.Password,ce=$.Email,re=$.Captcha,oe=$.Submit,ie=$.PicCaptcha,le=(Object(o["a"])({scriptUrl:"//at.alicdn.com/t/font_1873282_onfaq4da0nb.js"}),function(e){var a=e.content;return l.a.createElement(r["a"],{style:{marginBottom:24},message:a,type:"error",showIcon:!0})}),se=function(e){var a=e.userLogin,t=void 0===a?{}:a,r=e.submitting,o=e.codeLoading,s=t.status,u=t.type,m=Object(i["useState"])(!0),p=Object(c["a"])(m,2),d=(p[0],p[1],Object(i["useState"])("account")),b=Object(c["a"])(d,2),f=b[0],g=b[1],h=Object(i["useState"])("key"),E=Object(c["a"])(h,2),v=E[0],j=E[1],C=Object(i["useState"])(null),O=Object(c["a"])(C,2),_=O[0],y=O[1];Object(i["useEffect"])((function(){w()}),[]);var w=function(){P().then((function(e){console.log(e),y(e&&e.image_url),j(e&&e.key)})).catch((function(e){console.log(e)}))},P=function(){return new Promise((function(a,t){var n=e.dispatch;n({type:"login/getcode"}).then(a).catch(t)}))},x=function(a){var t=e.dispatch;t({type:"login/login",payload:Object(n["a"])(Object(n["a"])({},a),{},{type:f,key:v})})};return l.a.createElement("div",{className:ee.a.main},l.a.createElement($,{activeKey:f,onTabChange:g,onSubmit:x},l.a.createElement(ae,{key:"account",tab:"\u8d26\u6237\u5bc6\u7801\u767b\u5f55"},"error"===s&&"account"===u&&!r&&l.a.createElement(le,{content:"\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef"}),l.a.createElement(te,{name:"userName",placeholder:"\u7528\u6237\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]}),l.a.createElement(ne,{name:"password",placeholder:"\u5bc6\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"}]}),l.a.createElement(ie,{name:"pic_captcha",placeholder:"\u9a8c\u8bc1\u7801",onGetPicCaptcha:w,codeImg:_,codeLoading:o,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})),l.a.createElement(ae,{key:"email",tab:"\u90ae\u7bb1\u9a8c\u8bc1\u7801\u767b\u5f55"},"error"===s&&"email"===u&&!r&&l.a.createElement(le,{content:"\u9a8c\u8bc1\u7801\u9519\u8bef"}),l.a.createElement(ce,{name:"email",placeholder:"\u90ae\u7bb1",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740\uff01"},{pattern:/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/,message:"\u90ae\u7bb1\u5730\u5740\u683c\u5f0f\u9519\u8bef\uff01"}]}),l.a.createElement(re,{name:"captcha",placeholder:"\u9a8c\u8bc1\u7801",countDown:120,getCaptchaButtonText:"",getCaptchaSecondText:"\u79d2",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]})),l.a.createElement(oe,{loading:r},"\u767b\u5f55")))};a["default"]=Object(s["b"])((function(e){var a=e.login,t=e.loading;return{userLogin:a,submitting:t.effects["login/login"],codeLoading:t.effects["login/getcode"]}}))(se)},"x1+w":function(e,a,t){e.exports={main:"main___34rpC",icon:"icon___Wd0FC",other:"other___SWkac",register:"register___1uCrf"}}}]);