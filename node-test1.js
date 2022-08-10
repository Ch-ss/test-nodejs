const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regscript = /<script>[\s\S]*<\/script>/
// 读取文件
fs.readFile(path.join(__dirname, './test1.html'), 'utf8', function(err, dataStr) {
	if (err) return console.log('读取文件失败' + err.message)
	// console.log('读取文件成功' + dataStr)
	resolveCSS(dataStr)
	resolvescript(dataStr)
})
// 将css单独放到css文件中，将script内容放到单独文件中
function resolveCSS(html) {
	const res = regStyle.exec(html)
	const newCss = res[0].replace('<style>', '').replace('</style>', '')
	fs.writeFile(path.join(__dirname, './test1.css'), newCss, function(err) {
		if (err) return console.log('写入css文件失败' + err.message)
		console.log('写入css文件成功')
	})
}
function resolvescript(script) {
	const res = regscript.exec(script)
	const newCss = res[0].replace('<script>', '').replace('</script>', '')
	fs.writeFile(path.join(__dirname, './test1.js'), newCss, function(err) {
		if (err) return console.log('写入js文件失败' + err.message)
		console.log('写入js文件成功')
	})
}