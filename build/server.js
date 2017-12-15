const express = require('express')
const webpack = require('webpack')
const middlewar = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')

const compiler = webpack(webpackConfig)

const app = express()

app.use(middlewar(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: 'minimal'
}))

app.listen(3000, (err) => {
  if (err) return console.log(err)
  console.log('http://localhost:3000/')
})
