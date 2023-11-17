const querystring = require('querystring')
var str = 'id=3&city=Atlanta&url=https://www.google.com'
var escaped = querystring.escape(str)
console.log(escaped)

// const querystring = require('querystring')
var str = 'id%3D3%26city%3DAtlanta%26url%3Dhttps%3A%2F%2Fwww.google.com'
var unescaped = querystring.unescape(str)
console.log(unescaped)