(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[404],{2549:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(12),s=t(13),c=t(14),r=t(1),m=t.n(r),i=t(838),d=t(839),u=t(840),o=t(830),E=t(207),f=t(843),h=t(835),v=t(30),p=t(20),N=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/viewonebanner/".concat(a)).then((function(a){console.log(a.data),console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a;return m.a.createElement(m.a.Fragment,null,m.a.createElement(i.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement(u.a,null,m.a.createElement(i.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"PendingRequest Detail")),m.a.createElement(d.a,{className:"float-right"},m.a.createElement("h3",null,"Change Refund Status"),m.a.createElement(o.a,{type:"select",name:"type",value:this.state.type,onChange:this.changeHandler},m.a.createElement("option",{value:"Pending"},"Pending"),m.a.createElement("option",{value:"Approved"},"Approved"),m.a.createElement("option",{value:"Refunded"},"Refunded"),m.a.createElement("option",{value:"Rejected"},"Rejected"))),m.a.createElement(d.a,{className:"m-3"},m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return p.a.push("/app/freshlist/refundrequest/pendingRequest")}},"Back"))),m.a.createElement(f.a,null,m.a.createElement(i.a,{className:"mx-0",col:"12"},m.a.createElement(d.a,{className:"pl-0",sm:"12",lg:"6"},m.a.createElement(h.a,{className:"d-sm-flex d-block"},m.a.createElement(h.a,{className:"mt-md-1 mt-0",left:!0},null===(e=this.state.data)||void 0===e||null===(a=e.banner_img)||void 0===a?void 0:a.map((function(e){return m.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"400"})}))),m.a.createElement(h.a,{body:!0},m.a.createElement(i.a,{className:"ml-4"},m.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},m.a.createElement("div",{className:"users-page-view-table"},m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},m.a.createElement("h3",null,"Refund id")),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.banner_title))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},m.a.createElement("h3",null,"Item Image")),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.bannertype))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},m.a.createElement("h3",null,"Payment Method")),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.bannertype))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},m.a.createElement("h3",null,"Refund Status")),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.bannertype))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},m.a.createElement("h3",null,"Tax")),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.bannertype))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},m.a.createElement("h3",null,"Discount")),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.bannertype))),m.a.createElement("div",{className:"d-flex user-info"},m.a.createElement("div",{className:"user-info-title font-weight-bold"},m.a.createElement("h3",null,"Price:")),m.a.createElement("div",{className:"text-truncate"},m.a.createElement("span",null,this.state.data.bannertype)))))))))))))))}}]),t}(m.a.Component);a.default=N}}]);
//# sourceMappingURL=404.5092c695.chunk.js.map