/*! For license information please see 101.5c7b6341.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[101],{1042:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(4),m=["className","cssModule","fluid","tag"],d={tag:p.tagPropType,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.fluid,s=e.tag,c=Object(r.a)(e,m),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var d=Object(p.mapToCssModules)(u()(t,l),a);return i.a.createElement(s,Object(n.a)({},c,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},1043:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(4),m=["className","cssModule","tag"],d={tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,m),c=Object(p.mapToCssModules)(u()(t,"input-group-text"),a);return i.a.createElement(o,Object(n.a)({},s,{className:c}))};f.propTypes=d,f.defaultProps={tag:"span"},t.a=f},1075:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(4),m=["className","cssModule","tag","size"],d={tag:p.tagPropType,size:c.a.string,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=e.size,c=Object(r.a)(e,m),l=Object(p.mapToCssModules)(u()(t,"input-group",s?"input-group-"+s:null),a);return i.a.createElement(o,Object(n.a)({},c,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},1120:function(e,t,a){},1193:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(4),m=a(1043),d=["className","cssModule","tag","addonType","children"],f={tag:p.tagPropType,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=e.addonType,c=e.children,l=Object(r.a)(e,d),f=Object(p.mapToCssModules)(u()(t,"input-group-"+s),a);return"string"===typeof c?i.a.createElement(o,Object(n.a)({},l,{className:f}),i.a.createElement(m.a,{children:c})):i.a.createElement(o,Object(n.a)({},l,{className:f,children:c}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},1821:function(e,t,a){e.exports=a.p+"static/media/google.73cbaa09.svg"},2771:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(49),o=a(11),i=a(12),s=a(13),c=a(14),l=a(1),u=a.n(l),p=a(1042),m=a(838),d=a(839),f=a(840),h=a(841),g=a(842),v=a(874),b=a(873),y=a(918),E=a(853),w=a(207),O=a(939),N=a(940),j=a(1075),x=a(1193),T=a(932),k=a.n(T),P=(a(1120),a(20),a(843)),C=(a(99),a(9)),S=a(925),M=a(374),L=a(371),R=a(282),z=a(331),I=a(469),D=a(349),F=a(1821),W=a.n(F),_=a(28),A=a(143),G=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"demo@demo.com",password:"demodemo",remember:!1},e.handleLogin=function(t){t.preventDefault(),e.props.submitLoginWithFireBase(e.state.email,e.state.password,e.state.remember)},e.handleRemember=function(t){e.setState({remember:t.target.checked})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(P.a,{className:"pt-1"},u.a.createElement(v.a,{action:"/",onSubmit:this.handleLogin},u.a.createElement(y.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(E.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},required:!0}),u.a.createElement("div",{className:"form-control-position"},u.a.createElement(M.a,{size:15})),u.a.createElement(b.a,null,"Email")),u.a.createElement(y.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(E.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0}),u.a.createElement("div",{className:"form-control-position"},u.a.createElement(L.a,{size:15})),u.a.createElement(b.a,null,"Password")),u.a.createElement(y.a,{className:"d-flex justify-content-between align-items-center"},u.a.createElement(S.a,{color:"primary",icon:u.a.createElement(R.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),u.a.createElement("div",{className:"float-right"},u.a.createElement(C.b,{to:"/pages/forgot-password"},"Forgot Password?"))),u.a.createElement("div",{className:"d-flex justify-content-between"},u.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Login")))),u.a.createElement("div",{className:"auth-footer"},u.a.createElement("div",{className:"divider"},u.a.createElement("div",{className:"divider-text"},"OR")),u.a.createElement("div",{className:"footer-btn"},u.a.createElement(w.a.Ripple,{className:"btn-facebook",color:"",onClick:function(){e.props.loginWithFB()}},u.a.createElement(z.a,{size:14})),u.a.createElement(w.a.Ripple,{className:"btn-twitter",color:"",onClick:this.props.loginWithTwitter},u.a.createElement(I.a,{size:14,stroke:"white"})),u.a.createElement(w.a.Ripple,{className:"btn-google",color:"",onClick:this.props.loginWithGoogle},u.a.createElement("img",{src:W.a,alt:"google",height:"15",width:"15"})),u.a.createElement(w.a.Ripple,{className:"btn-github",color:"",onClick:this.props.loginWithGithub},u.a.createElement(D.a,{size:14,stroke:"white"})))))}}]),a}(u.a.Component),q=Object(_.b)((function(e){return{values:e.auth.login}}),{submitLoginWithFireBase:A.i,loginWithFB:A.b,loginWithTwitter:A.f,loginWithGoogle:A.d,loginWithGithub:A.c})(G),B=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"admin@gmail.com",password:"12345",remember:!1},e.handleLogin=function(t){t.preventDefault(),e.props.loginWithJWT(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(P.a,{className:"pt-1"},u.a.createElement(v.a,{action:"/",onSubmit:this.handleLogin},u.a.createElement(y.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(E.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},required:!0}),u.a.createElement("div",{className:"form-control-position"},u.a.createElement(M.a,{size:15})),u.a.createElement(b.a,null,"Email")),u.a.createElement(y.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(E.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},required:!0}),u.a.createElement("div",{className:"form-control-position"},u.a.createElement(L.a,{size:15})),u.a.createElement(b.a,null,"Password")),u.a.createElement(y.a,{className:"d-flex justify-content-between align-items-center"},u.a.createElement(S.a,{color:"primary",icon:u.a.createElement(R.a,{className:"vx-icon",size:16}),label:"Remember me",defaultChecked:!1,onChange:this.handleRemember}),u.a.createElement("div",{className:"float-right"},u.a.createElement(C.b,{to:"/pages/forgot-password"},"Forgot Password?"))),u.a.createElement("div",{className:"d-flex justify-content-between"},u.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Login")))))}}]),a}(u.a.Component),Y=Object(_.b)((function(e){return{values:e.auth.login}}),{loginWithJWT:A.e})(B),J=function(e){return"object"===typeof e&&null!==e},H=function(e){var t=e.value,a=void 0===t?"":t,n=e.numInputs,r=void 0===n?4:n,o=e.onChange,i=e.onPaste,s=e.renderInput,c=e.shouldAutoFocus,l=void 0!==c&&c,p=e.inputType,m=void 0===p?"text":p,d=e.renderSeparator,f=e.placeholder,h=e.containerStyle,g=e.inputStyle,v=e.skipDefaultStyles,b=void 0!==v&&v,y=u.a.useState(0),E=y[0],w=y[1],O=u.a.useRef([]),N=function(){return a?a.toString().split(""):[]},j="number"===m||"tel"===m;u.a.useEffect((function(){O.current=O.current.slice(0,r)}),[r]),u.a.useEffect((function(){var e;l&&(null===(e=O.current[0])||void 0===e||e.focus())}),[l]);var x=function(){if("string"===typeof f){if(f.length===r)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},T=function(e){return(j?!isNaN(Number(e)):"string"===typeof e)&&1===e.trim().length},k=function(e){var t=e.target.value;T(t)&&(L(t),M(E+1))},P=function(e){var t=e.nativeEvent;T(e.target.value)||(null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),L(""),M(E-1)),e.target.value="")},C=function(){w(E-1)},S=function(e){var t=N();[e.code,e.key].includes("Backspace")?(e.preventDefault(),L(""),M(E-1)):"Delete"===e.code?(e.preventDefault(),L("")):"ArrowLeft"===e.code?(e.preventDefault(),M(E-1)):"ArrowRight"===e.code||e.key===t[E]?(e.preventDefault(),M(E+1)):"Spacebar"!==e.code&&"Space"!==e.code&&"ArrowUp"!==e.code&&"ArrowDown"!==e.code||e.preventDefault()},M=function(e){var t,a,n=Math.max(Math.min(r-1,e),0);O.current[n]&&(null===(t=O.current[n])||void 0===t||t.focus(),null===(a=O.current[n])||void 0===a||a.select(),w(n))},L=function(e){var t=N();t[E]=e[0],R(t)},R=function(e){var t=e.join("");o(t)},z=function(e){var t;e.preventDefault();var a=N(),n=E,o=e.clipboardData.getData("text/plain").slice(0,r-E).split("");if(!j||!o.some((function(e){return isNaN(Number(e))}))){for(var i=0;i<r;++i)i>=E&&o.length>0&&(a[i]=null!==(t=o.shift())&&void 0!==t?t:"",n++);M(n),R(a)}};return u.a.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},J(h)&&h),className:"string"===typeof h?h:void 0,onPaste:i},Array.from({length:r},(function(e,t){return t})).map((function(e){var t,a,n;return u.a.createElement(u.a.Fragment,{key:e},s({value:null!==(t=N()[e])&&void 0!==t?t:"",placeholder:null!==(n=null===(a=x())||void 0===a?void 0:a[e])&&void 0!==n?n:void 0,ref:function(t){return O.current[e]=t},onChange:k,onFocus:function(t){return function(e){return function(t){w(t),e.target.select()}}(t)(e)},onBlur:C,onKeyDown:S,onPaste:z,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(b?{}:{width:"1em",textAlign:"center"},J(g)?g:{}),className:"string"===typeof g?g:void 0,type:m,inputMode:j?"numeric":"text",onInput:P},e),e<r-1&&("function"===typeof d?d(e):d))})))},U=a(857),V=a.n(U),K=a(30),Q=a(195);function X(){X=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new x(r||[]);return n(i,"_invoke",{value:w(e,a,s)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var p={};function m(){}function d(){}function f(){}var h={};c(h,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(T([])));v&&v!==t&&a.call(v,o)&&(h=v);var b=f.prototype=m.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,s){var c=u(e[r],e,o);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(p).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return k()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var s=O(i,a);if(s){if(s===p)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function O(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=f,n(b,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:d,configurable:!0}),d.displayName=c(f,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(l(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),c(b,s,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:T(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}var Z=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).handlechange=function(e){e.preventDefault(),i.setState(Object(r.a)({},e.target.name,e.target.value))},i.loginOTPHandler=function(){var e=Object(n.a)(X().mark((function e(t){var a,n;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),6!=(null===(a=i.state.Otp)||void 0===a?void 0:a.length)){e.next=8;break}return console.log(i.state.Otp),n={otp:i.state.Otp,email:i.state.email},e.next=6,Object(Q.m)(n).then((function(e){(null===e||void 0===e?void 0:e.status)?(localStorage.setItem("userData",JSON.stringify(null===e||void 0===e?void 0:e.user)),setTimeout((function(){i.props.history.push("/dashboard")}),2e3),V()("Sucessfully login","You are LoggedIn!","Success",{buttons:{ok:{text:"Ok",value:"ok"}}}).then((function(e){e}))):V()("Something Went Wrong")})).then((function(e){console.log(e)}));case 6:e.next=9;break;case 8:V()({title:"Are you sure?",text:"Are you sure that you want to leave this page?",icon:"warning",dangerMode:!0}).then((function(e){e&&V()("Deleted!","Your imaginary file has been deleted!","success")}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.loginHandler=function(){var e=Object(n.a)(X().mark((function e(t){var a;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:i.state.email,password:i.state.password},console.log(a),e.next=5,Object(Q.l)(a).then((function(e){console.log(e),(null===e||void 0===e?void 0:e.status)&&(V()("Success","OTP sent to Your Register mail id"),i.setState({OtpScreen:!0}))})).catch((function(e){var t,a;console.log(e.response);var n="Incorrect password"==(null===(t=e.response)||void 0===t?void 0:t.data.message),r="Incorrect Email"==(null===(a=e.response)||void 0===a?void 0:a.data.message);n&&V()({title:"Some Error Occurred",text:"Incorrect Password",icon:"warning",dangerMode:!1}),r&&V()({title:"Some Error Occurred",text:"Incorrect Email",icon:"warning",dangerMode:!1})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.changepassword=function(e){e.preventDefault();var t=new FormData;t.append("email",i.state.email),t.append("base_url","this.state.password"),K.a.post("/forgetPasswordEmailVerify",t).then((function(e){console.log(e),i.setState({resetpassword:!1}),V()("Email has been sent to Your Mail id","Please Check and verify")})).catch((function(e){console.log(e)}))},i.handleChangeOTP=function(e){console.log(e),i.setState({Otp:e})},i.state={email:"",Otp:"",OtpScreen:!1,password:"",resetpassword:!1},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(p.a,null,u.a.createElement(m.a,{className:"m-0 justify-content-center"},u.a.createElement(d.a,{sm:"5",xl:"5",lg:"5",md:"5",className:"d-flex justify-content-center"},u.a.createElement(f.a,{className:"bg-authentication login-card rounded-0 mb-0 w-100"},u.a.createElement(m.a,{className:"m-0"},u.a.createElement(d.a,{lg:"12",md:"12",className:"p-1"},u.a.createElement(f.a,{className:"rounded-0 mb-0 px-2 login-tabs-container"},u.a.createElement("div",{className:"logo-box text-center p-2"},u.a.createElement("img",{src:k.a,alt:"loginImg",width:"90%",height:"150px"})),this.state.resetpassword?u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{className:"pb-1"},u.a.createElement(g.a,null,u.a.createElement("h4",{className:"mb-0"},u.a.createElement("strong",null,"Email Verification")))),u.a.createElement("p",{className:"px-2 auth-title mb-2"},"Welcome , Please Enter details."),u.a.createElement(v.a,{onSubmit:this.changepassword},u.a.createElement(b.a,null,"Email"),u.a.createElement(y.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(E.a,{type:"email",name:"email",placeholder:"Username",value:this.state.email,onChange:this.handlechange})),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Submit")))):u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,this.state.OtpScreen&&this.state.OtpScreen?u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{className:"pb-1"},u.a.createElement(g.a,null,u.a.createElement("h4",{className:"mb-0"},u.a.createElement("strong",null,"Login")))),u.a.createElement("p",{className:"px-2 auth-title mb-2"},"Welcome , Enter Email OTP to Login your Account."),u.a.createElement(v.a,{onSubmit:this.loginOTPHandler},u.a.createElement(y.a,{className:"otpscreeen d-flex justify-content-center"},u.a.createElement(H,{containerStyle:"true inputdata",inputStyle:"true inputdataone",className:"otpinputtype mb-2",value:this.state.Otp,name:"emailotp",onChange:this.handleChangeOTP,numInputs:6,renderSeparator:u.a.createElement("span",null,"-"),renderInput:function(e){return u.a.createElement("input",Object.assign({className:"inputs"},e))}})),u.a.createElement("div",{className:"d-flex justify-content-center"},u.a.createElement(w.a.Ripple,{width:"80%",color:"primary",type:"submit"},"Login"),u.a.createElement(O.a,{activeTab:this.state.activeTab},u.a.createElement(N.a,{tabId:"1"},u.a.createElement(Y,null)),u.a.createElement(N.a,{tabId:"2"},u.a.createElement(q,null)))))):u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{className:"pb-1"},u.a.createElement(g.a,null,u.a.createElement("h4",{className:"mb-0"},u.a.createElement("strong",null,"Login")))),u.a.createElement("p",{className:"px-2 auth-title mb-2"},"Welcome back, Please login to your account."),u.a.createElement(v.a,{onSubmit:this.loginHandler},u.a.createElement(y.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(j.a,null,u.a.createElement(x.a,{addonType:"prepend"},"username"),u.a.createElement(E.a,{type:"text",name:"email",placeholder:"User Name",value:this.state.email,onChange:this.handlechange,required:!0}))),u.a.createElement(y.a,{className:"form-label-group position-relative has-icon-left"},u.a.createElement(j.a,null,u.a.createElement(x.a,{addonType:"prepend"},"Password"),u.a.createElement(E.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handlechange,required:!0}))),u.a.createElement("div",{className:"d-flex justify-content-between"},u.a.createElement(w.a.Ripple,{color:"primary",outline:!0,onClick:function(t){t.preventDefault(),e.setState({resetpassword:!0})}},"Forget Password"),u.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Login"),u.a.createElement(O.a,{activeTab:this.state.activeTab},u.a.createElement(N.a,{tabId:"1"},u.a.createElement(Y,null)),u.a.createElement(N.a,{tabId:"2"},u.a.createElement(q,null)))))))))))))))}}]),a}(u.a.Component);t.default=Object(_.b)((function(e){return{values:e.auth.login}}))(Z)},853:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(17),i=a(19),s=a(1),c=a.n(s),l=a(2),u=a.n(l),p=a(5),m=a.n(p),d=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,p=e.addon,h=e.plaintext,g=e.innerRef,v=Object(r.a)(e,f),b=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),w="form-control";h?(w+="-plaintext",E=u||"input"):"file"===o?w+="-file":"range"===o?w+="-range":b&&(w=p?null:"form-check-input"),v.size&&y.test(v.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=v.size,delete v.size);var O=Object(d.mapToCssModules)(m()(t,l&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,w),a);return("input"===E||u&&"function"===typeof u)&&(v.type=o),v.children&&!h&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(E,Object(n.a)({},v,{ref:g,className:O,"aria-invalid":l}))},t}(c.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g},873:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,l=e.check,d=e.size,f=e.for,h=Object(r.a)(e,m),g=[];s.forEach((function(t,n){var r=e[t];if(delete h[t],r||""===r){var o,i=!n;if(Object(p.isObject)(r)){var s,c=i?"-":"-"+t+"-";o=v(i,t,r.size),g.push(Object(p.mapToCssModules)(u()(((s={})[o]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s))),a)}else o=v(i,t,r),g.push(o)}}));var b=Object(p.mapToCssModules)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),a);return i.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:b}))};b.propTypes=h,b.defaultProps=g,t.a=b},874:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(17),i=a(19),s=a(1),c=a.n(s),l=a(2),u=a.n(l),p=a(5),m=a.n(p),d=a(4),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,s=e.innerRef,l=Object(r.a)(e,f),u=Object(d.mapToCssModules)(m()(t,!!o&&"form-inline"),a);return c.a.createElement(i,Object(n.a)({},l,{ref:s,className:u}))},t}(s.Component);g.propTypes=h,g.defaultProps={tag:"form"},t.a=g},880:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1),r=a.n(n).a.createContext({})},918:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(4),m=["className","cssModule","row","disabled","check","inline","tag"],d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.row,s=e.disabled,c=e.check,l=e.inline,d=e.tag,f=Object(r.a)(e,m),h=Object(p.mapToCssModules)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),a);return"fieldset"===d&&(f.disabled=s),i.a.createElement(d,Object(n.a)({},f,{className:h}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},925:function(e,t,a){"use strict";var n=a(11),r=a(12),o=a(13),i=a(14),s=a(1),c=a.n(s),l=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),a}(c.a.Component);t.a=l},932:function(e,t,a){e.exports=a.p+"static/media/paravilogo.d9c2409f.png"},939:function(e,t,a){"use strict";var n=a(6),r=a(19),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(880),m=a(4),d={tag:m.tagPropType,activeTab:c.a.any,className:c.a.string,cssModule:c.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,o=Object(m.omit)(this.props,Object.keys(d)),s=Object(m.mapToCssModules)(u()("tab-content",t),a);return i.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(r,Object(n.a)({},o,{className:s})))},t}(o.Component);t.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},940:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(6),r=a(8),o=a(1),i=a.n(o),s=a(2),c=a.n(s),l=a(5),u=a.n(l),p=a(880),m=a(4),d=["className","cssModule","tabId","tag"],f={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function h(e){var t=e.className,a=e.cssModule,o=e.tabId,s=e.tag,c=Object(r.a)(e,d),l=function(e){return Object(m.mapToCssModules)(u()("tab-pane",t,{active:o===e}),a)};return i.a.createElement(p.a.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(s,Object(n.a)({},c,{className:l(t)}))}))}h.propTypes=f,h.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=101.5c7b6341.chunk.js.map