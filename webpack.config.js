const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
      path: __dirname + '/dist',
      // publicPath:  __dirname + '/dist/assets/',
      filename: 'bundle.js'        
  },
  resolve:{
      extensions:['.js','.jsx','.css','.less','.html','.sass']  //引入文件，可省略后缀
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          // plugins: ['react-html-attrs'], // 添加组件的插件配置   使得页面可以用class  命名 （babel-plugin-react-html-attrs）
        }
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },{ 
        test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
        loader: 'url-loader?limit=8192&name=[hash:8].[name].[ext]'
        // loader:'url-loader'  // 限制大小500kb    ?limit=500000
      }, { 
        test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,   
        loader:'file-loader'   // 限制大小小于500k  ?limit=500000
      } 
    ]
  },
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      template: 'index.html',   //自动绑定页面   自动引入bundle.js
    }),

    // 热加载插件
    // new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:6098'
    // }),

  ],
  devServer: {   
    // colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    // inline: true, //实时刷新   
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    publicPath: '/dist/',
    stats: {
      modules: false,
      chunks: false      
    },
    // hot: true, // 使用热加载插件 HotModuleReplacementPlugin
    port: 6098
  }
}
