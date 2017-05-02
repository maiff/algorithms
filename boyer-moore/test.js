var fs = require('fs')
var str = ''
for(var i = 0; i < 10000000; i++){
  str += 'fsdfsdffsd'
}
str+='fsdfsdffsc'
fs.writeFileSync('test.txt', str, {encoding: 'utf-8'})