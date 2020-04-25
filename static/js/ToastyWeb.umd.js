(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.ToastyWeb=b())})(this,function(){"use strict";/**
     * Implementation of queue collection
     */var a=/** @class */function(){function a(){this.elements=[]}return a.prototype.enqueue=function(a){this.elements.push(a)},a.prototype.dequeue=function(){var a=this.elements.splice(0,1);return a[0]},a.prototype.peek=function(){return this.elements[0]},a.prototype.size=function(){return this.elements.length},a}(),b=/** @class */function(){function a(){}/**
         * Create an error Toast with custom text
         * @param {string} text The text to show on the toast
         * @param {boolean} [showIcon=true] False if don't want to show the icon
         * @@returns {Toast} Instance of toast
         */return a.error=function(b,d){void 0===d&&(d=!0);var e=new c(a.customClass,a.customTimeOut).setText(b).setBackgroundColor(a.ERRO_COLOR).setForeColor(a.WHIT_COLOR);return d&&e.setIcon("close"),e},a.success=function(b,d){void 0===d&&(d=!0);var e=new c(a.customClass,a.customTimeOut).setText(b).setBackgroundColor(a.SUCC_COLOR).setForeColor(a.WHIT_COLOR);return d&&e.setIcon("check"),e},a.info=function(b,d){void 0===d&&(d=!0);var e=new c(a.customClass,a.customTimeOut).setText(b).setBackgroundColor(a.INFO_COLOR).setForeColor(a.WHIT_COLOR);return d&&e.setIcon("info_outline"),e},a.warning=function(b,d){void 0===d&&(d=!0);var e=new c(a.customClass,a.customTimeOut).setText(b).setBackgroundColor(a.WARN_COLOR).setForeColor(a.WHIT_COLOR);return d&&e.setIcon("warning"),e},a.normal=function(b,d){void 0===d&&(d="");var e=new c(a.customClass,a.customTimeOut).setText(b).setBackgroundColor(a.NORM_COLOR).setForeColor(a.WHIT_COLOR);return""!==d&&e.setIcon(d),e},a.custom=function(b,d,e,f){void 0===d&&(d=a.WHIT_COLOR),void 0===e&&(e=a.NORM_COLOR),void 0===f&&(f="");var g=new c(a.customClass,a.customTimeOut).setText(b).setBackgroundColor(e).setForeColor(d);return""!==f&&g.setIcon(f),g},a.ERRO_COLOR="#D50000",a.INFO_COLOR="#3F51B5",a.SUCC_COLOR="#388E3C",a.WARN_COLOR="#FFA900",a.NORM_COLOR="#646464",a.WHIT_COLOR="#FFFFFF",a.customClass="",a.customTimeOut=2e3,a}(),c=/** @class */function(){/**
         * @param {string} customClass Custom class for toasts
         * @param {number} customTimeOut Custom timeOut for showing toasts
         */function b(a,b){this.backgroundColor="",this.foreColor="",this.text="",this.icon="",this.customClass=a,this.customTimeOut=b}/**
         * Method to render toasts in the Docuement
         * @param {(id: string) => boolean} [showCallback] Callback that will be called when the toast shows
         * @param {(id: string) => boolean} [hideCallback] Callback that will be called when the toast hides
         */return b.prototype.show=function(a,c){var d=this.createToast();a||(a=function(){return!0}),c||(c=function(){return!0}),b.toastQueue.enqueue({toast:d,showCallback:a,hideCallback:c}),2>b.toastQueue.size()&&this.showToast(b.toastQueue.peek())},b.prototype.setBackgroundColor=function(a){return this.isValidColor(a)&&(this.backgroundColor=a),this},b.prototype.setForeColor=function(a){return this.isValidColor(a)&&(this.foreColor=a),this},b.prototype.setText=function(a){return this.text=a,this},b.prototype.setIcon=function(a){return this.icon=a,this},b.prototype.createToast=function(){var a=document.createElement("div");a.classList.add("toasty-web"),this.customClass&&a.classList.add(this.customClass),a.id=btoa(new Date().getTime().toString());var b,c,d;return b=document.createElement("div"),b.classList.add("toasty-web-container"),b.style.backgroundColor=this.backgroundColor,b.style.color=this.foreColor,c=document.createElement("div"),c.classList.add("toasty-icon-container"),c.classList.add("material-icons"),""!==this.icon&&(c.textContent=this.icon),b.appendChild(c),d=document.createElement("div"),d.classList.add("toasty-text-container"),d.innerHTML=this.text,b.appendChild(d),a.appendChild(b),a},b.prototype.showToast=function(a){var c=this;if(a){//Append toast to the document
var d=document.querySelector("body");null===d||(//This prevents CSS transition bugs
d.appendChild(a.toast),setTimeout(function(){a.toast.classList.add("show"),a.showCallback&&a.showCallback(a.toast.id)},20),setTimeout(function(){a.toast.classList.remove("show"),a.toast.addEventListener("transitionend",function(b){if("bottom"===b.propertyName&&a.hideCallback&&!1!==a.hideCallback(a.toast.id)){var c=a.toast.parentNode;c&&c.removeChild(a.toast)}}),b.toastQueue.dequeue(),c.showToast(b.toastQueue.peek())},this.customTimeOut))}},b.prototype.isValidColor=function(a){return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},b.toastQueue=new a,b}();/**
     * Main container for Toasty interaction
     */return b});
