const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => { }
    //require.extensions['.css'] = file => { } //测试, 可以删除
}

module.exports = withLess(withCSS({
    lessLoaderOptions: {
        javascriptEnabled: true
    }
}))