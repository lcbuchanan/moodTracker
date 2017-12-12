module.exports = {
  entry: './app/index.jsx', // the starting point for our program
  output: {
    path: __dirname + '/public', // the absolute path for the directory where we want the output to be placed
    filename: 'bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  context: __dirname,
  module: {
    loaders: [
      {
        test: /jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
