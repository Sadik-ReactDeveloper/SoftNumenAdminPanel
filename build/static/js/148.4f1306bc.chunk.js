(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[148],{1054:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(1),s=t.n(r),o=t(2),c=t.n(o),i=t(5),m=t.n(i),u=t(3),d=["className","cssModule","fluid","tag"],f={tag:u.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.fluid,o=e.tag,c=Object(l.a)(e,d),i="container";!0===r?i="container-fluid":r&&(i="container-"+r);var f=Object(u.mapToCssModules)(m()(a,i),t);return s.a.createElement(o,Object(n.a)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},1391:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOnAAADpwBB5RT3QAAAdxJREFUeJztmTFLAzEUgB+U0kE5hK5KFwcXh64uggjFpauLUwcHoZN/oFS6dNRFuEEKLh2KiNDZ0f4Fp05dXARBQQr1PfsiIX3nhebIRWzgW+4l777L5V5oCpDeKsg1EiO7Fv3T2gZyhfSRegb5YIDMmKcM8l1o+V5gLuzURlrCMVJ0zBdr+T6QLZtBVeQMaWo0kEKC4LHR1wbKv54geCD0rSq5E2SqDTJlJMGR0D8NktlMEIyF/lN2g0lCwrwFZ+yWmDAEwVkIguY1a0EqARFyq117ZMHnJQRpTVEdPTcemO7RW0aQoEVaRlpIh19HHeSPygYq+CXkFGmzcJTywKlPTVV/H9ljyfcl5RRDmJcpVVrS3obTzXyQu4C1IE31fSCMJUHaxENpN/DfBan4VgxKHIuEWNm3IBX5T4NDjrWE2J1vwTdY/BqPONYRYsOV4F8TJIlLg22O1YRYw7ega7MSdJkFLzMoraOaJvDbOvKyBleCroIuu4GXncRlP/WyF1PCNQPVCkKsmNFYa8FXWFwr6jW1hdhDRmOtBYP/SFaCroL0e7hnsMOxuhBrZjTWWjDPJgp2YX7AGAL6edBPSaB1MwkEdbxCbt8zZy7aUOgCNzptor8FBoHQZyf4AgvYTFEOafidAAAAAElFTkSuQmCC"},2506:function(e,a,t){"use strict";t.r(a);var n=t(892),l=t(50),r=t(14),s=t(15),o=t(16),c=t(17),i=t(1),m=t.n(i),u=t(1054),d=t(838),f=t(839),p=t(204),h=t(843),g=t(864),b=t(894),E=t(863),v=t(857),y=t(827),N=t(10),O=(t(22),t(65)),j=(t(1391),t(887),function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.handleChange=function(e){s.setState({status:e.target.value})},s.submitHandler=function(e){e.preventDefault(),console.log(s.props.match.params,s.state);var a=new FormData;a.append("username",s.state.customer_name),a.append("email",s.state.email),a.append("mobile",s.state.phone),a.append("image",s.state.selectedFile,s.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(u){l.e(u)}finally{l.f()}var o,c=Object(n.a)(a.keys());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(u){c.e(u)}finally{c.f()}var m=s.props.match.params.id;N.a.post("/user/edituser/".concat(m),a).then((function(e){console.log(e),s.props.history.push("/app/freshlist/customer/editCustomer")})).catch((function(e){console.log(e)}))},s.state={data:{},customer_name:"",email:"",phone:"",status:"",selectedFile:null,selectedName:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/user/getviewone/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data,customer_name:a.data.data.username,email:a.data.data.email,phone:a.data.data.mobile})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,n;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Customer")),m.a.createElement(f.a,null,m.a.createElement(O.b,{render:function(e){var a=e.history;return m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/customer/customerList")}},"Back")}}))),m.a.createElement(d.a,null,m.a.createElement(f.a,{sm:"12"},m.a.createElement(h.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(f.a,{sm:"12",className:"my-1"},m.a.createElement("h3",null,"Customer Information"),m.a.createElement(d.a,{className:"m-3"},m.a.createElement(f.a,{sm:"4"},m.a.createElement("img",{src:null===(e=this.state.data)||void 0===e?void 0:e.image,alt:"aaa",width:"200",height:"150"})),m.a.createElement(f.a,{sm:"8"},m.a.createElement(d.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h6",null,"UserName")),m.a.createElement(f.a,null,m.a.createElement("h6",null,m.a.createElement("b",null,null===(a=this.state.data)||void 0===a?void 0:a.username)))),m.a.createElement(d.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h6",null,"Email")),m.a.createElement(f.a,null,m.a.createElement("h6",null,m.a.createElement("b",null,null===(t=this.state.data)||void 0===t?void 0:t.email)))),m.a.createElement(d.a,{className:"m-2"},m.a.createElement(f.a,null,m.a.createElement("h6",null,"Phone")),m.a.createElement(f.a,null,m.a.createElement("h6",null,m.a.createElement("b",null,null===(n=this.state.data)||void 0===n?void 0:n.mobile)))))))),m.a.createElement(d.a,{className:"m-2"},m.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(d.a,{className:"mb-2"},m.a.createElement(f.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Customer Name"),m.a.createElement(v.a,{type:"text",placeholder:"Customer_Name",name:"customer_name",value:this.state.customer_name,onChange:this.changeHandler}))),m.a.createElement(f.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Email"),m.a.createElement(v.a,{type:"email",placeholder:"Enter Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),m.a.createElement(f.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Mobile No."),m.a.createElement(v.a,{type:"Number",placeholder:"Enter No.",name:"phone",value:this.state.phone,onChange:this.changeHandler}))),m.a.createElement(f.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,"Image"),m.a.createElement(b.a,null,m.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler}))),m.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},m.a.createElement(E.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"true"}),m.a.createElement("span",{style:{marginRight:"20px"}},"True"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"false"}),m.a.createElement("span",{style:{marginRight:"3px"}},"False")))),m.a.createElement(d.a,{className:"m-2"},m.a.createElement(p.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Customer")))))))))}}]),t}(m.a.Component));a.default=j},857:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(12),s=t(21),o=t(1),c=t.n(o),i=t(2),m=t.n(i),u=t(5),d=t.n(u),f=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,g=e.innerRef,b=Object(l.a)(e,p),E=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),N="form-control";h?(N+="-plaintext",y=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":E&&(N=u?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var O=Object(f.mapToCssModules)(d()(a,i&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,N),t);return("input"===y||m&&"function"===typeof m)&&(b.type=r),b.children&&!h&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(y,Object(n.a)({},b,{ref:g,className:O,"aria-invalid":i}))},a}(c.a.Component);g.propTypes=h,g.defaultProps={type:"text"},a.a=g},863:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(1),s=t.n(r),o=t(2),c=t.n(o),i=t(5),m=t.n(i),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,f=e.size,p=e.for,h=Object(l.a)(e,d),g=[];o.forEach((function(a,n){var l=e[a];if(delete h[a],l||""===l){var r,s=!n;if(Object(u.isObject)(l)){var o,c=s?"-":"-"+a+"-";r=b(s,a,l.size),g.push(Object(u.mapToCssModules)(m()(((o={})[r]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o))),t)}else r=b(s,a,l),g.push(r)}}));var E=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,g,!!g.length&&"col-form-label"),t);return s.a.createElement(c,Object(n.a)({htmlFor:p},h,{className:E}))};E.propTypes=h,E.defaultProps=g,a.a=E},864:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(12),s=t(21),o=t(1),c=t.n(o),i=t(2),m=t.n(i),u=t(5),d=t.n(u),f=t(3),p=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,s=e.tag,o=e.innerRef,i=Object(l.a)(e,p),m=Object(f.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return c.a.createElement(s,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);g.propTypes=h,g.defaultProps={tag:"form"},a.a=g},887:function(e,a,t){},892:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(108);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,o=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(o)throw r}}}}},894:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(1),s=t.n(r),o=t(2),c=t.n(o),i=t(5),m=t.n(i),u=t(3),d=["className","cssModule","row","disabled","check","inline","tag"],f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,f=e.tag,p=Object(l.a)(e,d),h=Object(u.mapToCssModules)(m()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===f&&(p.disabled=o),s.a.createElement(f,Object(n.a)({},p,{className:h}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=148.4f1306bc.chunk.js.map