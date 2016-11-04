var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/css/app.scss',
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      IndexPage: 'app/components/IndexPage.jsx',
      JournalCreate: 'app/components/JournalCreate.jsx',
      JournalList: 'app/components/JournalList.jsx',
      AboutPage: 'app/components/AboutPage.jsx',
      EditorPage: 'app/components/EditorPage.jsx',
      EditorWindow: 'app/components/EditorWindow.jsx',
      EntryListWindow: 'app/components/EntryListWindow.jsx',
      EntryList: 'app/components/EntryList.jsx',
      EntryAdd: 'app/components/EntryAdd.jsx',
      EntrySearch: 'app/components/EntrySearch.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url'
      }
    ]
  }
};
