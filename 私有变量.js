都是为自定义类型创建私有变量和特权方法

// 针对每个实例都会创建一组新方法
function Model(){
	// 私有变量
	var initData = null;

	var index = 0;

	// 特权方法
	this.getInitData = function(){
		return initData;
	}

	this.setInitData = function(obj){
		return initData = obj;
	}

	this.getIndex = function(){
		return index;
	}

	this.setIndex = function(){
		index++;
	}
}

function Model(){
	// 私有变量
	var initData = null;

	var index = 0;

	// 特权方法
	this.publicOperation = {
		getInitData : function(){
			return initData;
		},
		setInitData : function(obj){
			return initData = obj;
		},
		getIndex : function(){
			return index;
		},
		setIndex : function(){
			index++;
		}
	}
}
var model = new Model();

// 静态私有变量（私有变量和函数由实例共享）
(function(){
	var privateVariable = 10;
	function privateFunction(){
		return false;
	}
	// 全局变量
	MyObject = function(){}
	MyObject.prototype.publicMethod = function(){
		privateVariable++;
		return privateFunction();
	}
})()

// 模块模式(为单例添加私有变量和特权方法)
var Model = function(){
	// 私有变量
	var initData = null;

	var index = 0;

	// 特权方法
	return {
		getInitData : function(){
			return initData;
		},
		setInitData : function(obj){
			return initData = obj;
		},
		getIndex : function(){
			return index;
		},
		setIndex : function(){
			index++;
		}
	}
}()

// 增强的模块模式
var application = function(){
	// 私有变量和函数
	var components = new Array();
	components.push(new BaseComponent());
	// 创建Application的一个局部副本
	var app = new BaseComponent();
	// 公共接口
	app.getComponentCount = function(){
		return components.length;
	}
	app.registerComponent = function(component){
		if(typeof components == "object"){
			components.push(component);
		}
	}
	// 返回这个副本
	return app;
}()