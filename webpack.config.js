const path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './app.js',
 ],
 output: {
   path: path.join(__dirname, 'www'),
   filename: 'bundle.js',
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
     {
       test: /\.css$/,
       use: [
         {
           loader: 'style-loader'
         },
         {
          loader: 'css-loader',
          options: {
            modules: true,
            // localIdentName: '[path],oo-[name]__[local]--[hash:base64:5]'
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
       ]
     }
   ]
 },
 resolve: {
   modules: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};