var sum = function(a, b){
	return a + b;
}
var otherSum = sum;
sum(1, 2);
otherSum(1, 2);
sum = null;
otherSum(1, 2);