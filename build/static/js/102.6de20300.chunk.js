(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[102],{1067:function(e,a,t){"use strict";var n=t(6),r=t(37),s=t(8),l=t(1),c=t.n(l),i=t(2),o=t.n(i),m=t(5),p=t.n(m),d=t(4),u=["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barStyle","barAriaValueText","barAriaLabelledBy"];function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var g={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:d.tagPropType,value:o.a.oneOfType([o.a.string,o.a.number]),min:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object,style:o.a.object,barStyle:o.a.object,barAriaValueText:o.a.string,barAriaLabelledBy:o.a.string},f=function(e){var a=e.children,t=e.className,r=e.barClassName,l=e.cssModule,i=e.value,o=e.min,m=e.max,h=e.animated,g=e.striped,f=e.color,E=e.bar,y=e.multi,v=e.tag,N=e.style,x=e.barStyle,w=e.barAriaValueText,j=e.barAriaLabelledBy,O=Object(s.a)(e,u),k=Object(d.toNumber)(i)/Object(d.toNumber)(m)*100,C=Object(d.mapToCssModules)(p()(t,"progress"),l),T={className:Object(d.mapToCssModules)(p()("progress-bar",E&&t||r,h?"progress-bar-animated":null,f?"bg-"+f:null,g||h?"progress-bar-striped":null),l),style:b(b(b({},E?N:{}),x),{},{width:k+"%"}),role:"progressbar","aria-valuenow":i,"aria-valuemin":o,"aria-valuemax":m,"aria-valuetext":w,"aria-labelledby":j,children:a};return E?c.a.createElement(v,Object(n.a)({},O,T)):c.a.createElement(v,Object(n.a)({},O,{style:N,className:C}),y?a:c.a.createElement("div",T))};f.propTypes=g,f.defaultProps={tag:"div",value:0,min:0,max:100,style:{},barStyle:{}},a.a=f},1082:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(840),m=t(843),p=t(932),d=t.n(p),u=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"".concat(this.props.className?this.props.className:"stats-card-body"," d-flex ").concat(this.props.iconRight||this.props.hideChart?this.props.iconRight?"justify-content-between flex-row-reverse align-items-center":this.props.hideChart&&!this.props.iconRight?"justify-content-center flex-column text-center":null:"flex-column align-items-start"," ").concat(this.props.hideChart?"pb-2":"pb-0"," pt-2")},i.a.createElement("div",{className:"icon-section"},i.a.createElement("div",{className:"avatar avatar-stats p-50 m-0 ".concat(this.props.iconBg?"bg-rgba-".concat(this.props.iconBg):"bg-rgba-primary")},i.a.createElement("div",{className:"avatar-content"},this.props.icon))),i.a.createElement("div",{className:"title-section"},i.a.createElement("h2",{className:"text-bold-600 mt-1 mb-25"},this.props.stat),i.a.createElement("p",{className:"mb-0"},this.props.statTitle))),!this.props.hideChart&&i.a.createElement(d.a,{options:this.props.options,series:this.props.series,type:this.props.type,height:this.props.height?this.props.height:100}))}}]),t}(i.a.Component);a.a=u},1093:function(e,a,t){"use strict";t.d(a,"g",(function(){return n})),t.d(a,"h",(function(){return r})),t.d(a,"e",(function(){return s})),t.d(a,"f",(function(){return l})),t.d(a,"c",(function(){return c})),t.d(a,"d",(function(){return i})),t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return m}));var n={chart:{id:"subscribers",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#1877f2"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},r=[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],s={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#28C76F"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},l=[{name:"Revenue",data:[350,275,400,300,350,300,450]}],c={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#EA5455"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},i=[{name:"Sales",data:[10,15,7,12,3,16]}],o={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#FF9F43"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},m=[{name:"Orders",data:[10,15,8,15,7,12,8]}]},1456:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(1082),m=t(481),p=t(1093),d=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,{icon:i.a.createElement(m.a,{className:"primary",size:22}),stat:"92.6k",statTitle:"Subscribers Gained",options:p.g,series:p.h,type:"area"})}}]),t}(i.a.Component);a.a=d},1457:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(1082),m=t(315),p=t(1093),d=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,{icon:i.a.createElement(m.a,{className:"success",size:22}),iconBg:"success",stat:"97.5k",statTitle:"Revenue Generated",options:p.e,series:p.f,type:"area"})}}]),t}(i.a.Component);a.a=d},1458:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(1082),m=t(436),p=t(1093),d=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,{icon:i.a.createElement(m.a,{className:"danger",size:22}),iconBg:"danger",stat:"36%",statTitle:"Quarterly Sales",options:p.c,series:p.d,type:"area"})}}]),t}(i.a.Component);a.a=d},1459:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(1082),m=t(398),p=t(1093),d=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,{icon:i.a.createElement(m.a,{className:"warning",size:22}),iconBg:"warning",stat:"97.5K",statTitle:"Orders Received",options:p.a,series:p.b,type:"area"})}}]),t}(i.a.Component);a.a=d},1460:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(840),m=t(841),p=t(842),d=t(843),u=t(932),h=t.n(u),b=t(185),g=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={options:{chart:{toolbar:{show:!1},animations:{enabled:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:e.props.labelColor},legend:{show:!1},colors:[e.props.dangerLight,e.props.strokeColor],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.props.primary,e.props.strokeColor],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:e.props.strokeColor}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{color:e.props.strokeColor},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}},series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}]},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Revenue"),i.a.createElement(b.a,{size:20,className:"cursor-pointer text-muted"})),i.a.createElement(d.a,null,i.a.createElement("div",{className:"d-flex justify-content-start mb-1"},i.a.createElement("div",{className:"mr-2"},i.a.createElement("p",{className:"mb-50 text-bold-600"},"This Month"),i.a.createElement("h2",{className:"text-bold-400"},i.a.createElement("sup",{className:"font-medium-1 mr-50"},"$"),i.a.createElement("span",{className:"text-success"},"86,589"))),i.a.createElement("div",null,i.a.createElement("p",{className:"mb-50 text-bold-600"},"Last Month"),i.a.createElement("h2",{className:"text-bold-400"},i.a.createElement("sup",{className:"font-medium-1 mr-50"},"$"),i.a.createElement("span",null,"73,683")))),i.a.createElement(h.a,{options:this.state.options,series:this.state.series,type:"line",height:260})))}}]),t}(i.a.Component);a.a=g},1461:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(840),m=t(841),p=t(842),d=t(843),u=t(932),h=t.n(u),b=t(357),g=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={options:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[e.props.success],plotOptions:{radialBar:{size:110,startAngle:-140,endAngle:150,hollow:{size:"77%"},track:{background:e.props.strokeColor,strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:e.props.strokeColor,fontSize:"4rem"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"}},series:[83]},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Goal Overview"),i.a.createElement(b.a,{size:20,className:"cursor-pointer text-muted"})),i.a.createElement(d.a,null,i.a.createElement(h.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:260})),i.a.createElement("div",{className:"d-flex mt-2"},i.a.createElement("div",{className:"completed border-top border-right text-center w-50 py-1"},i.a.createElement("p",{className:"mb-50"},"Completed"),i.a.createElement("p",{className:"font-large-1 text-bold-600 mb-50"},"786,617")),i.a.createElement("div",{className:"in-progress border-top border-right text-center w-50 py-1"},i.a.createElement("p",{className:"mb-50"},"In Progress"),i.a.createElement("p",{className:"font-large-1 text-bold-600 mb-50"},"13,561"))))}}]),t}(i.a.Component);a.a=g},1462:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(840),m=t(841),p=t(842),d=t(843),u=t(1067),h=t(260),b=t(253),g=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Browser Statistics")),i.a.createElement(d.a,null,i.a.createElement("div",{className:"d-flex justify-content-between mb-25"},i.a.createElement("div",{className:"browser-info"},i.a.createElement("p",{className:"mb-25"},"Google Chrome"),i.a.createElement("h4",null,"73%")),i.a.createElement("div",{className:"stastics-info text-right"},i.a.createElement("span",null,"800 ",i.a.createElement(h.a,{size:15,className:"text-success"})),i.a.createElement("span",{className:"text-muted d-block"},"13:16"))),i.a.createElement(u.a,{className:"mb-2",value:"73"}),i.a.createElement("div",{className:"d-flex justify-content-between mb-25"},i.a.createElement("div",{className:"browser-info"},i.a.createElement("p",{className:"mb-25"},"Opera"),i.a.createElement("h4",null,"8%")),i.a.createElement("div",{className:"stastics-info text-right"},i.a.createElement("span",null,"-200 ",i.a.createElement(b.a,{size:15,className:"text-danger"})),i.a.createElement("span",{className:"text-muted d-block"},"13:16"))),i.a.createElement(u.a,{className:"mb-2",value:"8"}),i.a.createElement("div",{className:"d-flex justify-content-between mb-25"},i.a.createElement("div",{className:"browser-info"},i.a.createElement("p",{className:"mb-25"},"Firefox"),i.a.createElement("h4",null,"19%")),i.a.createElement("div",{className:"stastics-info text-right"},i.a.createElement("span",null,"100 ",i.a.createElement(h.a,{size:15,className:"text-success"})),i.a.createElement("span",{className:"text-muted d-block"},"13:16"))),i.a.createElement(u.a,{className:"mb-2",value:"19"}),i.a.createElement("div",{className:"d-flex justify-content-between mb-25"},i.a.createElement("div",{className:"browser-info"},i.a.createElement("p",{className:"mb-25"},"Internet Explorer"),i.a.createElement("h4",null,"27%")),i.a.createElement("div",{className:"stastics-info text-right"},i.a.createElement("span",null,"-450 ",i.a.createElement(b.a,{size:15,className:"text-danger"})),i.a.createElement("span",{className:"text-muted d-block"},"13:16"))),i.a.createElement(u.a,{className:"mb-2",value:"27"})))}}]),t}(i.a.Component);a.a=g},1463:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(840),m=t(841),p=t(842),d=t(843),u=t(932),h=t.n(u),b=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={options:{chart:{stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"10%"}},colors:[e.props.primary,e.props.danger],dataLabels:{enabled:!1},grid:{borderColor:e.props.labelColor,padding:{left:0,right:0}},legend:{show:!0,position:"top",horizontalAlign:"left",offsetX:0,fontSize:"14px",markers:{radius:50,width:10,height:10}},xaxis:{labels:{style:{colors:e.props.strokeColor}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{color:e.props.strokeColor}}},tooltip:{x:{show:!1}}},series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}]},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Client Retention")),i.a.createElement(d.a,null,i.a.createElement(h.a,{options:this.state.options,series:this.state.series,type:"bar",height:290,id:"client-retention-chart"})))}}]),t}(i.a.Component);a.a=b},1464:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(840),m=t(841),p=t(842),d=t(836),u=t(610),h=t(606),b=t(188),g=t(843),f=t(932),E=t.n(f),y=t(283),v=t(389),N=t(260),x=t(444),w=t(453),j=t(253),O=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={options:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["Desktop","Mobile","Tablet"],stroke:{width:0},colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight]}}},series:[58.6,34.9,6.5]},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Session By Device"),i.a.createElement(d.a,null,i.a.createElement(u.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",i.a.createElement(y.a,{size:10})),i.a.createElement(h.a,{right:!0},i.a.createElement(b.a,null,"Last 28 days"),i.a.createElement(b.a,null,"Last Month"),i.a.createElement(b.a,null,"Last Year")))),i.a.createElement(g.a,{className:"pt-0"},i.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:"donut",height:290}),i.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1 mt-2"},i.a.createElement("div",{className:"series-info d-flex align-items-center"},i.a.createElement(v.a,{size:"18",className:"primary"}),i.a.createElement("span",{className:"text-bold-600 mx-50"},"Desktop"),i.a.createElement("span",{className:"align-middle"}," - 58.6%")),i.a.createElement("div",{className:"series-result"},i.a.createElement("span",{className:"align-middle"},"2%"),i.a.createElement(N.a,{size:"15",className:"success"}))),i.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1 mt-1"},i.a.createElement("div",{className:"series-info d-flex align-items-center"},i.a.createElement(x.a,{size:"18",className:"warning"}),i.a.createElement("span",{className:"text-bold-600 mx-50"},"Mobile"),i.a.createElement("span",{className:"align-middle"}," - 34.9%")),i.a.createElement("div",{className:"series-result"},i.a.createElement("span",{className:"align-middle"},"8%"),i.a.createElement(N.a,{size:"15",className:"success"}))),i.a.createElement("div",{className:"chart-info d-flex justify-content-between mt-1"},i.a.createElement("div",{className:"series-info d-flex align-items-center"},i.a.createElement(w.a,{size:"18",className:"danger"}),i.a.createElement("span",{className:"text-bold-600 mx-50"},"Tablet"),i.a.createElement("span",{className:"align-middle"}," - 6.5%")),i.a.createElement("div",{className:"series-result"},i.a.createElement("span",{className:"align-middle"},"-5%"),i.a.createElement(j.a,{size:"15",className:"danger"})))))}}]),t}(i.a.Component);a.a=O},1465:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(840),m=t(841),p=t(842),d=t(836),u=t(610),h=t(606),b=t(188),g=t(843),f=t(844),E=t(845),y=t(283),v=t(932),N=t.n(v),x=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={options:{chart:{dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight]}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:5},labels:["New","Returning","Referrals"]},series:[690,258,149]},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Customers"),i.a.createElement(d.a,null,i.a.createElement(u.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",i.a.createElement(y.a,{size:10})),i.a.createElement(h.a,{right:!0},i.a.createElement(b.a,null,"Last 28 days"),i.a.createElement(b.a,null,"Last Month"),i.a.createElement(b.a,null,"Last Year")))),i.a.createElement(g.a,{className:"pt-0"},i.a.createElement(N.a,{options:this.state.options,series:this.state.series,type:"pie",height:290})),i.a.createElement(f.a,{flush:!0},i.a.createElement(E.a,{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"item-info"},i.a.createElement("div",{className:"bg-primary",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),i.a.createElement("span",{className:"text-bold-600"},"New")),i.a.createElement("div",{className:"product-result"},i.a.createElement("span",null,"690"))),i.a.createElement(E.a,{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"item-info"},i.a.createElement("div",{className:"bg-warning",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),i.a.createElement("span",{className:"text-bold-600"},"Returning")),i.a.createElement("div",{className:"product-result"},i.a.createElement("span",null,"258"))),i.a.createElement(E.a,{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"item-info"},i.a.createElement("div",{className:"bg-danger",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),i.a.createElement("span",{className:"text-bold-600"},"Referrals")),i.a.createElement("div",{className:"product-result"},i.a.createElement("span",null,"149")))))}}]),t}(i.a.Component);a.a=x},1466:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(35),m=t.n(o),p=t(54),d=t.n(p),u=t(840),h=t(841),b=t(842),g=t(843),f=t(853),E=t(207),y=t(429),v=t(76),N=t.n(v),x=t(200),w=t.n(x),j=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={chatsList:[{msg:"Cake sesame snaps cupcake gingerbread",isSent:!0},{msg:"Apple pie pie jujubes chupa chups muffin",isSent:!1},{msg:"Chocolate cake",isSent:!0},{msg:"Donut sweet pie oat cake drag\xe9e fruitcake",isSent:!1},{msg:"Liquorice chocolate bar jelly beans icing",isSent:!0},{msg:"Powder toffee tootsie roll macaroon cupcake",isSent:!1},{msg:"Apple pie oat cake brownie cotton candy cupcake chocolate bar dessert",isSent:!0},{msg:"Biscuit cake jujubes carrot cake topping sweet cake",isSent:!1}],msg:""},e.scrollToBottom=function(){var a=m.a.findDOMNode(e.chatArea);a.scrollTop=a.scrollHeight},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,a=this.state,t=a.chatsList,n=a.msg,r=t.map((function(e,a){return i.a.createElement("div",{key:a,className:"chat ".concat(e.isSent?"chat-right":"chat-left")},i.a.createElement("div",{className:"chat-avatar"},i.a.createElement("div",{className:"avatar m-0"},i.a.createElement("img",{src:e.isSent?N.a:w.a,alt:"chat avatar",height:"40",width:"40"}))),i.a.createElement("div",{className:"chat-body"},i.a.createElement("div",{className:"chat-content"},i.a.createElement("p",null,e.msg))))}));return i.a.createElement(u.a,{className:"chat-application chat-widget"},i.a.createElement(h.a,null,i.a.createElement(b.a,null,"Chat")),i.a.createElement("div",{className:"chat-app-window"},i.a.createElement(d.a,{className:"user-chats widget-user-chat",options:{wheelPropagation:!1},ref:function(a){e.chatArea=a}},i.a.createElement("div",{className:"chats"},r)),i.a.createElement("div",{className:"chat-footer"},i.a.createElement(g.a,{className:"d-flex justify-content-around"},i.a.createElement(f.a,{className:"mr-50",placeholder:"Type your message...",value:n,onChange:function(a){return e.setState({msg:a.target.value})}}),i.a.createElement(E.a,{className:"btn-icon",color:"primary",onClick:function(){return e.setState({msg:""})}},i.a.createElement(y.a,{size:15}))))))}}]),t}(i.a.Component);a.a=j},1467:function(e,a,t){},2465:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),s=t(13),l=t(14),c=t(1),i=t.n(c),o=t(838),m=t(839),p=t(1456),d=t(1457),u=t(1458),h=t(1459),b=t(1460),g=t(1461),f=t(1462),E=t(1463),y=t(1464),v=t(1465),N=t(1466),x=(t(1467),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{className:"match-height"},i.a.createElement(m.a,{lg:"3",md:"6",sm:"6"},i.a.createElement(p.a,null)),i.a.createElement(m.a,{lg:"3",md:"6",sm:"6"},i.a.createElement(d.a,null)),i.a.createElement(m.a,{lg:"3",md:"6",sm:"6"},i.a.createElement(u.a,null)),i.a.createElement(m.a,{lg:"3",md:"6",sm:"6"},i.a.createElement(h.a,null))),i.a.createElement(o.a,{className:"match-height"},i.a.createElement(m.a,{lg:"8",md:"6",sm:"12"},i.a.createElement(b.a,{primary:"#7367F0",dangerLight:"#f29292",strokeColor:"#b9c3cd",labelColor:"#e7eef7"})),i.a.createElement(m.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(g.a,{strokeColor:"#b9c3cd",success:"#28C76F"}))),i.a.createElement(o.a,{className:"match-height"},i.a.createElement(m.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(f.a,null)),i.a.createElement(m.a,{lg:"8",md:"6",sm:"12"},i.a.createElement(E.a,{strokeColor:"#b9c3cd",primary:"#7367F0",danger:"#EA5455",labelColor:"#e7eef7"}))),i.a.createElement(o.a,null,i.a.createElement(m.a,{lg:"4",md:"12"},i.a.createElement(y.a,{primary:"#7367F0",warning:"#FF9F43",danger:"#EA5455",primaryLight:"#9c8cfc",warningLight:"#FFC085",dangerLight:"#f29292"})),i.a.createElement(m.a,{lg:"4",md:"12",className:"text-center align-middle"},i.a.createElement(N.a,null)),i.a.createElement(m.a,{lg:"4",md:"12",className:"text-center align-middle"},i.a.createElement(v.a,{primary:"#7367F0",warning:"#FF9F43",danger:"#EA5455",primaryLight:"#9c8cfc",warningLight:"#FFC085",dangerLight:"#f29292"}))))}}]),t}(i.a.Component));a.default=x},853:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(17),l=t(19),c=t(1),i=t.n(c),o=t(2),m=t.n(o),p=t(5),d=t.n(p),u=t(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:u.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,p=e.addon,b=e.plaintext,g=e.innerRef,f=Object(r.a)(e,h),E=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=m||("select"===s||"textarea"===s?s:"input"),N="form-control";b?(N+="-plaintext",v=m||"input"):"file"===s?N+="-file":"range"===s?N+="-range":E&&(N=p?null:"form-check-input"),f.size&&y.test(f.size)&&(Object(u.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=f.size,delete f.size);var x=Object(u.mapToCssModules)(d()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,N),t);return("input"===v||m&&"function"===typeof m)&&(f.type=s),f.children&&!b&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(u.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),i.a.createElement(v,Object(n.a)({},f,{ref:g,className:x,"aria-invalid":o}))},a}(i.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g}}]);
//# sourceMappingURL=102.6de20300.chunk.js.map