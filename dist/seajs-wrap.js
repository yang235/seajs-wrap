!function(){function a(a,b){var d=c.ActiveXObject?new c.ActiveXObject("Microsoft.XMLHTTP"):new c.XMLHttpRequest;return d.open("GET",a,!0),d.onreadystatechange=function(){if(4===d.readyState){if(d.status>399&&d.status<600)throw new Error("Could not load: "+a+", status = "+d.status);b(d.responseText)}},d.send(null)}function b(a,b){a&&/\S/.test(a)&&(c.execScript||function(a){try{(c.eval||eval).call(c,a)}catch(d){d.fileName=b,console.error(d)}})(a)}var c=window,d={};seajs.on("resolve",function(a){var c=a.id;if(!c)return"";var e=c.match(/[^?]+?(\.\w+)?(\?.*)?$/);if(e&&(".js"===e[1]||!e[1])){var f=seajs.resolve(c,a.refUri),g=e[2]||"";d[f]=function(a,c){var d,e=/define\(.*function\s*\(\s*require\s*(.*)?\)\s*\{/;d=e.test(c)||g.indexOf("nowrap")>0?c:"define(function(require, exports, module) {\n"+c+"\n})",b(d,a)},a.uri=f}}),seajs.on("request",function(b){var c=d[b.uri];c&&(a(b.requestUri,function(a){c(b.uri,a),b.onRequest()}),b.requested=!0)}),define("seajs/seajs-wrap/1.0.0/seajs-wrap",[],{})}();