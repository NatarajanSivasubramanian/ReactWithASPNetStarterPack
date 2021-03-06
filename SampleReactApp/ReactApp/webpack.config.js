var path = require('path');
var webpack = require('webpack');

module.exports = 
{
  entry: './index.js',
  output: { path: __dirname + '/dist', filename: 'SPAAppDemo.js' },
  module: 
  {
    loaders: 
    [
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: 
            {
                presets: ['es2015', 'react', 'stage-2']
            }
        }
    ]
  },
  stats: 
  {
    colors: true
  },
  devtool: 'source-map'
};
