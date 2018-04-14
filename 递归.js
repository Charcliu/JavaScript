function factorial(num){
	if(num <= 1){
		return 1;
	}else{
		return num * arguments.callee(num-1)
	}
}


function factorial(num){
	if(num <= 1){
		return 1;
	}else{
		// Right
		return num * arguments.callee(--num)
		// Wrong 因为num--运算符是执行了之后num才减一，所以每次递归传的都是num，就会造成死循环
		// return num * arguments.callee(num--)
	}
}

factorial(4)