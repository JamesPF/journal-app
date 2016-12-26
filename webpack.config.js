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
      SignupPage: 'app/components/signup/SignupPage.jsx',
      SignupForm: 'app/components/signup/SignupForm.jsx',
      LoginPage: 'app/components/login/LoginPage.jsx',
      LoginForm: 'app/components/login/LoginForm.jsx',
      JournalsPage: 'app/components/journals/JournalsPage.jsx',
      JournalCreate: 'app/components/journals/JournalCreate.jsx',
      JournalSearch: 'app/components/journals/JournalSearch.jsx',
      JournalList: 'app/components/journals/JournalList.jsx',
      Journal: 'app/components/journals/Journal.jsx',
      AboutPage: 'app/components/about/AboutPage.jsx',
      EntriesPage: 'app/components/entries/EntriesPage.jsx',
      EditorWindow: 'app/components/entries/EditorWindow.jsx',
      EntryList: 'app/components/entries/EntryList.jsx',
      Entry: 'app/components/entries/Entry.jsx',
      EntryTitle: 'app/components/entries/EntryTitle.jsx',
      EntryAdd: 'app/components/entries/EntryAdd.jsx',
      EntrySearch: 'app/components/entries/EntrySearch.jsx'
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
