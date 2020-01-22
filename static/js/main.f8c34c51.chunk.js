(this["webpackJsonptwilio-test"]=this["webpackJsonptwilio-test"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(4),l=n.n(r),o=(n(3),n(16),n(5)),c=n.n(o),i=n(6),d=n(7),m=n(9),u=n(8),h=n(1),p=n(10),b=(n(18),{send_sms:function(e){return window.fetch("https://sms-22448-steve.herokuapp.com/web-sms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return 200===e.status?e.json():null})).then((function(e){if(!e||e.error)throw console.log("API Error: ",{data:e}),Error("API Error");return e}))}}),g=function(e,t){var n=!0;return Object.values(t).forEach((function(e){return e.length>0&&(n=!1)})),Object.values(e).forEach((function(e){return 0===e.length&&(n=!1)})),n},f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,s=t.value,r=n.state.errors,l=n.state.inputs;switch(a){case"sender_name":r.sender_name=s.length<2?"Name must contain at least two characters.":"",l.sender_name=s;break;case"sender_number":r.sender_number=s.length<11||s.length>12?"Enter phone number with 11 digits, incl. int`l code and start with +":"",l.sender_number=s;break;case"sender_message":r.sender_message=s.length>120?"Messages need to be <120 characters because this app is old school.":"",l.sender_message=s}n.setState({errors:r,inputs:l}),g(n.state.inputs,n.state.errors)?(console.log("Valid Form"),n.setState({valid:!0,disabled:!1,btnColor:"blue"})):(console.log("Invalid form"),n.setState({valid:!1,disabled:!0,btnColor:"lightblue"}))},n.state={btnColor:"lightblue",disabled:!0,succeeded:!1,failed:!1,valid:!1,error:null,errors:{sender_name:"",sender_number:"",sender_message:""},inputs:{sender_name:"",sender_number:"",sender_message:""}},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleSubmit",value:function(e){var t=this;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),b.send_sms({name:this.state.inputs.sender_name,number:this.state.inputs.sender_number,message:this.state.inputs.sender_message}).then((function(e){e.error?(t.setState({error:"Sending failed: ".concat(e.error.message),disabled:!1,proessing:!1}),console.log("[error",e.error)):(t.setState({succeeded:!0,error:""}),console.log("Success!"))})).catch((function(e){t.setState({error:e.message,failed:!0,processing:!1}),console.log(e)}));case 2:case"end":return n.stop()}}),null,this)}},{key:"renderSuccess",value:function(){return s.a.createElement("div",{className:"sr-field-success message"},s.a.createElement("h3",null,"Message sent!"),s.a.createElement("p",null,"Refresh to send another."))}},{key:"renderForm",value:function(){var e=this.state.errors;return s.a.createElement("div",{className:"full-container vertical-center"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("h2",null,"Just like using your phone..."),s.a.createElement("h3",null,"...except a web app..."),s.a.createElement("h4",null,"...and also dumber."),s.a.createElement("h5",null,"Enter your details and message below, then hit send to SMS Steve."),s.a.createElement("div",{className:"sr-combo-inputs",style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},s.a.createElement("div",{className:"sr-combo-inputs-row"},s.a.createElement("input",{type:"text",name:"sender_name",placeholder:"Name - This will tell Steve who's texting.",className:"sr-input",autoComplete:"cardholder",onChange:this.handleChange}),e.sender_name.length<2&&s.a.createElement("span",{style:{color:"red"}},e.sender_name),s.a.createElement("input",{type:"text",name:"sender_number",placeholder:"Enter phone number with int'l code.",className:"sr-input",autoComplete:"cardholder",onChange:this.handleChange}),12!==e.sender_number.length&&s.a.createElement("span",{style:{color:"red"}},e.sender_number),s.a.createElement("textarea",{type:"text",name:"sender_message",placeholder:"Your message. 120 character max.",className:"sr-input",autoComplete:"cardholder",onChange:this.handleChange}),e.sender_message.length>120&&s.a.createElement("span",{style:{color:"red"}},e.sender_message),s.a.createElement("div",{className:"pad-bottom",style:{color:"red",padding:5}},this.state.failed?"Sending message failed. Try again.":null)),!this.state.succeeded&&s.a.createElement("button",{className:"btn",disabled:this.state.disabled,style:{backgroundColor:this.state.btnColor,border:this.state.btnColor}},this.state.failed?"Try again.":"Send"))))}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.succeeded&&this.renderSuccess(),!this.state.succeeded&&this.renderForm())}}]),t}(a.Component),v=function(e){return s.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};var E=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",null,s.a.createElement(v,{symbol:"\u260e\ufe0f"})," SMS",s.a.createElement("a",{href:"http://www.stevehind.me",className:""}," Steve "),s.a.createElement(v,{symbol:"\u260e\ufe0f"}))),s.a.createElement("div",{className:"App-body"},s.a.createElement(f,null)),s.a.createElement("footer",{className:"App-footer"},s.a.createElement("p",null,"\xa9Steve Hind, 2020.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.f8c34c51.chunk.js.map