function factorial(num){
	if(num > 0){
		return num * arguments.callee(num - 1);
	}else{
		return 1;
	}
}

function test(fn){
	fn.callee();
}

function fuck(){
	console.log("fuck through arguments");
	return arguments;
}

function test(){
	console.log("test")
	test1();
}
function test1(){
	console.log("test1")
	arguments.callee.caller();
}