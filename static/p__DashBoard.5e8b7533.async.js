(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"14J3":function(e,a,t){"use strict";t("cIOH"),t("1GLa")},"5gdR":function(e,a,t){"use strict";t.r(a);t("14J3");var n=t("BMrR"),r=(t("jCWc"),t("kPKH")),l=(t("qVdP"),t("jsC+")),s=(t("lUTK"),t("BvKs")),i=t("fWQN"),c=t("mtLc"),o=t("yKVA"),u=t("879j"),d=t("GZ0F"),m=t("q1tI"),f=t.n(m),h=t("Hx5s"),p=t("9kvl"),g=(t("T2oS"),t("W9HT")),_=function(){return f.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},f.a.createElement(g["a"],{size:"large"}))},y=t("wd/R"),v=t.n(y);function b(e){return 1*e<10?"0".concat(e):e}function k(e){var a=new Date,t=864e5;if("today"===e)return a.setHours(0),a.setMinutes(0),a.setSeconds(0),[v()(a),v()(a.getTime()+(t-1e3))];if("week"===e){var n=a.getDay();a.setHours(0),a.setMinutes(0),a.setSeconds(0),0===n?n=6:n-=1;var r=a.getTime()-n*t;return[v()(r),v()(r+(7*t-1e3))]}var l=a.getFullYear();if("month"===e){var s=a.getMonth(),i=v()(a).add(1,"months"),c=i.year(),o=i.month();return[v()("".concat(l,"-").concat(b(s+1),"-01 00:00:00")),v()(v()("".concat(c,"-").concat(b(o+1),"-01 00:00:00")).valueOf()-1e3)]}return[v()("".concat(l,"-01-01 00:00:00")),v()("".concat(l,"-12-31 23:59:59"))]}var E=t("r+vE"),T=t.n(E),D=f.a.lazy((function(){return Promise.all([t.e(4),t.e(5),t.e(31)]).then(t.bind(null,"9ZY+"))})),C=f.a.lazy((function(){return Promise.all([t.e(2),t.e(4),t.e(5),t.e(37)]).then(t.bind(null,"3gnT"))})),P=f.a.lazy((function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(5),t.e(33)]).then(t.bind(null,"4VQV"))})),S=f.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(5),t.e(39)]).then(t.bind(null,"g5ZN"))})),x=f.a.lazy((function(){return Promise.all([t.e(4),t.e(5),t.e(35)]).then(t.bind(null,"ZFZn"))})),A=function(e){Object(o["a"])(t,e);var a=Object(u["a"])(t);function t(){var e;Object(i["a"])(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=a.call.apply(a,[this].concat(r)),e.state={salesType:"all",currentTabKey:"",rangePickerValue:k("year")},e.reqRef=0,e.timeoutId=0,e.handleChangeSalesType=function(a){e.setState({salesType:a.target.value})},e.handleTabChange=function(a){e.setState({currentTabKey:a})},e.handleRangePickerChange=function(a){var t=e.props.dispatch;e.setState({rangePickerValue:a}),t({type:"dashboardAndanalysis/fetchSalesData"})},e.selectDate=function(a){var t=e.props.dispatch;e.setState({rangePickerValue:k(a)}),t({type:"dashboardAndanalysis/fetchSalesData"})},e.isActive=function(a){var t=e.state.rangePickerValue;if(!t)return"";var n=k(a);return n&&t[0]&&t[1]&&t[0].isSame(n[0],"day")&&t[1].isSame(n[1],"day")?T.a.currentDate:""},e}return Object(c["a"])(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;this.reqRef=requestAnimationFrame((function(){e({type:"dashboardAndanalysis/fetch"})}))}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e,a=this.state,t=a.rangePickerValue,i=a.salesType,c=a.currentTabKey,o=this.props,u=o.dashboardAndanalysis,p=o.loading,g=u.visitData,y=u.visitData2,v=u.salesData,b=u.searchData,k=u.offlineData,E=u.offlineChartData,A=u.salesTypeData,R=u.salesTypeDataOnline,w=u.salesTypeDataOffline;e="all"===i?A:"online"===i?R:w;var O=f.a.createElement(s["a"],null,f.a.createElement(s["a"].Item,null,"\u64cd\u4f5c\u4e00"),f.a.createElement(s["a"].Item,null,"\u64cd\u4f5c\u4e8c")),V=f.a.createElement("span",{className:T.a.iconGroup},f.a.createElement(l["a"],{overlay:O,placement:"bottomRight"},f.a.createElement(d["a"],null))),q=c||k[0]&&k[0].name;return f.a.createElement(h["b"],null,f.a.createElement(f.a.Fragment,null,f.a.createElement(m["Suspense"],{fallback:f.a.createElement(_,null)},f.a.createElement(D,{loading:p,visitData:g})),f.a.createElement(m["Suspense"],{fallback:null},f.a.createElement(C,{rangePickerValue:t,salesData:v,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:p,selectDate:this.selectDate})),f.a.createElement(n["a"],{gutter:24,style:{marginTop:24}},f.a.createElement(r["a"],{xl:12,lg:24,md:24,sm:24,xs:24},f.a.createElement(m["Suspense"],{fallback:null},f.a.createElement(P,{loading:p,visitData2:y,searchData:b,dropdownGroup:V}))),f.a.createElement(r["a"],{xl:12,lg:24,md:24,sm:24,xs:24},f.a.createElement(m["Suspense"],{fallback:null},f.a.createElement(S,{dropdownGroup:V,salesType:i,loading:p,salesPieData:e,handleChangeSalesType:this.handleChangeSalesType})))),f.a.createElement(m["Suspense"],{fallback:null},f.a.createElement(x,{activeKey:q,loading:p,offlineData:k,offlineChartData:E,handleTabChange:this.handleTabChange}))))}}]),t}(m["Component"]);a["default"]=Object(p["b"])((function(e){var a=e.dashboardAndanalysis,t=e.loading;return{dashboardAndanalysis:a,loading:t.effects["dashboardAndanalysis/fetch"]}}))(A)},BMrR:function(e,a,t){"use strict";var n=t("qrJ5");a["a"]=n["a"]},GZ0F:function(e,a,t){"use strict";var n=t("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},l=r,s=t("6VBw"),i=function(e,a){return n["createElement"](s["a"],Object.assign({},e,{ref:a,icon:l}))};i.displayName="EllipsisOutlined";a["a"]=n["forwardRef"](i)},jCWc:function(e,a,t){"use strict";t("cIOH"),t("1GLa")},kPKH:function(e,a,t){"use strict";var n=t("/kpp");a["a"]=n["a"]},"r+vE":function(e,a,t){e.exports={iconGroup:"iconGroup___1R1_n",anticon:"anticon___2GeAJ",rankingList:"rankingList___29DF-",rankingItemNumber:"rankingItemNumber___3-JCe",active:"active___v4-Mq",rankingItemTitle:"rankingItemTitle___3Q7xl",salesExtra:"salesExtra___VOdcd",currentDate:"currentDate___1GHfa",salesCard:"salesCard___qeFUt",salesBar:"salesBar___2cKBD",salesRank:"salesRank___3YNeV",salesCardExtra:"salesCardExtra___1ZCPO",salesTypeRadio:"salesTypeRadio___1Mtb3",offlineCard:"offlineCard___aQ9x2",trendText:"trendText___1nWQ3",rankingTitle:"rankingTitle___2qUhq",salesExtraWrap:"salesExtraWrap___11MFs"}}}]);