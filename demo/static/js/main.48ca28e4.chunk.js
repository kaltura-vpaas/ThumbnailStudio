(this["webpackJsonpthumbnail-studio"]=this["webpackJsonpthumbnail-studio"]||[]).push([[0],{117:function(e,t,a){},122:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e){e.exports=JSON.parse('[{"id":1,"name":"crop","label":"Crop","alias":"c","descripton":"Crop the image into a smaller one","props":[{"id":1,"name":"height","label":"Height","description":"The required height","alias":"h","type":"int","required":true,"defaultValue":""},{"id":2,"name":"width","label":"Width","description":"The required width","alias":"w","type":"int","required":true,"defaultValue":""},{"id":3,"name":"x","label":"x","description":"crop to start from specific x coordinate","alias":"","type":"int","required":false,"defaultValue":""},{"id":4,"name":"y","label":"y","description":"crop to start from specific y coordinate","alias":"","type":"int","required":false,"defaultValue":""},{"id":5,"name":"gravityPoint","label":"Gravity Point","description":"The gravity point to crop the image to","alias":"gp","type":"int","required":false,"defaultValue":""}]},{"id":2,"name":"resize","label":"Resize","alias":"re","descripton":"Changing the image dimensions","props":[{"id":1,"name":"height","label":"Height","description":"The required height","alias":"h","type":"int","required":true,"defaultValue":""},{"id":2,"name":"width","label":"Width","description":"The required width","alias":"w","type":"int","required":true,"defaultValue":""},{"id":3,"name":"blur","label":"Blur","description":"The blur factor where > 1 is blurry, < 1 is sharp. Only relevant if we resizing to a smaller size","alias":"b","type":"float","required":false,"defaultValue":""},{"id":4,"name":"filterType","label":"Filter Type","description":"Refer to the list of filter constants. https://www.php.net/manual/en/imagick.constants.php#imagick.constants.filters Only relevant if we resizing to a smaller size","alias":"ft","type":"int","required":false,"defaultValue":22},{"id":5,"name":"bestFit","label":"Best Fit","description":"Optional fit parameter","alias":"bf","type":"bool","required":false,"defaultValue":false},{"id":6,"name":"compositeFit","label":"Composite Fit","description":"Trying to scale the image to the previous tranformationStep image","alias":"cf","type":"bool","required":false,"defaultValue":false}]},{"id":3,"name":"roundcorners","label":"Round Corners","alias":"rc","descripton":"Rounding the corners","props":[{"id":1,"name":"xRounding","label":"X rounding","description":"X rounding","alias":["x","xr"],"type":"float","required":true,"defaultValue":""},{"id":2,"name":"yRounding","label":"Y rounding","description":"Y rounding","alias":["y","yr"],"type":"float","required":true,"defaultValue":""},{"id":3,"name":"strokeWidth","label":"Stroke Width","description":"Stroke width","alias":"sw","type":"float","required":false,"defaultValue":10},{"id":4,"name":"displace","label":"Displace","description":"Image displace","alias":"d","type":"float","required":false,"defaultValue":5},{"id":5,"name":"sizeCorrection","label":"Size Correction","description":"Size correction","alias":"sc","type":"float","required":false,"defaultValue":-6},{"id":6,"name":"backgroundColor","label":"Background Color","description":"Color for the corners","alias":"bg","type":"color","required":false,"defaultValue":"black"}]},{"id":4,"name":"rotate","label":"Rotate","alias":"r","descripton":"Rotating the image","props":[{"id":1,"name":"degrees","label":"Degrees","description":"Degrees to turn","alias":["d","deg"],"type":"int","required":true,"defaultValue":""},{"id":2,"name":"backgroundColor","label":"Background Color","description":"Color to fill empty space created by the rotation color string without # like \'fff or fixed names like \'red, \'blue","alias":["b","bg"],"type":"color","required":true,"defaultValue":"black"}]},{"id":5,"name":"text","label":"Text","alias":"text","descripton":"Adding a text on the image","props":[{"id":1,"name":"text","label":"Text","description":"The text, it must be URL encoded","alias":"t","type":"string","required":true,"defaultValue":""},{"id":7,"name":"font","label":"Font","description":"Name of the font case sensitive","alias":"f","type":"select","required":false,"defaultValue":"Courier","props":{"options":["AvantGarde-Book","AvantGarde-BookOblique","AvantGarde-Demi","AvantGarde-DemiOblique","Bookman-Demi","Bookman-DemiItalic","Bookman-Light","Bookman-LightItalic","Courier","Courier-Bold","Courier-BoldOblique","Courier-Oblique,","fixed","Helvetica","Helvetica-Bold","Helvetica-BoldOblique","Helvetica-Narrow","Helvetica-Narrow-Bold","Helvetica-Narrow-BoldOblique","Helvetica-Narrow-Oblique","Helvetica-Oblique","NewCenturySchlbk-Bold","NewCenturySchlbk-BoldItalic","NewCenturySchlbk-Italic","NewCenturySchlbk-Roman","Palatino-Bold","Palatino-BoldItalic","Palatino-Italic","Palatino-Roman","Symbol","Times-Bold","Times-BoldItalic","Times-Italic","Times-Roman","DejaVu-Sans-Bold","DejaVu-Sans-Mono-Bold","DejaVu-Serif-Bold","symbol"]}},{"id":2,"name":"fontSize","label":"Font Size","description":"The font size","alias":"fs","type":"float","required":false,"defaultValue":10},{"id":8,"name":"strokeWidth","label":"Stroke Width","description":"","alias":"sw","type":"float","required":false,"defaultValue":1},{"id":3,"name":"x","label":"X","description":"Horizontal offset in pixels to the left of the text","alias":null,"type":"int","required":false,"defaultValue":0},{"id":4,"name":"y","label":"Y","description":"Vertical offset in pixels to the baseline of the text","alias":null,"type":"int","required":false,"defaultValue":0},{"id":9,"name":"angle","label":"Angle","description":"The angle to write the text","alias":"a","type":"float","required":false,"defaultValue":0},{"id":10,"name":"maxHeight","label":"Max Height","description":"If you want to limit the textbox","alias":"mh","type":"int","required":false,"defaultValue":""},{"id":11,"name":"maxWidth","label":"Max Width","description":"If you want to limit the textbox, it will try to word warp","alias":"mw","type":"int","required":false,"defaultValue":""},{"id":5,"name":"strokeColor","label":"Stroke color","description":"","alias":"sc","type":"color","required":false,"defaultValue":"black"},{"id":6,"name":"fillColor","label":"Fill color","description":"","alias":"fc","type":"color","required":false,"defaultValue":"black"}]},{"id":6,"name":"filter","label":"Filter","alias":"f","descripton":"Applying predefined filters on the image","props":[{"id":1,"name":"filterType","label":"Filter Type","description":"The desired filter.","alias":["f","ft"],"type":"select","required":true,"defaultValue":"","props":{"options":["blueshift","charcoal","contrast","edge","oil","polaroid","raise","sepia","shade","solarize","vignette","wave"]}}]},{"id":7,"name":"imageTextureText","label":"Texture text","descripton":"Creating a text with thumbnail image as texture","alias":"itt","props":[{"id":1,"name":"text","label":"Text","description":"The text, it must be URL encoded","alias":["t","txt"],"type":"string","required":true,"defaultValue":""},{"id":2,"name":"font","label":"Font","description":"Name of the font case sensitive","alias":"f","type":"select","required":false,"defaultValue":"Courier","props":{"options":["AvantGarde-Book","AvantGarde-BookOblique","AvantGarde-Demi","AvantGarde-DemiOblique","Bookman-Demi","Bookman-DemiItalic","Bookman-Light","Bookman-LightItalic","Courier","Courier-Bold","Courier-BoldOblique","Courier-Oblique,","fixed","Helvetica","Helvetica-Bold","Helvetica-BoldOblique","Helvetica-Narrow","Helvetica-Narrow-Bold","Helvetica-Narrow-BoldOblique","Helvetica-Narrow-Oblique","Helvetica-Oblique","NewCenturySchlbk-Bold","NewCenturySchlbk-BoldItalic","NewCenturySchlbk-Italic","NewCenturySchlbk-Roman","Palatino-Bold","Palatino-BoldItalic","Palatino-Italic","Palatino-Roman","Symbol","Times-Bold","Times-BoldItalic","Times-Italic","Times-Roman","DejaVu-Sans-Bold","DejaVu-Sans-Mono-Bold","DejaVu-Serif-Bold","symbol"]}},{"id":3,"name":"fontSize","label":"Font Size","description":"The font size","alias":"fs","type":"float","required":false,"defaultValue":10},{"id":4,"name":"strokeWidth","label":"Stroke Width","description":"Stroke width","alias":"sw","type":"float","required":false,"defaultValue":1},{"id":5,"name":"x","label":"X","description":"Horizontal offset in pixels to the left of the text","alias":null,"type":"int","required":false,"defaultValue":0},{"id":6,"name":"y","label":"Y","description":"Vertical offset in pixels to the baseline of the text","alias":null,"type":"int","required":false,"defaultValue":10},{"id":7,"name":"angle","label":"Angle","description":"The angle to write the text","alias":"a","type":"float","required":false,"defaultValue":0}]},{"id":8,"name":"composite","label":"Composite","alias":"comp","descripton":"","props":[{"id":1,"name":"x","label":"X","description":"The column offset of the composited image","alias":"","type":"int","required":false,"defaultValue":0},{"id":2,"name":"y","label":"Y","description":"The row offset of the composited image","alias":"","type":"int","required":false,"defaultValue":""},{"id":3,"name":"opacity","label":"Opacity","description":"the opacity of the added image value can be between 1-100","alias":"op","type":"int","required":false,"defaultValue":""},{"id":4,"name":"compositetype","label":"Composite Type","description":"Composite operator","alias":"ct","type":"int","required":false,"defaultValue":40},{"id":5,"name":"channel","label":"Channel","description":"Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators","alias":"ch","type":"int","required":false,"defaultValue":134217727}]},{"id":9,"name":"output","label":"Output","alias":"o","descripton":"Modify the image output parameters","props":[{"id":1,"name":"format","label":"Format","description":"the image format","alias":"f","type":"select","required":false,"defaultValue":"","props":{"options":["JPEG","PNG","BMP","GIF"]}},{"id":2,"name":"quality","label":"Quality","description":"the image compression quality","alias":"q","type":"int","required":false,"defaultValue":"75"}]}]')},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},246:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(45),o=a.n(i),l=(a(117),a(10)),c=(a(122),a(18)),s=a(108),u=a(1),d=a(8),p="features",f={SET_LIST:"".concat(p,".SET_LIST"),FETCH_LIST_REQUEST:"".concat(p,".FETCH_LIST_REQUEST"),FETCH_LIST_SUCCESS:"".concat(p,".FETCH_LIST_SUCCESS"),FETCH_LIST_FAIL:"".concat(p,".FETCH_LIST_FAIL"),SET_SELECTED_FEATURE:"".concat(p,".SET_SELECTED_FEATURE"),CLEAR_SELECTED_FEATURE:"".concat(p,".CLEAR_SELECTED_FEATURE")},E=f,m={isFetching:!1,error:null,featureList:[],selectedFeature:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SET_LIST:return Object(u.a)(Object(u.a)({},e),{},{featureList:t.payload});case E.FETCH_LIST_REQUEST:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!0});case E.FETCH_LIST_SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1});case E.FETCH_LIST_FAIL:return Object(u.a)(Object(u.a)({},e),{},{isFetching:!1,error:t.payload});case E.SET_SELECTED_FEATURE:return Object(u.a)(Object(u.a)({},e),{},{selectedFeature:t.payload});case E.CLEAR_SELECTED_FEATURE:return Object(u.a)(Object(u.a)({},e),{},{selectedFeature:null});default:return e}},h=Object(d.a)({},p,b),y=h,v=a(11),T="featureStack",g={SET_LIST:"".concat(T,".SET_LIST"),ADD_FEATURE:"".concat(T,".ADD_FEATURE"),REMOVE_FEATURE:"".concat(T,".REMOVE_FEATURE"),SET_SELECTED_FEATURE:"".concat(T,".SET_SELECTED_FEATURE"),CLEAR_SELECTED_FEATURE:"".concat(T,".CLEAR_SELECTED_FEATURE")},O=g,S={selectedFeature:null,featureList:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.SET_LIST:return Object(u.a)(Object(u.a)({},e),{},{featureList:t.payload});case O.SET_SELECTED_FEATURE:return Object(u.a)(Object(u.a)({},e),{},{selectedFeature:t.payload});case O.CLEAR_SELECTED_FEATURE:return Object(u.a)(Object(u.a)({},e),{},{selectedFeature:null});case O.ADD_FEATURE:return Object(u.a)(Object(u.a)({},e),{},{featureList:[].concat(Object(v.a)(e.featureList),[t.payload])});case O.REMOVE_FEATURE:return Object(u.a)(Object(u.a)({},e),{},{featureList:e.featureList.filter((function(e){return e.uniqId!==t.payload.uniqId}))});default:return e}},j=Object(d.a)({},T,C),_=j,A=a(47),I=a.n(A),R="featureProps",N={SET_FEATURE_PROPERTY:"".concat(R,".SET_FEATURE_PROPERTY"),CLEAR_FEATURE_PROPERTY:"".concat(R,".CLEAR_FEATURE_PROPERTY"),CHANGE_FEATURE_PROPERTY:"".concat(R,".CHANGE_FEATURE_PROPERTY")},q=N,k={},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.SET_FEATURE_PROPERTY:return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},t.payload.uniqId,t.payload.props));case q.CLEAR_FEATURE_PROPERTY:return I()(e,t.payload.uniqId);case q.CHANGE_FEATURE_PROPERTY:return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},t.payload.uniqId,t.payload.featureProps));default:return e}},w=Object(d.a)({},R,F),P=w,L="appConfig",x={SET_KS:"".concat(L,".SET_KS"),SET_PARTNER_ID:"".concat(L,".SET_PARTNER_ID")},V=x,D={ks:"",partnerId:"2421271"},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.SET_KS:return Object(u.a)(Object(u.a)({},e),{},{ks:t.payload});case V.SET_PARTNER_ID:return Object(u.a)(Object(u.a)({},e),{},{partnerId:t.payload});default:return e}},B=Object(d.a)({},L,U),H="instances",Y={ADD_INSTANCE:"".concat(H,".ADD_INSTANCE"),REMOVE_INSTANCE:"".concat(H,".REMOVE_INSTANCE"),SET_SELECTED_INSTANCE:"".concat(H,".SET_SELECTED_INSTANCE"),CLEAR_SELECTED_INSTANCE:"".concat(H,".CLEAR_SELECTED_INSTANCE")},M={id:"sbsqi5",entryId:"0_60gyd613",sourceAction:null,props:a(68)},G={selectedInstance:M,instanceList:[M]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.SET_SELECTED_INSTANCE:return Object(u.a)(Object(u.a)({},e),{},{selectedInstance:t.payload});case Y.CLEAR_SELECTED_INSTANCE:return Object(u.a)(Object(u.a)({},e),{},{selectedInstance:null});case Y.ADD_INSTANCE:return Object(u.a)(Object(u.a)({},e),{},{instanceList:[].concat(Object(v.a)(e.instanceList),[t.payload])});case Y.REMOVE_INSTANCE:return Object(u.a)(Object(u.a)({},e),{},{instanceList:e.instanceList.filter((function(e){return e.id!==t.payload.id}))});default:return e}},W=Object(d.a)({},H,z),K="instanceProps",J={SET_INSTANCE_PROPERTY:"".concat(K,".SET_INSTANCE_PROPERTY"),CLEAR_INSTANCE_PROPERTY:"".concat(K,".CLEAR_INSTANCE_PROPERTY"),CHANGE_INSTANCE_PROPERTY:"".concat(K,".CHANGE_INSTANCE_PROPERTY")},Q=a(68),X={sbsqi5:{id:"sbsqi5",entryId:"0_60gyd613",sourceAction:Q[0],props:Q}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.SET_INSTANCE_PROPERTY:return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},t.payload.id,t.payload.props));case J.CLEAR_INSTANCE_PROPERTY:return I()(e,t.payload.id);case J.CHANGE_INSTANCE_PROPERTY:return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},t.payload.id,t.payload.instanceProps));default:return e}},Z=Object(d.a)({},K,$),ee=Object(c.c)(Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)(Object(u.a)({},B),y),_),P),W),Z)),te=[s.a],ae=c.d.apply(void 0,[c.a.apply(void 0,te)].concat([])),ne=Object(c.e)(ee,{},ae),re=a(4),ie=a(5),oe=a(7),le=a(6),ce=(a(193),function(e){return r.a.createElement("div",{className:"feature-item".concat(e.selected?" selected":""),onClick:e.onClick},r.a.createElement("span",{className:"feature-label"},e.label))}),se=(a(194),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).setSelected=function(t){return function(){e.props.setSelectedFeature(t)}},e}return Object(ie.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchFeatureList()}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.selectedFeature,i=t.disabled;return r.a.createElement("div",{className:"feature-list"},!i&&a.map((function(t){return r.a.createElement(ce,{key:t.id,onClick:e.setSelected(t),label:t.label,selected:!!n&&n.id===t.id})})))}}]),a}(n.Component)),ue=a(3),de=function(e){return e[p]},pe=Object(ue.a)(de,(function(e){return e.featureList})),fe=Object(ue.a)(de,(function(e){return e.selectedFeature})),Ee=function(e){return e.instances},me=Object(ue.a)(Ee,(function(e){return e.instanceList})),be=Object(ue.a)(Ee,(function(e){return e.selectedInstance})),he=a(26),ye=a.n(he),ve=a(48),Te=a(2),ge=a.n(Te),Oe=a(49),Se=a.n(Oe),Ce=a(33),je=a.n(Ce),_e=a(71),Ae=a.n(_e),Ie=function(e){return e.featureStack},Re=Object(ue.a)(Ie,(function(e){return e.featureList})),Ne=Object(ue.a)([Re,be],(function(e,t){return je()(e,["instanceId",ge()(t,"id")])})),qe=Object(ue.a)(Ie,(function(e){return e.selectedFeature})),ke=Object(ue.a)([Re,qe],(function(e,t){return Ae()(e,(function(e){return e.uniqId===ge()(t,"uniqId")}))})),Fe=function(e){return e.featureProps},we=Object(ue.a)([Fe,qe],(function(e,t){return e[ge()(t,"uniqId")]||[]})),Pe=(a(232),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.onChange(t.target.value)},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.required,n=e.type,i={type:"string"===n?"text":"number"};return"float"===n&&(i.step=.01),r.a.createElement("input",Object.assign({value:t,onChange:this.onChange,required:a,className:"text-input".concat(a&&!t?" error":"")},i))}}]),a}(n.Component)),Le=a(109),xe=a.n(Le),Ve=function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){var a=t.target.value;Me(a)?e.props.onChange(xe()(a,"#","")):e.props.onChange(a)},e.prepareValue=function(e){return Ge(e)?"#".concat(e):e},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.required;return r.a.createElement("input",{type:"color",value:this.prepareValue(t),onChange:this.onChange,required:a,className:"color-picker"})}}]),a}(n.Component),De=a(9),Ue=a.n(De),Be=(a(233),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.onChange(t.target.value)},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.required,n=e.options;return Ue()(n)?r.a.createElement("select",{onChange:this.onChange,className:"dropdown".concat(a&&!t?" error":""),required:a,value:t},n.map((function(e,t){return r.a.createElement("option",{key:t,value:e,label:e})}))):null}}]),a}(n.Component)),He=(a(234),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){console.log("here"),console.log(t.target),e.props.onChange(t.target.checked)},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.required;return r.a.createElement("input",{checked:t,onChange:this.onChange,required:a,className:"checkbox".concat(a&&!t?" error":""),type:"checkbox"})}}]),a}(n.Component)),Ye=function(){return"".concat(Object(v.a)(Array(10)).map((function(){return(~~(36*Math.random())).toString(36)})).join(""),"-").concat(Date.now())},Me=function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},Ge=function(e){return"string"===typeof e&&6===e.length&&!isNaN(parseInt(e,16))},ze=function(){return{type:O.CLEAR_SELECTED_FEATURE}},We=function(){return function(e,t){var a=fe(t()),n=be(t());e({type:O.ADD_FEATURE,payload:Object(u.a)(Object(u.a)({},a),{},{uniqId:"".concat(a.id,"-").concat(Ye()),instanceId:ge()(n,"id")})})}},Ke=function(){return function(e,t){var a=qe(t());e(function(e){return{type:q.CLEAR_FEATURE_PROPERTY,payload:e}}(a)),e(ze()),e({type:O.REMOVE_FEATURE,payload:a})}},Je=function(e){return{type:E.SET_LIST,payload:e}},Qe=function(){return{type:E.CLEAR_SELECTED_FEATURE}},Xe={fetchFeatureList:function(){return function(){var e=Object(ve.a)(ye.a.mark((function e(t){var n;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:E.FETCH_LIST_REQUEST}),e.next=3,a(235);case 3:n=e.sent,t({type:E.FETCH_LIST_SUCCESS}),t(Je(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setSelectedFeature:function(e){return function(t,a){var n=fe(a());ge()(n,"id")!==e.id&&(qe(a())&&t(ze()),t({type:E.SET_SELECTED_FEATURE,payload:e}))}}},$e=Object(l.b)((function(e){return{list:pe(e),selectedFeature:fe(e),disabled:!be(e)}}),Xe)(se),Ze=(a(236),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleOnChange=function(t){var a=e.props;(0,a.onChange)(a.id,t)},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.label,n=e.required,i=e.props,o=e.description,l=function(e){switch(e){case"string":case"float":case"int":return Pe;case"bool":return He;case"color":return Ve;case"select":return Be;default:return null}}(this.props.type);return l?r.a.createElement("div",{className:"property"},r.a.createElement("span",{className:"property-label"},a,r.a.createElement("a",{href:"/#",className:"tooltip",title:o}," ")),r.a.createElement(l,Object.assign({value:t,onChange:this.handleOnChange,required:n,type:this.props.type},i))):null}}]),a}(n.Component)),et=(a(237),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){return Object(re.a)(this,a),t.apply(this,arguments)}return Object(ie.a)(a,[{key:"render",value:function(){var e=this,t=this.props.list;return t.length<1?null:r.a.createElement("div",{className:"feature-properties"},t.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(Ze,Object.assign({onChange:e.props.changeFeatureProperty},t)))})))}}]),a}(n.Component)),tt={changeFeatureProperty:function(e,t){return function(a,n){var r=qe(n()).uniqId,i=Fe(n())[r].map((function(a){return a.id===e?Object(u.a)(Object(u.a)({},a),{},{value:t}):a}));a({type:q.CHANGE_FEATURE_PROPERTY,payload:{uniqId:r,featureProps:i}})}}},at=Object(l.b)((function(e){return{list:we(e)}}),tt)(et),nt=(a(238),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleMove=function(t){return function(a){var n=e.props,r=n.selectedFeatureIndex;(0,n.changeFeaturePosition)(r,r-t)}},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this.props,t=e.addFeature,a=e.removeFeature,n=e.selectedFeatureStack,i=e.selectedFeatureList,o=e.isMoveDownEnabled,l=e.isMoveUpEnabled;return r.a.createElement("div",{className:"button-wrapper"},l&&r.a.createElement("button",{onClick:this.handleMove(1)},"move Up"),i&&r.a.createElement("button",{onClick:t},"add"),n&&r.a.createElement("button",{onClick:a},"remove"),o&&r.a.createElement("button",{onClick:this.handleMove(-1)},"move Down"))}}]),a}(n.Component)),rt=Object(ue.a)(ke,(function(e){return e>0})),it=Object(ue.a)([Re,ke],(function(e,t){return t>-1&&t<e.length-1})),ot={addFeature:We,removeFeature:Ke,changeFeaturePosition:function(e,t){return function(a,n){var r=Re(n()),i=r[e],o=[];r.forEach((function(a,n){if(n!==e)return n===t?o=[].concat(Object(v.a)(o),t>e?[a,i]:[i,a]):void(o=[].concat(Object(v.a)(o),[a]))})),a(function(e){return{type:O.SET_LIST,payload:e}}(o))}}},lt=Object(l.b)((function(e){return{selectedFeatureStack:qe(e),selectedFeatureList:fe(e),isMoveDownEnabled:it(e),isMoveUpEnabled:rt(e),selectedFeatureIndex:ke(e)}}),ot)(nt),ct=(a(239),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).setSelectedFeature=function(t){return function(){e.props.setSelectedFeature(t)}},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.selectedFeature;return r.a.createElement("div",{className:"feature-stack"},r.a.createElement(lt,null),r.a.createElement("div",{className:"feature-wrapper"},r.a.createElement("span",{className:"section-label"},"Step stack"),r.a.createElement("div",{className:"feature-stack-list"},a.map((function(t){return r.a.createElement(ce,{key:t.uniqId,onClick:e.setSelectedFeature(t),label:t.label,selected:!!n&&n.uniqId===t.uniqId})}))),r.a.createElement(at,null)))}}]),a}(n.Component)),st={addFeature:We,removeFeature:Ke,setSelectedFeature:function(e){return function(t,a){var n=qe(a());ge()(n,"uniqId")!==e.uniqId&&(t({type:O.SET_SELECTED_FEATURE,payload:e}),t(function(e){return function(t,a){var n=Fe(a())[e.uniqId]||[];t({type:q.SET_FEATURE_PROPERTY,payload:{props:Se()(n,e.props),uniqId:e.uniqId}})}}(e))),fe(a())&&t(Qe())}}},ut=Object(l.b)((function(e){return{list:Ne(e),selectedFeature:qe(e)}}),st)(ct),dt=(a(240),function(){return r.a.createElement("div",{className:"features"},r.a.createElement("div",null,r.a.createElement("span",{className:"section-label"},"Avaliable actions"),r.a.createElement($e,null)),r.a.createElement("div",null,r.a.createElement(ut,null)))}),pt=a(110),ft=a.n(pt),Et=a(72),mt=a.n(Et),bt=(a(241),{json:"application/json",images:["image/jpeg","image/png","image/bmp","image/gif"]}),ht=function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={url:"",longUrl:"",blob:null,errorText:""},e.fetchImageData=Object(ve.a)(ye.a.mark((function t(){return ye.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(e.state.url,"?format=1")).then((function(e){return e.blob()})).then((function(t){e.setState({blob:t})}));case 1:case"end":return t.stop()}}),t)}))),e.onError=function(){},e.onLoad=function(){},e.renderPreviewImage=function(t){var a=URL.createObjectURL(t);return r.a.createElement("img",{src:a,alt:"preview-result",onError:e.onError,onLoad:e.onLoad})},e.setErrorText=function(t){e.state.errorText!==t&&e.setState({errorText:t})},e.renderErrorMessage=function(t){var a=new FileReader;return a.onload=function(t){var a=ft()((function(e){return JSON.parse(e)}),ge()(t,"target.result"));mt()(a)?e.setErrorText("Unexpected error"):e.setErrorText(ge()(a,"message","Undefined error"))},a.readAsText(t),r.a.createElement("span",{className:"error-message"},e.state.errorText)},e}return Object(ie.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.url!==this.state.url&&this.fetchImageData()}},{key:"componentDidMount",value:function(){this.fetchImageData()}},{key:"render",value:function(){var e=this.state,t=e.url,a=e.longUrl,n=e.blob;if(!t||!n)return null;var i=ge()(n,"type"),o=null;return bt.images.includes(i)&&(o=this.renderPreviewImage(n)),i===bt.json&&(o=this.renderErrorMessage(n)),r.a.createElement("div",{className:"preview"},r.a.createElement("span",{className:"section-label"},"Live Preview"),o,r.a.createElement("br",null),"Short:",bt.images.includes(i)&&r.a.createElement("span",{className:"url"},r.a.createElement("a",{href:t},t)),r.a.createElement("br",null),"Long:",bt.images.includes(i)&&r.a.createElement("span",{className:"url"},r.a.createElement("a",{href:a},a)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.url!==t.url?{url:e.url,longUrl:e.longUrl}:null}}]),a}(n.Component),yt=function(e){return e.instanceProps},vt=Object(ue.a)([yt,be],(function(e,t){return e[ge()(t,"id")]||{}})),Tt=Object(ue.a)([vt],(function(e){return ge()(e,"sourceAction",{})})),gt=function(e){return e.appConfig},Ot=Object(ue.a)(gt,(function(e){return e.ks})),St=Object(ue.a)(gt,(function(e){return e.partnerId})),Ct=a(22),jt=a.n(Ct),_t=a(12),At=a.n(_t),It=function(e){return Ue()(e.alias)?e.alias[0]:e.alias||e.name},Rt=function(e){return e.value==e.defaultValue?"string"===e.type?At()(e.value)?"":e.value:"":e.value},Nt=Object(ue.a)([Ot,St],(function(e,t){return"".concat("https://www.kaltura.com").concat("/api_v3","/service/thumbnail_thumbnail").concat(e?"/ks/".concat(e):"").concat(t?"/p/".concat(t):"","/action/transform/transformString")})),qt=function(e){var t="";return jt()(e,(function(e){var a=Rt(e);a&&(t+="_".concat(e.name,"-").concat(a))})),t},kt=Object(ue.a)([Nt,Re,Fe,yt],(function(e,t,a,n){var r="".concat(e,"/"),i=0;return jt()(n,(function(e){var n=e.sourceAction;if(At()(e.entryId))return!0;r+="".concat(i>0?"+":"","id-").concat(e.entryId),At()(n)||(r+=",".concat(n.name),r+=qt(n.props));var o=je()(t,["instanceId",e.id]);jt()(o,(function(e){r+=",".concat(e.name),r+=qt(a[e.uniqId]||[])})),i++})),r})),Ft=function(e){var t="";return jt()(e,(function(e){var a=Rt(e);a&&(t+="_".concat(It(e),"-").concat(a))})),t},wt=Object(ue.a)([Nt,Re,Fe,yt],(function(e,t,a,n){var r="".concat(e,"/"),i=0;return jt()(n,(function(e){var n=e.sourceAction;if(At()(e.entryId))return!0;r+="".concat(i>0?"+":"","id-").concat(e.entryId),At()(n)||(r+=",".concat(It(n)),r+=Ft(n.props));var o=je()(t,["instanceId",e.id]);jt()(o,(function(e){r+=",".concat(It(e)),r+=Ft(a[e.uniqId]||[])})),i++})),r})),Pt=Object(l.b)((function(e){return{url:wt(e),longUrl:kt(e)}}))(ht),Lt=(a(243),function(e){var t=e.setKS,a=e.ks,n=e.setPartnerId,i=e.partnerId,o=At()(a);return r.a.createElement("div",{className:"app-config"},r.a.createElement("span",{className:"section-label"},"App configuration"),r.a.createElement("div",{className:"section"},r.a.createElement("label",null,"KS"),r.a.createElement(Pe,{onChange:t,type:"string",value:a})),r.a.createElement("div",{className:"section"},r.a.createElement("label",null,"Partner Id"),r.a.createElement(Pe,{onChange:n,type:"int",value:i,required:o})))}),xt={setKS:function(e){return{type:V.SET_KS,payload:e}},setPartnerId:function(e){return{type:V.SET_PARTNER_ID,payload:e}}},Vt=Object(l.b)((function(e){return{ks:Ot(e),partnerId:St(e)}}),xt)(Lt),Dt=(a(244),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).setSelected=function(t){return function(){e.props.setSelectedInstance(t)}},e}return Object(ie.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.list,n=t.selectedInstance;return r.a.createElement("div",{className:"instance-list"},a.map((function(t,a){return r.a.createElement(ce,{key:t.id,onClick:e.setSelected(t),selected:!!n&&n.id===t.id,label:"Step #".concat(a+1)})})))}}]),a}(n.Component)),Ut=a(111),Bt=a.n(Ut),Ht=function(e,t){return function(a,n){var r=be(n()).id,i=Object(u.a)(Object(u.a)({},yt(n())[r]),{},Object(d.a)({},e,t));a({type:J.CHANGE_INSTANCE_PROPERTY,payload:{id:r,instanceProps:i}})}},Yt={id:"",entryId:"",sourceAction:null,props:a(68)},Mt=function(e){return function(t,a){var n=be(a());ge()(n,"id")!==e.id&&(t(function(e){return function(t,a){var n=yt(a())[e.id]||{};t({type:J.SET_INSTANCE_PROPERTY,payload:{props:Se()(e,n),id:e.id}})}}(e)),t({type:Y.SET_SELECTED_INSTANCE,payload:e}))}},Gt={setSelectedInstance:Mt},zt=Object(l.b)((function(e){return{list:me(e),selectedInstance:be(e)}}),Gt)(Dt),Wt=(a(246),function(e){return r.a.createElement("div",{className:"instance-button-wrapper"},r.a.createElement("button",{onClick:e.addInstance},"add"),e.selectedInstance&&r.a.createElement("button",{onClick:e.removeInstance},"remove"))}),Kt={addInstance:function(){return function(e){var t=Object(u.a)(Object(u.a)({},Yt),{},{id:Ye()});e({type:Y.ADD_INSTANCE,payload:t}),e(Mt(t))}},removeInstance:function(){return function(e,t){var a=be(t());e(function(e){return{type:J.CLEAR_INSTANCE_PROPERTY,payload:e}}(a)),e({type:Y.CLEAR_SELECTED_INSTANCE}),e({type:Y.REMOVE_INSTANCE,payload:a})}}},Jt=Object(l.b)((function(e){return{selectedInstance:be(e)}}),Kt)(Wt),Qt=a(112),Xt=a.n(Qt),$t=(a(248),function(e){Object(oe.a)(a,e);var t=Object(le.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).handleInstanceEntryIdChange=function(t){(0,e.props.changeInsnanceProperty)("entryId",t)},e.handleInstanceSourceActionChange=function(t){var a=e.props,n=a.changeInsnanceProperty,r=a.instanceProps,i=ge()(r,"props",[]);n("sourceAction",Xt()(i,["name",t]))},e.renderSourceActionSelect=function(){var t=e.props.instanceProps,a=ge()(t,"props",[]);if(Ue()(a)){var n=a.map((function(e){return ge()(e,"name","name isn't provided")}));return r.a.createElement("div",{className:"property"},r.a.createElement("span",{className:"property-label"},"Source action"),r.a.createElement(Be,{value:ge()(t,"sourceAction.name",""),onChange:e.handleInstanceSourceActionChange,required:!0,options:Object(v.a)(n)}))}return null},e.renderSourceActionProps=function(){var t=e.props,a=t.instanceProps,n=t.changeInstanceSourceActionProps;return ge()(a,"sourceAction.props",[]).map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(Ze,Object.assign({onChange:n},e)))}))},e}return Object(ie.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.props.instanceProps;if(!ge()(e,"sourceAction")){var t=ge()(e,"props",[]);At()(t)||this.handleInstanceSourceActionChange(ge()(t,"[0].name",""))}}},{key:"render",value:function(){var e=this.props.instanceProps;return At()(ge()(e,"props",[]))?null:r.a.createElement("div",{className:"instance-properties"},r.a.createElement("div",{className:"property"},r.a.createElement("span",{className:"property-label"},"Entry Id"),r.a.createElement(Pe,{value:ge()(e,"entryId",""),onChange:this.handleInstanceEntryIdChange,required:!0,type:"string"})),this.renderSourceActionSelect(),this.renderSourceActionProps())}}]),a}(n.Component)),Zt={changeInsnanceProperty:Ht,changeInstanceSourceActionProps:function(e,t){return function(a,n){var r=Tt(n()),i=Object(u.a)(Object(u.a)({},r),{},{props:Bt()(r.props,(function(a){return a.id===e?Object(u.a)(Object(u.a)({},a),{},{value:t}):a}))});a(Ht("sourceAction",i))}}},ea=Object(l.b)((function(e){return{instanceProps:vt(e)}}),Zt)($t),ta=(a(249),function(){return r.a.createElement("div",{className:"instances"},r.a.createElement("div",null,r.a.createElement("span",{className:"section-label"},"Transformation steps"),r.a.createElement(Jt,null),r.a.createElement(zt,null)),r.a.createElement("div",null,r.a.createElement(ea,null)))});var aa=function(){return r.a.createElement(l.a,{store:ne},r.a.createElement("div",{className:"main"},r.a.createElement(Vt,null),r.a.createElement("div",{className:"feature-container"},r.a.createElement(ta,null),r.a.createElement(dt,null),r.a.createElement(Pt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(aa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e){e.exports=JSON.parse('[{"id":1,"name":"vidsec","label":"VidSec","alias":"vsec","description":"Picking a frame from a video by second","props":[{"id":1,"name":"second","label":"Second","description":"The time to snap a frame from the video","alias":["s","sec"],"type":"float","required":false,"defaultValue":""},{"id":2,"name":"height","label":"Height","description":"Requested height in pixels","alias":"h","type":"int","required":false,"defaultValue":""},{"id":3,"name":"width","label":"Width","description":"Requested width in pixels","alias":"w","type":"int","required":false,"defaultValue":0}]},{"id":2,"name":"vidSlice","label":"Vid Slice","alias":"vslice","description":"Picking a frame by dividing the video into slices and then pick the slice","props":[{"id":1,"name":"numberofslices","label":"Number Of Slices","description":"Number of slices to split the video","alias":"nos","type":"int","required":true,"defaultValue":""},{"id":2,"name":"sliceNumber","label":"Slice Number","description":"Number of slice out of slices","alias":"sn","type":"int","required":true,"defaultValue":""},{"id":3,"name":"height","label":"Height","description":"Requested height in pixels","alias":"h","type":"int","required":false,"defaultValue":""},{"id":4,"name":"width","label":"Width","description":"Requested width in pixels","alias":"w","type":"int","required":false,"defaultValue":""},{"id":5,"name":"startSec","label":"Start Sec","description":"The second (or part of second) to begin extracting the slices stripe from (e.g. to avoid black frame in videos that begin with fade to black, set start_sec to the second that is after the black transition).","alias":"ss","type":"float","required":false,"defaultValue":0},{"id":6,"name":"endSec","label":"End Sec","description":"The second (or part of second) to stop extracting slices at (e.g. to create a stripe animation that is smooth but only contains few frames, use this parameter to only extract a short segment of your video instead of extracting slices across the entire video","alias":"es","type":"float","required":false,"defaultValue":""}]},{"id":3,"name":"vidStrip","label":"VidStrip","alias":"vstrip","description":"Splitting the video into slices and glue them into one image","props":[{"id":1,"name":"numberofslices","label":"Number Of Slices","description":"the number of slices to split the video","alias":"nos","type":"int","required":true,"defaultValue":""},{"id":2,"name":"height","label":"Height","description":"Requested height in pixels","alias":"h","type":"int","required":false,"defaultValue":""},{"id":3,"name":"width","label":"Width","description":"Requested width in pixels","alias":"w","type":"int","required":false,"defaultValue":""},{"id":4,"name":"startSec","label":"Start Sec","description":"The second (or part of second) to begin extracting the slices stripe from (e.g. to avoid black frame in videos that begin with fade to black, set start_sec to the second that is after the black transition).","alias":"ss","type":"float","required":false,"defaultValue":0},{"id":5,"name":"endSec","label":"End Sec","description":"The second (or part of second) to stop extracting slices at (e.g. to create a stripe animation that is smooth but only contains few frames, use this parameter to only extract a short segment of your video instead of extracting slices across the entire video","alias":"es","type":"float","required":false,"defaultValue":""}]}]')}},[[250,1,2]]]);
//# sourceMappingURL=main.48ca28e4.chunk.js.map