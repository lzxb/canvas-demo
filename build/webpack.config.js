const fs = require('fs')
const path = require('path')
const resolve = url => path.resolve(__dirname, url)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const demos = {}
const demoHtml = []

fs
  .readdirSync(resolve('../demo'))
  .filter(dir => {
    return fs.statSync(resolve(`../demo/${dir}`)).isDirectory() && dir !== 'helpers'
  })
  .forEach(name => {
    const html = new HtmlWebpackPlugin({
      title: name,
      filename: `${name}/index.html`,
      chunks: [name]
    })
    demos[name] = resolve(`../demo/${name}/index.ts`)
    demoHtml.push(html)
  })

module.exports = {
  entry: demos,
  output: {
    filename: '[name]/js/main-[hash].js',
    path: path.join(__dirname, '/'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  plugins: [].concat(demoHtml),
  resolve: {
    extensions: ['.ts', '.js']
  }
}
