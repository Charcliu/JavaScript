var promise = new Promise((resolve, reject) => {
	for(var i = 0; i < 10000000000; i++){}
	resolve(i)
})
promise.then((value) => {
	console.log(value);
})
console.log("Async");


function* generator() {
    console.log('start')
    var res = yield loop();
    console.log('end')
}

function loop() {
    return new Promise(function(resolve, reject) {
        try {
            console.time('loop');
            for (var i = 0; i < 1000000000; i ++) {}
            console.timeEnd('loop');
        } catch (e) {
            reject(e);
        }
        resolve();
    })
}

var g = generator();
g.next().value.then(function() {
    g.next();
});