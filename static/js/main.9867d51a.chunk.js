(this["webpackJsonpreact-perspective-cropper-example"]=this["webpackJsonpreact-perspective-cropper-example"]||[]).push([[0],{142:function(e,t,n){e.exports=n(275)},143:function(e,t,n){},155:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t);n(143);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=n(39),u=n.n(c),l=n(47),s=n(43),p=n(281),h=n(54),m=n(280),b=n(284),d=n(285),f=n(91),g=n(140),v=n(35),w=n(87),O=n(6),E=n.n(O),y=n(118),j=n.n(y),x=function(e){return e instanceof File?new Promise((function(t,n){var a=new FileReader;a.onload=function(e){t(a.result)},a.onerror=function(e){n(e)},a.readAsDataURL(e)})):"string"===typeof e?Promise.resolve(e):void 0};function C(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1];return[n,Object(a.useCallback)((function(e){r(e)}),[])]}var R=function(e){var t,n,o=e.cropPoints,i=e.pointArea,c=e.defaultPosition,u=e.pointSize,l=void 0===u?20:u,s=e.pointColor,p=void 0===s?"#3cabe2":s,h=e.onStop,m=e.onDrag,b=Object(a.useCallback)((function(e,t){m(Object(v.a)(Object(v.a)({},t),{},{x:t.x+l/2,y:t.y+l/2}),i)}),[m]),d=Object(a.useCallback)((function(e,t){h(Object(v.a)(Object(v.a)({},t),{},{x:t.x+l/2,y:t.y+l/2}),i,o)}),[m,o]);return r.a.createElement(j.a,{bounds:"parent",defaultPosition:c,position:{x:o[i].x-l/2,y:o[i].y-l/2},onDrag:b,onStop:d},r.a.createElement("div",{style:(t=l,n=p,{width:t,height:t,backgroundColor:n,borderRadius:"100%",position:"absolute",zIndex:1001})}))};R.propTypes={cropPoints:E.a.shape({"left-top":E.a.shape({x:E.a.number,y:E.a.number}).isRequired,"right-top":E.a.shape({x:E.a.number,y:E.a.number}).isRequired,"right-bottom":E.a.shape({x:E.a.number,y:E.a.number}).isRequired,"left-bottom":E.a.shape({x:E.a.number,y:E.a.number}).isRequired}),pointArea:E.a.oneOf(["left-top","right-top","right-bottom","left-bottom"]),defaultPosition:E.a.shape({x:E.a.number,y:E.a.number}),pointSize:E.a.number,pointColor:E.a.string,onStop:E.a.func,onDrag:E.a.func};var S=function(e){var t=e.previewDims,n=Object(g.a)(e,["previewDims"]);return r.a.createElement(a.Fragment,null,r.a.createElement(R,Object.assign({pointArea:"left-top",defaultPosition:{x:0,y:0}},n)),r.a.createElement(R,Object.assign({pointArea:"right-top",defaultPosition:{x:t.width,y:0}},n)),r.a.createElement(R,Object.assign({pointArea:"right-bottom",defaultPosition:{x:0,y:t.height}},n)),r.a.createElement(R,Object.assign({pointArea:"left-bottom",defaultPosition:{x:t.width,y:t.height}},n)))};S.propTypes={previewDims:E.a.shape({ratio:E.a.number,width:E.a.number,height:E.a.number})};var k=function(e,t,n,a,r){var o,i,c=e.imread(t),u=n["right-bottom"],l=n["left-bottom"],s=n["right-top"],p=n["left-top"],h=[p,s,u,l].map((function(e){return[e.x/a,e.y/a]})),m=Math.max(u.x-l.x,s.x-p.x)/a,b=Math.max(l.y-p.y,u.y-s.y)/a,d=[[0,0],[m-1,0],[m-1,b-1],[0,b-1]],g=e.matFromArray(4,1,e.CV_32FC2,(o=[]).concat.apply(o,Object(f.a)(h))),v=e.matFromArray(4,1,e.CV_32FC2,(i=[]).concat.apply(i,d)),w=e.getPerspectiveTransform(g,v),O=new e.Size(m,b);e.warpPerspective(c,c,w,O,e.INTER_LINEAR,e.BORDER_CONSTANT,new e.Scalar),e.imshow(t,c),c.delete(),g.delete(),v.delete(),w.delete(),r()},A=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a){var r,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(v.a)({blur:!1,th:!0,thMode:t.ADAPTIVE_THRESH_MEAN_C,thMeanCorrection:15,thBlockSize:25,thMax:255,grayScale:!0},a),o=t.imread(n),r.grayScale&&t.cvtColor(o,o,t.COLOR_RGBA2GRAY,0),r.blur&&(i=new t.Size(5,5),t.GaussianBlur(o,o,i,0,0,t.BORDER_DEFAULT)),r.th&&(r.grayScale?t.adaptiveThreshold(o,o,r.thMax,r.thMode,t.THRESH_BINARY,r.thBlockSize,r.thMeanCorrection):(o.convertTo(o,-1,1,60),t.threshold(o,o,170,255,t.THRESH_BINARY))),t.imshow(n,o);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),P=function(e){var t=e.cropPoints,n=e.previewDims,o=e.lineWidth,i=void 0===o?3:o,c=e.lineColor,u=void 0===c?"#3cabe2":c,l=C(),p=Object(s.a)(l,2),h=p[0],m=p[1],b=Object(a.useCallback)((function(){h.getContext("2d").clearRect(0,0,n.width,n.height)}),[h,n]),d=Object(a.useCallback)((function(){return["left-top","right-top","right-bottom","left-bottom"].reduce((function(e,n){return[].concat(Object(f.a)(e),[t[n]])}),[])}),[t]),g=Object(a.useCallback)((function(e){var t=h.getContext("2d");t.lineWidth=i,t.strokeStyle=u,t.beginPath(),e.forEach((function(n,a){if(0===a&&t.moveTo(n.x,n.y),a!==e.length-1){var r=e[a+1];t.lineTo(r.x,r.y)}else t.closePath()})),t.stroke()}),[h]);return Object(a.useEffect)((function(){if(t&&h){b();var e=d();g(e)}}),[t,h]),r.a.createElement("canvas",{ref:m,style:{position:"absolute",zIndex:5,width:n.width,height:n.height},width:n.width,height:n.height})};P.propTypes={previewDims:E.a.shape({ratio:E.a.number,width:E.a.number,height:E.a.number}),cropPoints:E.a.shape({"left-top":E.a.shape({x:E.a.number,y:E.a.number}).isRequired,"right-top":E.a.shape({x:E.a.number,y:E.a.number}).isRequired,"right-bottom":E.a.shape({x:E.a.number,y:E.a.number}).isRequired,"left-bottom":E.a.shape({x:E.a.number,y:E.a.number}).isRequired}),lineColor:E.a.string,lineWidth:E.a.number};var T,D=function(e){return{width:e.width,height:e.height}},_=function(e){var t=e.image,n=e.onDragStop,o=e.onChange,i=e.cropperRef,c=e.pointSize,p=e.lineWidth,h=e.pointColor,m=e.lineColor,b=Object(w.b)(),d=b.loaded,f=b.cv,g=Object(a.useRef)(),O=C(),E=Object(s.a)(O,2),y=E[0],j=E[1],R=Object(a.useState)(),_=Object(s.a)(R,2),I=_[0],M=_[1],z=Object(a.useState)(),B=Object(s.a)(z,2),N=B[0],H=B[1],q=Object(a.useState)(!1),F=Object(s.a)(q,2),L=F[0],G=F[1],W=Object(a.useState)("crop"),U=Object(s.a)(W,2),V=U[0],Y=U[1];Object(a.useImperativeHandle)(i,(function(){return{backToCrop:function(){Y("crop")},done:function(){var e=Object(l.a)(u.a.mark((function e(){var n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",new Promise((function(e){G(!0),k(f,g.current,N,T,J),A(f,g.current,n.filterCvParams),n.preview&&Y("preview"),g.current.toBlob((function(t){e(t),G(!1)}),t.type)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}})),Object(a.useEffect)((function(){"preview"===V&&K()}),[V]);var J=function(){var e=function(e,t){var n=e/t,a=window.innerWidth-40,r=window.innerHeight-240,o={width:a,height:Math.round(a/n),ratio:n};return o.height>r&&(o.height=r,o.width=Math.round(r*n)),o}(g.current.width,g.current.height);M(e),y.width=e.width,y.height=e.height,T=e.width/g.current.width},X=function(e){return new Promise((function(t,n){var a=document.createElement("img");a.onload=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.current=document.createElement("canvas"),g.current.width=a.width,g.current.height=a.height,g.current.getContext("2d").drawImage(a,0,0),J(),t();case 7:case"end":return e.stop()}}),e)}))),a.src=e}))},K=function(e){var t=e||f.imread(g.current),n=new f.Mat,a=new f.Size(0,0);f.resize(t,n,a,T,T,f.INTER_AREA),f.imshow(y,n),t.delete(),n.delete()},Q=function(){var e=f.imread(g.current),t=new f.Size(5,5);f.cvtColor(e,e,f.COLOR_RGBA2GRAY,0),f.GaussianBlur(e,e,t,0,0,f.BORDER_DEFAULT),f.Canny(e,e,75,200),f.threshold(e,e,120,200,f.THRESH_BINARY);var n=new f.MatVector,a=new f.Mat;f.findContours(e,n,a,f.RETR_CCOMP,f.CHAIN_APPROX_SIMPLE);var r=f.boundingRect(e);e.delete(),a.delete(),n.delete(),Object.keys(r).forEach((function(e){r[e]=r[e]*T}));var o={"left-top":{x:r.x,y:r.y},"right-top":{x:r.x+r.width,y:r.y},"right-bottom":{x:r.x+r.width,y:r.y+r.height},"left-bottom":{x:r.x,y:r.y+r.height}};H(o)};Object(a.useEffect)((function(){o&&o(Object(v.a)(Object(v.a)({},N),{},{loading:L}))}),[N,L]),Object(a.useEffect)((function(){t&&y&&d&&"crop"===V?function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.next=5,X(n);case 5:K(),Q(),G(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():G(!0)}),[t,y,d,V]);var Z=Object(a.useCallback)((function(e,t){var n=e.x,a=e.y;H((function(e){return Object(v.a)(Object(v.a)({},e),{},{[t]:{x:n,y:a}})}))}),[]),$=Object(a.useCallback)((function(e,t,a){var r=e.x,o=e.y;H((function(e){return Object(v.a)(Object(v.a)({},e),{},{[t]:{x:r,y:o}})})),n&&n(Object(v.a)(Object(v.a)({},a),{},{[t]:{x:r,y:o}}))}),[]);return r.a.createElement("div",{style:Object(v.a)({position:"relative"},I&&D(I))},I&&"crop"===V&&N&&r.a.createElement(S,{pointSize:c,pointColor:h,cropPoints:N,previewDims:I,onDrag:Z,onStop:$}),I&&"crop"===V&&N&&r.a.createElement(P,{previewDims:I,cropPoints:N,lineWidth:p,lineColor:m}),r.a.createElement("canvas",{style:{zIndex:5,pointerEvents:"none"},ref:j}))};_.propTypes={image:E.a.object.isRequired,onDragStop:E.a.func,onChange:E.a.func,cropperRef:E.a.shape({current:E.a.shape({done:E.a.func.isRequired,backToCrop:E.a.func.isRequired})}),pointSize:E.a.number,lineWidth:E.a.number,pointColor:E.a.string,lineColor:E.a.string};var I=r.a.forwardRef((function(e,t){return e.image?r.a.createElement(w.a,{openCvPath:"/opencv/opencv.js"},r.a.createElement(_,Object.assign({},e,{cropperRef:t}))):null})),M=(n(155),n(282)),z=n(283),B=n(128),N=n.n(B),H=function(){return r.a.createElement("div",{className:"site-page-header"},r.a.createElement(M.a,{ghost:!1,title:"react-perspective-cropper"},r.a.createElement(z.b,{size:"small",column:2},r.a.createElement(z.b.Item,{label:"Package"},r.a.createElement("a",{href:"https://www.npmjs.com/package/react-perspective-cropper"},r.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/react-perspective-cropper.svg"})),r.a.createElement("a",{href:"https://standardjs.com"},r.a.createElement("img",{alt:"standardjs",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}))),r.a.createElement(z.b.Item,{label:"Description"},r.a.createElement(N.a,null,"React component performing border detection, perspective correction and simple image filters over a provided image \ud83d\udcf2 \ud83d\udcf8")),r.a.createElement(z.b.Item,{label:"Created by"},"Giacomo Cerquone from",r.a.createElement("span",{"aria-label":"italy flag",role:"img",style:{margin:"0 10px"}},"\ud83c\uddee\ud83c\uddf9"),"with"," ",r.a.createElement("span",{"aria-label":"heart",role:"img",style:{margin:"0 10px"}},"\u2764\ufe0f")))))},q=p.a.Dragger,F=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(),c=Object(s.a)(i,2),p=c[0],f=c[1],g=Object(a.useRef)(),v=Object(a.useCallback)((function(e){return o(e)}),[]),w=Object(a.useCallback)((function(e){return o(e)}),[]),O=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CropState",n),e.prev=1,e.next=4,g.current.done({preview:!0,filterCvParams:{thMeanCorrection:13,thMode:window.cv.ADAPTIVE_THRESH_GAUSSIAN_C}});case 4:t=e.sent,console.log("Cropped and filtered image",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),E={name:"file",multiple:!1,onChange:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fileList&&t.fileList.length>0&&f(t.fileList[0].originFileObj);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};return r.a.createElement("div",{className:"root-container"},r.a.createElement(H,null),r.a.createElement("div",{className:"content-container"},n&&r.a.createElement("div",{className:"buttons-container"},r.a.createElement(h.a,{onClick:O,icon:r.a.createElement(b.a,null)},"Done"),r.a.createElement(h.a,{onClick:function(){g.current.backToCrop()}},"Back"),r.a.createElement(h.a,{onClick:function(){f(void 0),o()}},"Reset")),r.a.createElement(I,{ref:g,image:p,onChange:w,onDragStop:v}),(null===n||void 0===n?void 0:n.loading)&&r.a.createElement(m.a,null),!p&&r.a.createElement(q,E,r.a.createElement("p",null,r.a.createElement(d.a,null)),r.a.createElement("p",null,"Upload"))))};i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.9867d51a.chunk.js.map