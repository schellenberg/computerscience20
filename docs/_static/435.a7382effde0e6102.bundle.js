"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[435],{13435:(e,t,i)=>{i.r(t),i.d(t,{khanexList:()=>a,default:()=>o});var n=i(2568),a={};class o extends n.Z{constructor(e){super(e);var t=e.orig;this.origElem=t,this.divid=t.id,this.resultsViewer=$(t).data("results"),this.getIFrameAndQuizname(),this.renderKhanex(),this.caption="Khanex",this.addCaption("runestone")}getIFrameAndQuizname(){var e=$(this.origElem).html(),t=e.search("<iframe"),i=e.search("</iframe>");this.iframe=e.slice(t,i+8),t=e.search("khanex/qs/"),i=e.search(".html"),this.quizname=e.slice(t+10,i)}renderKhanex(){this.containerDiv=document.createElement("div"),this.containerDiv.id=this.divid,$(this.containerDiv).html(this.iframe),$(this.origElem).replaceWith(this.containerDiv)}submitKhanex(e){e.complete;var t=1==e.complete?"T":"F",i={event:"khanex",act:"answer:"+("T"==t?"correct":"no"),answer:e,correct:t,div_id:this.divid};this.logBookEvent(i),localStorage.setItem(this.divid,"true")}}$(document).on("runestone:login-complete",(function(){$("[data-component=khanex").each((function(e){try{var t=new o({orig:this});a[this.id]=t,function(e,t){void 0===window.component_factory&&(window.component_factory={});var i="khanex_"+t;window.component_factory[i]=function(t){e.submitKhanex(t)}}(t,t.quizname)}catch(e){console.log(`Error rendering Khanex Exercise ${this.id}\n                          Details: ${e}`),console.log(e.stack)}}))}))}}]);
//# sourceMappingURL=435.a7382effde0e6102.bundle.js.map