const url = require('url')

var a = url.resolve('/one/two/three', 'four')
console.log(a)

var b = url.resolve('http://example.com/', '/one')
console.log(b)

var c = url.resolve('http://example.com/one', '/two')
console.log(c)

var d = url.resolve('http://example.com/one/two', './three')
console.log(d)