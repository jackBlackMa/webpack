const path = require('path');

const config = {
    entry: './main',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'./dist'),
        publicPath: '/dist/'
    }
}

module.exports = config