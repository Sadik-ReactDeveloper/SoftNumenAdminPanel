(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{2568:function(e,t,a){"use strict";a.r(t),a.d(t,"AddCategory",(function(){return E}));var n=a(49),s=a(11),l=a(12),r=a(13),o=a(14),c=a(1),i=a.n(c),d=a(840),u=a(838),f=a(839),m=a(207),p=a(843),g=a(860),b=a(929),h=a(859),v=a(853),y=(a(20),a(29)),O=a(65),j=a(856),N=a.n(j),E=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler1=function(e){l.setState({selectedFile1:e.target.files[0]}),l.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler2=function(e){l.setState({selectedFile2:e.target.files[0]}),l.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler3=function(e){l.setState({selectedFile3:e.target.files[0]}),l.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},l.onChangeHandler4=function(e){l.setState({selectedFile4:e.target.files[0]}),l.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),n.append("category_name",l.state.category_name),n.append("status","Active"),y.a.post("/addcategory",n).then((function(e){console.log(null===e||void 0===e?void 0:e.data.success),(null===e||void 0===e?void 0:e.data.success)&&(N()("Success!","You Data Submitted","Success"),l.setState({category_name:""}))})).catch((function(e){console.log(e)}))},l.state={category_name:"",type:"",feature:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},l}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(f.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),i.a.createElement(f.a,null,i.a.createElement(O.b,{render:function(e){var t=e.history;return i.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/category/categoryList")}},"Back")}}))),i.a.createElement(p.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(f.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(h.a,null,"Category Name"),i.a.createElement(v.a,{type:"text",placeholder:"Category Name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler})))),i.a.createElement(u.a,null,i.a.createElement(f.a,null,i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:""},"Add Category"))))))))}}]),a}(c.Component);t.default=E},853:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(17),r=a(19),o=a(1),c=a.n(o),i=a(2),d=a.n(i),u=a(5),f=a.n(u),m=a(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,r=e.bsSize,o=e.valid,i=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,b=e.innerRef,h=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),O=d||("select"===l||"textarea"===l?l:"input"),j="form-control";g?(j+="-plaintext",O=d||"input"):"file"===l?j+="-file":"range"===l?j+="-range":v&&(j=u?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var N=Object(m.mapToCssModules)(f()(t,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===O||d&&"function"===typeof d)&&(h.type=l),h.children&&!g&&"select"!==l&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(O,Object(n.a)({},h,{ref:b,className:N,"aria-invalid":i}))},t}(c.a.Component);b.propTypes=g,b.defaultProps={type:"text"},t.a=b},859:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(1),r=a.n(l),o=a(2),c=a.n(o),i=a(5),d=a.n(i),u=a(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,l=e.hidden,o=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,g=Object(s.a)(e,f),b=[];o.forEach((function(t,n){var s=e[t];if(delete g[t],s||""===s){var l,r=!n;if(Object(u.isObject)(s)){var o,c=r?"-":"-"+t+"-";l=h(r,t,s.size),b.push(Object(u.mapToCssModules)(d()(((o={})[l]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),a)}else l=h(r,t,s),b.push(l)}}));var v=Object(u.mapToCssModules)(d()(t,!!l&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),a);return r.a.createElement(c,Object(n.a)({htmlFor:p},g,{className:v}))};v.propTypes=g,v.defaultProps=b,t.a=v},860:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(17),r=a(19),o=a(1),c=a.n(o),i=a(2),d=a.n(i),u=a(5),f=a.n(u),m=a(4),p=["className","cssModule","inline","tag","innerRef"],g={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,r=e.tag,o=e.innerRef,i=Object(s.a)(e,p),d=Object(m.mapToCssModules)(f()(t,!!l&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},i,{ref:o,className:d}))},t}(o.Component);b.propTypes=g,b.defaultProps={tag:"form"},t.a=b},929:function(e,t,a){"use strict";var n=a(6),s=a(8),l=a(1),r=a.n(l),o=a(2),c=a.n(o),i=a(5),d=a.n(i),u=a(4),f=["className","cssModule","row","disabled","check","inline","tag"],m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,l=e.row,o=e.disabled,c=e.check,i=e.inline,m=e.tag,p=Object(s.a)(e,f),g=Object(u.mapToCssModules)(d()(t,!!l&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),a);return"fieldset"===m&&(p.disabled=o),r.a.createElement(m,Object(n.a)({},p,{className:g}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=246.f03872cd.chunk.js.map