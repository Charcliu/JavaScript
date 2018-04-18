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