/*! Leo  @  11-01-2016 */
define("static/common-dist/array/where",[],function(a,b,c){function d(a){var b=a.match(/\((.*)\)\s*=>\s*(.*)/),c=[],d="";b.length>0&&b.shift(),b.length>0&&(d=b.pop()),b.length>0&&(c=b.pop().replace(/^\s*|\s(?=\s)|\s*$|,/g,"").split(" ")),b=(/\s*return\s+/.test(d)?"":"return ")+d,c.push(b);try{return Function.apply({},c)}catch(e){return null}}Array.prototype.where=function(a){var b=a;if("string"==typeof a&&null==(b=d(b)))throw"Syntax error in lambda string: "+a;for(var c=[],e=this.length,f=[0,0,c],g=1;g<arguments.length;g++)f.push(arguments[g]);for(var g=0;e>g;g++)"undefined"!=typeof this[g]&&(f[0]=this[g],f[1]=g,b.apply(this,f)&&c.push(this[g]));return c}});