function bibao(){
	var i = 0;
	return function(){
		console.log(i++);
	}
}

function outer(){
	var i = 0;
	return {
        inner : function(){
            console.log(i++);
        }
	}
}

function createFunctions(){
	var result = new Array();
	for(var i=0; i < 10; i++){
		result[i] = function(){
			return i
		}
	} 
	return result;
}

function createFunctions(){
	var result = new Array();
	for(let i=0; i < 10; i++){
		result[i] = function(){
			return i
		}
	} 
	return result;
}

function createFunctions(){
	var result = new Array();
	for(var i=0; i < 10; i++){
		result[i] = (function(num){
			return function(){
				return num;
			}
		})(i)
	} 
	return result;
}
