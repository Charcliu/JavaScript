安全的类型检测
	Object.prototype.toString.call(value);用来检测value的具体类型
	Object.prototype.toString.call(21)
	"[object Number]"
	Object.prototype.toString.call("")
	"[object String]"
	Object.prototype.toString.call({})
	"[object Object]"
	Object.prototype.toString.call(true)
	"[object Boolean]"
	Object.prototype.toString.call(null)
	"[object Null]"
	Object.prototype.toString.call(undefined)
	"[object Undefined]"
	Object.prototype.toString.call(new RegExp())
	"[object RegExp]"
	function test(){}
	Object.prototype.toString.call(new test())
	"[object Object]"

作用域安全的构造函数
	function person(name, age, sex){
		if(this instanceof person){
			this.name = name;
			this.age = age;
			this.sex = sex;
		}else{
			return new person(name, age, sex);
		}
	}

不可扩展对象  Object.preventExtensions()
密封的对象	 Object.seal()
冻结的对象    Object.freeze()

setTimeout()的链式调用
 
setTimeout(function(){
	console.log(new Date())
	setTimeout(arguments.callee, 1000);
},1000);

Yield Processes

setTimeout(function(){
	var item = array.shift();
	process(item);
	if(array.length > 0){
		setTimeout(arguments.callee, 1000)
	}
},1000)

函数节流

var processor = {
	timeoutId : null,
	performProcessing : function(){
		console.log(new Date())
	},
	process : function(){
		clearTimeout(this.timeoutId);
		var that = this;
		this.timeoutId = setTimeout(function(){
			that.performProcessing();
		},1000)
	}
}

for(let i = 0; i < 1000; i++){
	processor.process();
}
