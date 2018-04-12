/**
	返回介于最大值和最小值之间的一个随机数
*/
function selectFrom(lowerValue, upperValue){
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}