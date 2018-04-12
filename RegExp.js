var text = "Hello i am fluently nice to meet you";

var pattern = /[a-z]+/ig;
var pattern = new RegExp("[a-z]+", "ig");

do{
	var match = pattern.exec(text);
	console.log(match)
}while(match)

var arr = text.match(pattern);

// RegExp对象exec方法和String对象match方法区别
var msg = "Hello i am fluently nice to meet you";
var pattern = /[a-z]+/i;
msg.match(pattern)
["Hello", index: 0, input: "Hello i am fluently nice to meet you"]0: "Hello"index: 0input: "Hello i am fluently nice to meet you"length: 1__proto__: Array(0)
pattern.exec(msg)
["Hello", index: 0, input: "Hello i am fluently nice to meet you"]
如果不是global匹配，match和exec方法返回结果是相同的。都返回一个数组，[匹配项，匹配项索引位置，源字符串]
var msg = "Hello i am fluently nice to meet you";
var pattern = /[a-z]+/ig;
var matchArray = msg.match(pattern);
matchArray
(8) ["Hello", "i", "am", "fluently", "nice", "to", "meet", "you"]


var msg = "Hello i am fluently nice to meet you";
var pattern = /[a-z]+/ig;
do{
	var match = pattern.exec(msg);
	console.log(match)
}while(match)
 ["Hello", index: 0, input: "Hello i am fluently nice to meet you"]
 ["i", index: 6, input: "Hello i am fluently nice to meet you"]
 ["am", index: 8, input: "Hello i am fluently nice to meet you"]
 ["fluently", index: 11, input: "Hello i am fluently nice to meet you"]
 ["nice", index: 20, input: "Hello i am fluently nice to meet you"]
 ["to", index: 25, input: "Hello i am fluently nice to meet you"]
 ["meet", index: 28, input: "Hello i am fluently nice to meet you"]
 ["you", index: 33, input: "Hello i am fluently nice to meet you"]

如果是global匹配，match方法返回所有匹配项组成的数组，exec方法每执行一次，返回一次匹配对象，[匹配项，匹配项索引位置，源字符串]，下次执行的
起始位置是上次匹配到的位置。