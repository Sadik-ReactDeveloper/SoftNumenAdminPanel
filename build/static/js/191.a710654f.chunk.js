(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[191],{2494:function(e,a,t){"use strict";t.r(a),t.d(a,"AddVendor",(function(){return S}));var n=t(917),l=t(49),r=t(11),c=t(12),s=t(13),o=t(14),i=t(1),m=t.n(i),d=t(840),u=t(838),h=t(839),p=t(207),f=t(843),g=t(874),b=t(873),E=t(853),v=t(830),N=(t(20),t(30)),y=t(857),C=t.n(y),_=(t(927),t(65)),S=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=a.call(this,e)).onChangeHandler1=function(e){c.setState({selectedFile1:e.target.files[0]}),c.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler2=function(e){c.setState({selectedFile2:e.target.files[0]}),c.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler3=function(e){c.setState({selectedFile3:e.target.files[0]}),c.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler4=function(e){c.setState({selectedFile4:e.target.files[0]}),c.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler5=function(e){c.setState({selectedFile5:e.target.files[0]}),c.setState({selectedName5:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler6=function(e){c.setState({selectedFile6:e.target.files[0]}),c.setState({selectedName6:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",c.state.name),a.append("mobile",c.state.mobile),a.append("email",c.state.email),a.append("door_number",c.state.door_number),a.append("street",c.state.street),a.append("location",c.state.location),a.append("city",c.state.city),a.append("pincode",c.state.pincode),a.append("service_location",c.state.service_location),a.append("service_city",c.state.service_city),a.append("service_pincode",c.state.service_pincode),a.append("adhar_no",c.state.adhar_no),a.append("pancard_no",c.state.pancard_no),a.append("account_no",c.state.account_no),a.append("cus_name",c.state.cus_name),a.append("branch",c.state.branch),a.append("ifsc_code",c.state.ifsc_code),a.append("vendoor_img",c.state.selectedFile1,c.state.selectedName1),a.append("adhar_img_front",c.state.selectedFile2,c.state.selectedName2),a.append("adhar_img_back",c.state.selectedFile3,c.state.selectedName3),a.append("pancard_img_front",c.state.selectedFile4,c.state.selectedName4),a.append("pancard_img_back",c.state.selectedFile5,c.state.selectedName5),a.append("passbook_img",c.state.selectedFile6,c.state.selectedName6);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(s){l.e(s)}finally{l.f()}N.a.post("/admin/admin_add_vender",a).then((function(e){console.log(e.data),"success"===e.data.msg&&(C()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/freshlist/vendor/vendorList"))})).catch((function(e){console.log(e)}))},c.state={name:"",mobile:"",email:"",door_number:"",street:"",location:"",city:"",pincode:"",service_location:"",service_city:"",service_pincode:"",adhar_no:"",pancard_no:"",account_no:"",cus_name:"",branch:"",ifsc_code:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:"",selectedFile5:null,selectedName5:"",selectedFile6:null,selectedName6:""},c}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(h.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Vendor")),m.a.createElement(h.a,null,m.a.createElement(_.b,{render:function(e){var a=e.history;return m.a.createElement(p.a,{className:"float-right",color:"danger",onClick:function(){return a.push("/app/freshlist/vendor/vendorList")}},"Back")}}))),m.a.createElement(f.a,null,m.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement("h5",null,"Personal Information")),m.a.createElement(u.a,{className:"mb-2 mt-2"},m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(b.a,null,"Name"),m.a.createElement(E.a,{required:!0,type:"text",placeholder:"Name",name:"name",value:this.state.name,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Mobile No."),m.a.createElement(E.a,{required:!0,type:"number",name:"mobile",placeholder:"Enter Mobile Number",value:this.state.mobile,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Email"),m.a.createElement(E.a,{required:!0,type:"email",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Door Number"),m.a.createElement(E.a,{required:!0,type:"text",name:"door_number",placeholder:"Door Number",value:this.state.door_number,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Street"),m.a.createElement(E.a,{required:!0,type:"text",name:"street",placeholder:"Street",value:this.state.street,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Location"),m.a.createElement(E.a,{required:!0,type:"text",name:"location",placeholder:"Location",value:this.state.location,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"City"),m.a.createElement(E.a,{required:!0,type:"text",name:"city",placeholder:"City",value:this.state.city,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"PinCode"),m.a.createElement(E.a,{required:!0,type:"tel",name:"pincode",placeholder:"PINCODE",value:this.state.pincode,onChange:this.changeHandler}))),m.a.createElement(u.a,null,m.a.createElement("h5",null,"Service Information")),m.a.createElement(u.a,{className:"mb-2 mt-2"},m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Service Location"),m.a.createElement(E.a,{required:!0,type:"text",name:"service_location",placeholder:"Service Location",value:this.state.service_location,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Service City"),m.a.createElement(E.a,{required:!0,type:"text",name:"service_city",placeholder:"Service City",value:this.state.service_city,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Service PinCode"),m.a.createElement(E.a,{required:!0,type:"number",name:"service_pincode",placeholder:"Service PinCode",value:this.state.service_pincode,onChange:this.changeHandler}))),m.a.createElement(u.a,null,m.a.createElement("h5",null," Document Details")),m.a.createElement(u.a,{className:"mb-2 mt-2"},m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Vendor Image"),m.a.createElement(v.a,{required:!0,type:"file",onChange:this.onChangeHandler1})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Aadhar Number"),m.a.createElement(E.a,{required:!0,type:"number",name:"adhar_no",placeholder:"Aadhar Number",value:this.state.adhar_no,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Aadhar Front Image"),m.a.createElement(v.a,{required:!0,type:"file",onChange:this.onChangeHandler2})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Aadhar Back Image"),m.a.createElement(v.a,{required:!0,type:"file",onChange:this.onChangeHandler3})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"PAN Card Number"),m.a.createElement(E.a,{required:!0,type:"text",name:"pancard_no",placeholder:"Pan Number",value:this.state.pancard_no,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"PAN Card Front Image"),m.a.createElement(v.a,{required:!0,type:"file",onChange:this.onChangeHandler4})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"PAN Card Back Image"),m.a.createElement(v.a,{required:!0,type:"file",onChange:this.onChangeHandler5})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Account Number"),m.a.createElement(E.a,{required:!0,type:"text",name:"account_no",placeholder:"Account Number",value:this.state.account_no,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Account Holder Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"cus_name",placeholder:"Account Holder Name",value:this.state.cus_name,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Branch Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"branch",placeholder:"Branch Name",value:this.state.branch,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"IFSC Code"),m.a.createElement(E.a,{required:!0,type:"text",name:"ifsc_code",placeholder:"IFSC Code",value:this.state.ifsc_code,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Cancelled Cheque Image"),m.a.createElement(v.a,{required:!0,type:"file",onChange:this.onChangeHandler6}))),m.a.createElement(u.a,{style:{float:"center"}},m.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit"))))))}}]),t}(i.Component);a.default=S},853:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(17),c=t(19),s=t(1),o=t.n(s),i=t(2),m=t.n(i),d=t(5),u=t.n(d),h=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:h.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,s=e.valid,i=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,g=e.innerRef,b=Object(l.a)(e,p),E=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),N=m||("select"===r||"textarea"===r?r:"input"),y="form-control";f?(y+="-plaintext",N=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":E&&(y=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(h.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var C=Object(h.mapToCssModules)(u()(a,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,y),t);return("input"===N||m&&"function"===typeof m)&&(b.type=r),b.children&&!f&&"select"!==r&&"string"===typeof N&&"select"!==N&&(Object(h.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(N,Object(n.a)({},b,{ref:g,className:C,"aria-invalid":i}))},a}(o.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},873:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(1),c=t.n(r),s=t(2),o=t.n(s),i=t(5),m=t.n(i),d=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],h=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:h,order:h,offset:h})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,i=e.check,h=e.size,p=e.for,f=Object(l.a)(e,u),g=[];s.forEach((function(a,n){var l=e[a];if(delete f[a],l||""===l){var r,c=!n;if(Object(d.isObject)(l)){var s,o=c?"-":"-"+a+"-";r=b(c,a,l.size),g.push(Object(d.mapToCssModules)(m()(((s={})[r]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s))),t)}else r=b(c,a,l),g.push(r)}}));var E=Object(d.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!h&&"col-form-label-"+h,g,!!g.length&&"col-form-label"),t);return c.a.createElement(o,Object(n.a)({htmlFor:p},f,{className:E}))};E.propTypes=f,E.defaultProps=g,a.a=E},874:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(17),c=t(19),s=t(1),o=t.n(s),i=t(2),m=t.n(i),d=t(5),u=t.n(d),h=t(4),p=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:h.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,s=e.innerRef,i=Object(l.a)(e,p),m=Object(h.mapToCssModules)(u()(a,!!r&&"form-inline"),t);return o.a.createElement(c,Object(n.a)({},i,{ref:s,className:m}))},a}(s.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g},917:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(108);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,c=!0,s=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return c=e.done,e},e:function(e){s=!0,r=e},f:function(){try{c||null==l.return||l.return()}finally{if(s)throw r}}}}},927:function(e,a,t){}}]);
//# sourceMappingURL=191.a710654f.chunk.js.map