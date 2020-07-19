!function(s){"use strict";function n(t){s(t).on("click",e,this.close)}var e='[data-dismiss="sppb-alert"]';n.VERSION="3.2.0",n.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i=i||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"");var n=s(i);function o(){n.detach().trigger("closed.sppb.alert").remove()}t&&t.preventDefault(),n.length||(n=e.hasClass("sppb-alert")?e:e.parent()),n.trigger(t=s.Event("close.sppb.alert")),t.isDefaultPrevented()||(n.removeClass("in"),s.support.transition&&n.hasClass("sppb-fade")?n.one("bsTransitionEnd",o).emulateTransitionEnd(150):o())};var t=s.fn.spbalert;s.fn.spbalert=function(i){return this.each(function(){var t=s(this),e=t.data("sppb.alert");e||t.data("sppb.alert",e=new n(this)),"string"==typeof i&&e[i].call(t)})},s.fn.spbalert.Constructor=n,s.fn.spbalert.noConflict=function(){return s.fn.spbalert=t,this},s(document).on("click.sppb.alert.data-api",e,n.prototype.close)}(jQuery),function(d){"use strict";function s(t,e){this.$element=d(t).on("keydown.sppb.carousel",d.proxy(this.keydown,this)),this.$indicators=this.$element.find(".sppb-carousel-indicators"),this.options=e,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.sppb.carousel",d.proxy(this.pause,this)).on("mouseleave.sppb.carousel",d.proxy(this.cycle,this))}function r(o){return this.each(function(){var t=d(this),e=t.data("sppb.carousel"),i=d.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o),n="string"==typeof o?o:i.slide;e||t.data("sppb.carousel",e=new s(this,i)),"number"==typeof o?e.to(o):n?e[n]():i.interval&&e.pause().cycle()})}s.VERSION="3.2.0",s.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},s.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},s.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(d.proxy(this.next,this),this.options.interval)),this},s.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".sppb-item"),this.$items.index(t||this.$active)},s.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".sppb-item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.sppb.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",d(this.$items[t]))},s.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&d.support.transition&&(this.$element.trigger(d.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},s.prototype.next=function(){if(!this.sliding)return this.slide("next")},s.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},s.prototype.slide=function(t,e){var i=this.$element.find(".sppb-item.active"),n=e||i[t](),o=this.interval,s="next"==t?"left":"right",r="next"==t?"first":"last",a=this;if(!n.length){if(!this.options.wrap)return;n=this.$element.find(".sppb-item")[r]()}if(n.hasClass("active"))return this.sliding=!1;var p=n[0],l=d.Event("slide.sppb.carousel",{relatedTarget:p,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=d(this.$indicators.children()[this.getItemIndex(n)]);h&&h.addClass("active")}var c=d.Event("slid.sppb.carousel",{relatedTarget:p,direction:s});return d.support.transition&&this.$element.hasClass("sppb-slide")?(n.addClass(t),n[0].offsetWidth,i.addClass(s),n.addClass(s),i.one("bsTransitionEnd",function(){n.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(c)},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))):(i.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger(c)),o&&this.cycle(),this}};var t=d.fn.sppbcarousel;d.fn.sppbcarousel=r,d.fn.sppbcarousel.Constructor=s,d.fn.sppbcarousel.noConflict=function(){return d.fn.sppbcarousel=t,this},d(document).ready(function(){d(".sppb-carousel").each(function(t){var e=d(this).find(".sppb-item"),i="sppb-carousel"+(t+1),n="";d(this).attr("id",i);for(var o=0;o<e.length;o++)n+=0==o?'<li data-sppb-target="#'+i+'" class="active" data-sppb-slide-to="0"></li>':'\n<li data-sppb-target="#'+i+'" data-sppb-slide-to="'+o+'"></li>';d(this).find(">.sppb-carousel-indicators").html(n),d(this).find(".sppb-carousel-control").attr("href","#"+i),d(this).find(".sppb-item").first().addClass("active")})}),d(document).on("click.sppb.carousel.data-api","[data-slide], [data-sppb-slide-to]",function(t){var e,i=d(this),n=d(i.attr("data-sppb-target")||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""));if(n.hasClass("sppb-carousel")){var o=d.extend({},n.data(),i.data()),s=i.attr("data-sppb-slide-to");s&&(o.interval=!1),r.call(n,o),s&&n.data("sppb.carousel").to(s),t.preventDefault()}}),d(window).on("load",function(){d('[data-sppb-ride="sppb-carousel"]').each(function(){var t=d(this);r.call(t,t.data())})})}(jQuery),function(s){"use strict";s(document).on("click",".sppb-panel-heading",function(t){t.preventDefault();var e=s(this),i=e.closest(".sppb-panel-group").find(">div"),n=i.find(".sppb-panel-heading"),o=i.find(".sppb-panel-collapse");s(this).hasClass("active")?(s(this).removeClass("active"),e.next().slideUp()):(n.removeClass("active"),o.slideUp(),s(this).addClass("active").next().slideDown(function(){e[0].getBoundingClientRect().top<0&&s("html,body").animate({scrollTop:e.offset().top},400)}))})}(jQuery),function(r){"use strict";function n(t){this.element=r(t)}function e(i){return this.each(function(){var t=r(this),e=t.data("sppb.tab");e||t.data("sppb.tab",e=new n(this)),"string"==typeof i&&e[i]()})}n.VERSION="3.2.0",n.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i=i||(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,""),!t.parent("li").hasClass("active")){var n=e.find(".active:last a")[0],o=r.Event("show.sppb.tab",{relatedTarget:n});if(t.trigger(o),!o.isDefaultPrevented()){var s=r(i);this.activate(t.closest("li"),e),this.activate(s,s.parent(),function(){t.trigger({type:"shown.sppb.tab",relatedTarget:n})})}}},n.prototype.activate=function(t,e,i){var n=e.find("> .active"),o=i&&r.support.transition&&n.hasClass("sppb-fade");function s(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),o?(t[0].offsetWidth,t.addClass("in")):t.removeClass("sppb-fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),i&&i()}o?n.one("bsTransitionEnd",s).emulateTransitionEnd(150):s(),n.removeClass("in")};var t=r.fn.sppbtab;r.fn.sppbtab=e,r.fn.sppbtab.Constructor=n,r.fn.sppbtab.noConflict=function(){return r.fn.sppbtab=t,this},r(document).ready(function(){r(".sppb-tab").each(function(t){var e="sppb-tab"+(t+1);r(this).find(">.sppb-nav").children().each(function(t){r(this).find(">a").attr("href","#"+e+"-"+(t+1))}),r(this).find(">.sppb-tab-content").children().each(function(t){r(this).attr("id",e+"-"+(t+1))})})}),r(document).on("click.sppb.tab.data-api",'[data-toggle="sppb-tab"], [data-toggle="sppb-pill"]',function(t){t.preventDefault(),e.call(r(this),"show")})}(jQuery),function(b){"use strict";function o(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("sppbtooltip",t,e)}o.VERSION="3.2.0",o.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="sppb-tooltip" role="tooltip"><div class="sppb-tooltip-arrow"></div><div class="sppb-tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},o.prototype.init=function(t,e,i){this.enabled=!0,this.type=t,this.$element=b(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&b(this.options.viewport.selector||this.options.viewport);for(var n=this.options.trigger.split(" "),o=n.length;o--;){var s=n[o];if("click"==s)this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this));else if("manual"!=s){var r="hover"==s?"mouseenter":"focusin",a="hover"==s?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,b.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,b.proxy(this.leave,this))}}this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.getOptions=function(t){return(t=b.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},o.prototype.getDelegateOptions=function(){var i={},n=this.getDefaults();return this._options&&b.each(this._options,function(t,e){n[t]!=e&&(i[t]=e)}),i},o.prototype.enter=function(t){var e=t instanceof this.constructor?t:b(t.currentTarget).data("sppb."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),b(t.currentTarget).data("sppb."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)},o.prototype.leave=function(t){var e=t instanceof this.constructor?t:b(t.currentTarget).data("sppb."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),b(t.currentTarget).data("sppb."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},o.prototype.show=function(){var t=b.Event("show.sppb."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=b.contains(document.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,n=this.tip(),o=this.getUID(this.type);this.setContent(),n.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&n.addClass("sppb-fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,r=/\s?auto?\s?/i,a=r.test(s);a&&(s=s.replace(r,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(s).data("sppb."+this.type,this),this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var p=this.getPosition(),l=n[0].offsetWidth,h=n[0].offsetHeight;if(a){var c=s,d=this.$element.parent(),u=this.getPosition(d);s="bottom"==s&&p.top+p.height+h-u.scroll>u.height?"top":"top"==s&&p.top-u.scroll-h<0?"bottom":"right"==s&&p.right+l>u.width?"left":"left"==s&&p.left-l<u.left?"right":s,n.removeClass(c).addClass(s)}var f=this.getCalculatedOffset(s,p,l,h);this.applyPlacement(f,s);var v=function(){i.$element.trigger("shown.sppb."+i.type),i.hoverState=null};b.support.transition&&this.$tip.hasClass("sppb-")?n.one("bsTransitionEnd",v).emulateTransitionEnd(150):v()}},o.prototype.applyPlacement=function(t,e){var i=this.tip(),n=i[0].offsetWidth,o=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),r=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(r)&&(r=0),t.top=t.top+s,t.left=t.left+r,b.offset.setOffset(i[0],b.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var a=i[0].offsetWidth,p=i[0].offsetHeight;"top"==e&&p!=o&&(t.top=t.top+o-p);var l=this.getViewportAdjustedDelta(e,t,a,p);l.left?t.left+=l.left:t.top+=l.top;var h=l.left?2*l.left-n+a:2*l.top-o+p,c=l.left?"left":"top",d=l.left?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(h,i[0][d],c)},o.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".sppb-tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("sppb-fade in top bottom left right")},o.prototype.hide=function(){var t=this,e=this.tip(),i=b.Event("hide.sppb."+this.type);function n(){"in"!=t.hoverState&&e.detach(),t.$element.trigger("hidden.sppb."+t.type)}if(this.$element.removeAttr("aria-describedby"),this.$element.trigger(i),!i.isDefaultPrevented())return e.removeClass("in"),b.support.transition&&this.$tip.hasClass("sppb-fade")?e.one("bsTransitionEnd",n).emulateTransitionEnd(150):n(),this.hoverState=null,this},o.prototype.fixTitle=function(){var t=this.$element;!t.attr("title")&&"string"==typeof t.attr("data-original-title")||t.attr("data-original-title",t.attr("title")||"").attr("title","")},o.prototype.hasContent=function(){return this.getTitle()},o.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName;return b.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():null,{scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop(),width:i?b(window).width():t.outerWidth(),height:i?b(window).height():t.outerHeight()},i?{top:0,left:0}:t.offset())},o.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},o.prototype.getViewportAdjustedDelta=function(t,e,i,n){var o={top:0,left:0};if(!this.$viewport)return o;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,p=e.top+s-r.scroll+n;a<r.top?o.top=r.top-a:p>r.top+r.height&&(o.top=r.top+r.height-p)}else{var l=e.left-s,h=e.left+s+i;l<r.left?o.left=r.left-l:h>r.width&&(o.left=r.left+r.width-h)}return o},o.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},o.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},o.prototype.tip=function(){return this.$tip=this.$tip||b(this.options.template)},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".sppb-tooltip-arrow")},o.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},o.prototype.enable=function(){this.enabled=!0},o.prototype.disable=function(){this.enabled=!1},o.prototype.toggleEnabled=function(){this.enabled=!this.enabled},o.prototype.toggle=function(t){var e=this;t&&((e=b(t.currentTarget).data("sppb."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),b(t.currentTarget).data("sppb."+this.type,e))),e.tip().hasClass("in")?e.leave(e):e.enter(e)},o.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("sppb."+this.type)};var t=b.fn.sppbtooltip;b.fn.sppbtooltip=function(n){return this.each(function(){var t=b(this),e=t.data("sppb.tooltip"),i="object"==typeof n&&n;!e&&"destroy"==n||(e||t.data("sppb.tooltip",e=new o(this,i)),"string"==typeof n&&e[n]())})},b.fn.sppbtooltip.Constructor=o,b.fn.sppbtooltip.noConflict=function(){return b.fn.sppbtooltip=t,this}}(jQuery),function(o){"use strict";function s(t,e){this.init("sppbpopover",t,e)}if(!o.fn.sppbtooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.2.0",s.DEFAULTS=o.extend({},o.fn.sppbtooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="sppb-popover" role="tooltip"><div class="arrow"></div><h3 class="sppb-popover-title"></h3><div class="sppb-popover-content"></div></div>'}),((s.prototype=o.extend({},o.fn.sppbtooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".sppb-popover-title")[this.options.html?"html":"text"](e),t.find(".sppb-popover-content").empty()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("sppb-fade top bottom left right in"),t.find(".sppb-popover-title").html()||t.find(".sppb-popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},s.prototype.tip=function(){return this.$tip||(this.$tip=o(this.options.template)),this.$tip};var t=o.fn.sppbpopover;o.fn.sppbpopover=function(n){return this.each(function(){var t=o(this),e=t.data("sppb.popover"),i="object"==typeof n&&n;!e&&"destroy"==n||(e||t.data("sppb.popover",e=new s(this,i)),"string"==typeof n&&e[n]())})},o.fn.sppbpopover.Constructor=s,o.fn.sppbpopover.noConflict=function(){return o.fn.sppbpopover=t,this}}(jQuery),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),"undefined"!=typeof jQuery&&"undefined"!=typeof MooTools&&function(i){i(document).ready(function(){i(".sppb-carousel").each(function(t,e){i(this)[t].slide=null})})}(jQuery),function(o,t,e,i){"use strict";var s="vide",n={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%"},r=/iPad|iPhone|iPod/i.test(i.userAgent),a=/Android/i.test(i.userAgent);o[s]={lookup:[]};function p(t,e,i){this.element=o(t),this._defaults=n,this._name=s,e=e.replace(/\.\w*$/,""),this.settings=o.extend({},n,i),this.path=e,this.init()}p.prototype.init=function(){var t=this;this.wrapper=o("<div>");var e=function(t){for(var e,i=(t=""+t).split(/\s+/),n="50%",o="50%",s=0,r=i.length;s<r;s++)"left"===(e=i[s])?n="0%":"right"===e?n="100%":"top"===e?o="0%":"bottom"===e?o="100%":"center"===e?0===s?n="50%":o="50%":0===s?n=e:o=e;return{x:n,y:o}}(this.settings.position);if(this.wrapper.css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":e.x+" "+e.y}),o(this.element).data("vide-image")&&this.wrapper.css("background-image","url("+o(this.element).data("vide-image")+")"),"static"===this.element.css("position")&&this.element.css("position","relative"),this.element.prepend(this.wrapper),!r&&!a){var i="";o(this.element).data("vide-mp4")&&(i+="<source src='"+o(this.element).data("vide-mp4")+"' type='video/mp4'>"),o(this.element).data("vide-ogv")&&(i+="<source src='"+o(this.element).data("vide-ogv")+"' type='video/ogg'>"),this.video=o("<video>"+i+"</video>"),this.video.css("visibility","hidden"),this.video.prop({autoplay:this.settings.autoplay,loop:this.settings.loop,volume:this.settings.volume,muted:this.settings.muted,playbackRate:this.settings.playbackRate}),this.wrapper.append(this.video),this.video.css({margin:"auto",position:"absolute","z-index":-1,top:e.y,left:e.x,"-webkit-transform":"translate(-"+e.x+", -"+e.y+")","-ms-transform":"translate(-"+e.x+", -"+e.y+")",transform:"translate(-"+e.x+", -"+e.y+")"}),this.video.bind("loadedmetadata."+s,function(){t.video.css("visibility","visible"),t.resize()}),o(this.element).bind("resize."+s,function(){t.resize()})}},p.prototype.getVideoObject=function(){return this.video?this.video[0]:null},p.prototype.resize=function(){if(this.video){var t=this.video[0].videoHeight,e=this.video[0].videoWidth,i=this.wrapper.height(),n=this.wrapper.width();i/t<n/e?this.video.css({width:n+2,height:"auto"}):this.video.css({width:"auto",height:i+2})}},p.prototype.destroy=function(){this.element.unbind(s),this.video&&this.video.unbind(s),delete o[s].lookup[this.index],this.element.removeData(s),this.wrapper.remove()},o.fn[s]=function(t,e){var i;return this.each(function(){(i=o.data(this,s))&&i.destroy(),(i=new p(this,t,e)).index=o[s].lookup.push(i)-1,o.data(this,s,i)}),this},o(e).ready(function(){o(t).bind("resize."+s,function(){for(var t,e=o[s].lookup.length,i=0;i<e;i++)(t=o[s].lookup[i])&&t.resize()}),o(e).find("[data-vide-bg]").each(function(t,e){var i=o(e),n=i.data(s+"-options");n=n?function(t){var e,i,n,o,s={};for(i=0,n=(e=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(",")).length;i<n;i++)e[i]=e[i].split(":"),("string"==typeof(o=(o=e[i][1])||void 0)||o instanceof String)&&(o="true"===o||"false"!==o&&o),("string"==typeof o||o instanceof String)&&(o=isNaN(o)?o:+o),s[e[i][0]]=o;return s}(n):{},i[s]("",n)})})}(window.jQuery,window,document,navigator),function(){function e(t,e){return function(){return t.apply(e,arguments)}}var n,t,i,r=[].indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1};function o(t){null==t&&(t={}),this.scrollCallback=e(this.scrollCallback,this),this.scrollHandler=e(this.scrollHandler,this),this.start=e(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new i}function s(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}function a(){this.keys=[],this.values=[]}function p(){}p.prototype.extend=function(t,e){var i,n;for(i in e)n=e[i],null==t[i]&&(t[i]=n);return t},p.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t=p,i=this.WeakMap||this.MozWeakMap||(a.prototype.get=function(t){var e,i,n,o;for(e=i=0,n=(o=this.keys).length;i<n;e=++i)if(o[e]===t)return this.values[e]},a.prototype.set=function(t,e){var i,n,o,s;for(i=n=0,o=(s=this.keys).length;n<o;i=++n)if(s[i]===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},i=a),n=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(s.notSupported=!0,s.prototype.observe=function(){},n=s),this.SPPBWOW=(o.prototype.defaults={boxClass:"sppb-wow",animateClass:"sppb-animated",offset:0,mobile:!0,live:!0},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var o,t,e,i,r;if(this.stopped=!1,this.boxes=function(){var t,e,i,n;for(n=[],t=0,e=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;t<e;t++)o=i[t],n.push(o);return n}.call(this),this.all=function(){var t,e,i,n;for(n=[],t=0,e=(i=this.boxes).length;t<e;t++)o=i[t],n.push(o);return n}.call(this),this.boxes.length,this.disabled())this.resetStyle();else{for(t=0,e=(i=this.boxes).length;t<e;t++)o=i[t],this.applyStyle(o,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new n((r=this,function(t){var o,s,e,i,n;for(n=[],e=0,i=t.length;e<i;e++)s=t[e],n.push(function(){var t,e,i,n;for(n=[],t=0,e=(i=s.addedNodes||[]).length;t<e;t++)o=i[t],n.push(this.doSync(o));return n}.call(r));return n})).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return n.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,i,n,o,s;if(!this.stopped){if(null==t&&(t=this.element),1!==t.nodeType)return;for(s=[],i=0,n=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;i<n;i++)e=o[i],r.call(this.all,e)<0?(this.applyStyle(e,!0),this.boxes.push(e),this.all.push(e),s.push(this.scrolled=!0)):s.push(void 0);return s}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},o.prototype.applyStyle=function(t,e){var i,n,o,s;return n=t.getAttribute("data-sppb-wow-duration"),i=t.getAttribute("data-sppb-wow-delay"),o=t.getAttribute("data-sppb-wow-iteration"),this.animate((s=this,function(){return s.customStyle(t,e,n,i,o)}))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,i,n,o;for(o=[],e=0,i=(n=this.boxes).length;e<i;e++)t=n[e],o.push(t.setAttribute("style","visibility: visible;"));return o},o.prototype.customStyle=function(t,e,i,n,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(o,t){var s,r,a,e;for(s in e=[],t)r=t[s],o[""+s]=r,e.push(function(){var t,e,i,n;for(n=[],t=0,e=(i=this.vendors).length;t<e;t++)a=i[t],n.push(o[""+a+s.charAt(0).toUpperCase()+s.substr(1)]=r);return n}.call(this));return e},o.prototype.vendorCSS=function(t,e){var i,n,o,s,r,a;for(i=(n=window.getComputedStyle(t)).getPropertyCSSValue(e),s=0,r=(a=this.vendors).length;s<r;s++)o=a[s],i=i||n.getPropertyCSSValue("-"+o+"-"+e);return i},o.prototype.animationName=function(e){var i;try{i=this.vendorCSS(e,"animation-name").cssText}catch(t){i=window.getComputedStyle(e).getPropertyValue("animation-name")}return"none"===i?"":i},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var o;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var t,e,i,n;for(n=[],t=0,e=(i=this.boxes).length;t<e;t++)(o=i[t])&&(this.isVisible(o)?this.show(o):n.push(o));return n}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,i,n,o,s;return i=t.getAttribute("data-sppb-wow-offset")||this.config.offset,o=(s=window.pageYOffset)+Math.min(this.element.clientHeight,innerHeight)-i,e=(n=this.offsetTop(t))+t.clientHeight,n<=o&&s<=e},o.prototype.util=function(){return null!=this._util?this._util:this._util=new t},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o)}.call(this),jQuery(function(t){(new SPPBWOW).init()}),function(c){var d,u,e,f={},v=document,b=window,m=v.documentElement,i=c.expando;function n(){var t,o=c(),e=0;if(c.each(f,function(t,e){var i=e.data.selector,n=e.$element;o=o.add(i?n.find(i):n)}),t=o.length)for(d=d||function(){var t,e,i={height:b.innerHeight,width:b.innerWidth};return i.height||!(t=v.compatMode)&&c.support.boxModel||(i={height:(e="CSS1Compat"===t?m:v.body).clientHeight,width:e.clientWidth}),i}(),u=u||{top:b.pageYOffset||m.scrollTop||v.body.scrollTop,left:b.pageXOffset||m.scrollLeft||v.body.scrollLeft};e<t;e++)if(c.contains(m,o[e])){var i,n,s,r=c(o[e]),a=r.height(),p=r.width(),l=r.offset(),h=r.data("inview");if(!u||!d)return;l.top+a>u.top&&l.top<u.top+d.height&&l.left+p>u.left&&l.left<u.left+d.width?(s=(i=u.left>l.left?"right":u.left+d.width<l.left+p?"left":"both")+"-"+(n=u.top>l.top?"bottom":u.top+d.height<l.top+a?"top":"both"),h&&h===s||r.data("inview",s).trigger("inview",[!0,i,n])):h&&r.data("inview",!1).trigger("inview",[!1])}}c.event.special.inview={add:function(t){f[t.guid+"-"+this[i]]={data:t,$element:c(this)},e||c.isEmptyObject(f)||(e=setInterval(n,250))},remove:function(t){try{delete f[t.guid+"-"+this[i]]}catch(t){}c.isEmptyObject(f)&&(clearInterval(e),e=null)}},c(b).bind("scroll resize scrollstop",function(){d=u=null}),!m.addEventListener&&m.attachEvent&&m.attachEvent("onfocusin",function(){u=null}),c(document).on("inview",".sppb-progress",function(t,e,i,n){var o=c(this).find(".sppb-progress-bar");e&&(o.css("width",o.data("width")),c(this).unbind("inview"))}),c.fn.sppbanimateNumbers=function(i,n,o,s){return this.each(function(){var t=c(this),e=parseInt(t.text().replace(/,/g,""));n=void 0===n||n,c({value:e}).animate({value:i},{duration:null==o?1e3:o,easing:null==s?"swing":s,step:function(){t.text(Math.floor(this.value)),n&&t.text(t.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))},complete:function(){parseInt(t.text())!==i&&(t.text(i),n&&t.text(t.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")))}})})},c(document).on("inview",".sppb-animated-number",function(t,e,i,n){var o=c(this);e&&(o.sppbanimateNumbers(o.data("digit"),!1,o.data("duration")),o.unbind("inview"))}),c(document).on("inview",".sppb-pie-chart",function(t,e,i,n){var o=c(this);e&&(o.easyPieChart({barColor:o.data("barcolor"),trackColor:o.data("trackcolor"),scaleColor:!1,lineWidth:o.data("width"),size:o.data("size"),onStep:function(t,e,i){o.find(".sppb-chart-percent > span").text(Math.round(i)+"%")}}),o.unbind("inview"))})}(jQuery),jQuery(function(r){r(document).on("submit",".sppb-ajaxt-contact-form",function(t){t.preventDefault();var s=r(this),e=r(this).serializeArray(),i={option:"com_sppagebuilder",task:"ajax",addon:"ajax_contact","g-recaptcha-response":s.find("#g-recaptcha-response").val(),data:e};return r.ajax({type:"POST",data:i,beforeSend:function(){s.find(".fa").addClass("fa-spinner fa-spin")},success:function(t){var e=r.parseJSON(t);try{var i=r.parseJSON(e.data),n=i.content,o="json"}catch(t){n=e.data,o="strings"}"json"==o?i.status&&s.trigger("reset"):s.trigger("reset"),s.find(".fa-spin").removeClass("fa-spinner fa-spin"),s.next(".sppb-ajax-contact-status").html(n).fadeIn().delay(4e3).fadeOut(500)}}),!1})}),jQuery(function(s){s(document).on("submit",".sppb-optin-form",function(t){t.preventDefault();var o=s(this),e={option:"com_sppagebuilder",task:"ajax",addon:"optin_form",data:s(this).serializeArray()};return s.ajax({type:"POST",data:e,beforeSend:function(){o.find(".fa").addClass("fa-spinner fa-spin")},success:function(t){var e=s.parseJSON(t),i=s.parseJSON(e.data),n="sppb-alert sppb-alert-warning";if(i.status){n="sppb-alert sppb-alert-success";o.trigger("reset")}o.find(".fa-spin").removeClass("fa-spinner fa-spin"),o.next(".sppb-optin-form-status").html('<p class="'+n+'">'+i.content+"</p>").fadeIn().delay(4e3).fadeOut(1e3)}}),!1})}),jQuery(function(i){i(document).on("click",".sppb-magnific-popup",function(t){t.preventDefault();var e=i(this);e.magnificPopup({type:e.data("popup_type"),mainClass:e.data("mainclass")}).magnificPopup("open")})}),jQuery(function(i){new MutationObserver(function(t){t.forEach(function(t){var e=t.addedNodes;null!==e&&i(e).each(function(){i(this).find(".sppb-addon-countdown .sppb-countdown-timer").each(function(){var e=i(this),t=e.data("date")+" "+e.data("time");e.countdown(t,function(t){i(this).html(t.strftime('<div class="sppb-countdown-days sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%-D</span><span class="sppb-countdown-text">%!D: '+Joomla.JText._("COM_SPPAGEBUILDER_DAY")+","+Joomla.JText._("COM_SPPAGEBUILDER_DAYS")+';</span></div><div class="sppb-countdown-hours sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%H</span><span class="sppb-countdown-text">%!H: '+Joomla.JText._("COM_SPPAGEBUILDER_HOUR")+","+Joomla.JText._("COM_SPPAGEBUILDER_HOURS")+';</span></div><div class="sppb-countdown-minutes sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%M</span><span class="sppb-countdown-text">%!M:'+Joomla.JText._("COM_SPPAGEBUILDER_MINUTE")+","+Joomla.JText._("COM_SPPAGEBUILDER_MINUTES")+';</span></div><div class="sppb-countdown-seconds sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%S</span><span class="sppb-countdown-text">%!S:'+Joomla.JText._("COM_SPPAGEBUILDER_SECOND")+","+Joomla.JText._("COM_SPPAGEBUILDER_SECONDS")+";</span></div>")).on("finish.countdown",function(){i(this).html('<div class="sppb-countdown-finishedtext-wrap sppb-col-xs-12 sppb-col-sm-12 sppb-text-center"><h3 class="sppb-countdown-finishedtext">'+e.data("finish-text")+"</h3></div>")})})})})})}).observe(document.body,{childList:!0,subtree:!0})}),function(i){window.sppbVideoBackgroundResize=function(t){t.find(".sppb-youtube-video-bg").removeClass("hidden");var e=t.innerWidth(),i=t.innerHeight();iframeW=e,iframeH=e*(9/16),marginTop=-Math.round((iframeH-i)/2),marginLeft=-Math.round((iframeW-e)/2),e/i<16/9&&(iframeW=i*(16/9),iframeH=i,marginLeft=-Math.round((iframeW-e)/2),marginTop=-Math.round((iframeH-i)/2)),t.find(".sppb-youtube-video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})},i(window).on("load resize",function(){i(".sppb-row-have-ext-bg").each(function(){sppbVideoBackgroundResize(i(this))})}),i(document).ready(function(){var e=document.getElementsByClassName("section-bg-video");if(e.volume=0,i(window).width()<767){for(var t=0;t<e.length;t++)e[t].removeAttribute("autoplay");i(document).on("touchend touchcancel",function(){!function(){for(var t=0;t<e.length;t++)e[t].paused&&e[t].play()}()})}})}(jQuery);