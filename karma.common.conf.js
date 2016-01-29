module.exports = {
  browsers: [
    'PhantomJS',
  ],
  files: [
    '<insert-your-here>',
    {
      pattern: 'test/browser-spec.js',
      watched: false,
    },
  ],
  frameworks: [
    'mocha'
  ],
  preprocessors: {
    'test/browser-spec.js': [
      'webpack',
      'env'
    ]
  },
  reporters: [
    'dots',
  ],
  envPreprocessor: [
    'VK_TOKEN'
  ],
  singleRun: true,
  webpack: {
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
      ],
    },
    watch: true,
  },
  webpackServer: {
    noInfo: true,
  },
};
