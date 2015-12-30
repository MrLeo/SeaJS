define(function(require, exports, module) {
  require('vue');
	
	var vModel = new Vue({
		el : ".v-model",
		data :{
			items : [
				{ name : "hello" , age : "12" , id : '1'},
				{ name : "world" , age : "21" , id : '2'},
			],
			message : "hello vuejs"
		},
		methods : {
			clickHandler : function(e){
				alert(e.target.tagName)
			},
			keyupHandler : function(msg){
				alert(msg)
			}
		}
	})
	
	vModel.items[0] = {name : "hehe" , age : '50' , id : '4'} 
	vModel.items[1] = {name : "haha" , age : '15' , id : '65'} 
	vModel.items[2] = {name : "666" , age : '5' , id : '3'} 
	
	setTimeout(function(){
		vModel.items.$add()
	},7000)
	
	/*setTimeout(function(){
		vModel.items.push({ name : 'im new' , age : '60'})
	},2000)
	
	setTimeout(function(){
		vModel.items.$set(2,{name : 'im old' , age : '70'})
	},4000)*/
	
	/*setTimeout(function(){
		vModel.items.$remove(2)
	},6000)*/
	
	
  // 通过 exports 对外提供接口
  exports.funcName = function(){  };

  module.exports = { // 或者通过 module.exports 提供整个接口
  	'funcName' : function(){  }
  }
});