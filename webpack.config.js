const webpack = require('webpack');
const modeDev = process.env.NODE_ENV !=='production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPLugin = require('optimize-css-assets-webpack-plugin');


module.exports ={

  mode:modeDev ? 'development': 'production',
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
  devServer:{
    contentBase:"./public",
    port:9000
  },
  optimization:{
    minimizer:[
      new UglifyJsPlugin({
        cache:true,
        parallel:true
      }),
      new OptimizeCssAssetsPLugin({})
    ]
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
    },{
      test:/\.(png|svg|jpg|gif)$/,
      use:['file-loader']
    }]
  }
}
