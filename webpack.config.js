const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={

  mode:'development',
  entry:'./src/principal.js',
  plugins:[
    new MiniCssExtractPlugin({
      filename:"estilo.css"
    })
  ],
  output:{
    filename:'principal.js',
    path:__dirname + '/public'
  },
  module:{
    rules:[{
      test:/\.s?[ac]ss$/,
      use:[
        MiniCssExtractPlugin.loader,
        //'style-loader', // adiciona o css a dom injetando a tag <style>
        'css-loader',// interpreta @import, url() etc.
        "sass-loader",
      ]
    }]
  }
}
