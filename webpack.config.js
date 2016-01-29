const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const stylelint = require('stylelint');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app:   path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry:   PATHS.app,
  output:  {
    path:     PATHS.build,
    filename: 'bundle.js'
  },
  module:  {
    preLoaders: [
      {
        test:    /\.css$/,
        loaders: ['postcss'],
        include: PATHS.app
      },
      {
        test:    /\.jsx?$/,
        loaders: [
          'eslint',
          'jscs'
        ],
        include: PATHS.app
      }
    ],
    loaders:    [
      {
        test:    /\.css$/,
        loaders: [
          'style',
          'css'
        ],
        include: PATHS.app
      }
    ]
  },
  postcss: function() {
    return [
      stylelint({
        rules: {
          'color-hex-case': 'lower'
        }
      })
    ];
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase:        PATHS.build,
      historyApiFallback: true,
      hot:                true,
      inline:             true,
      progress:           true,
      stats:              'errors-only',
      host:               process.env.HOST,
      port:               process.env.PORT
    },
    plugins:   [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool:   'eval-source-map'
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}