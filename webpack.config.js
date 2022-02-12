const { merge } = require('webpack-merge');
const process = require('process');
const webpack = require('webpack');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'sporters',
    projectName: 'sport-react',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          REACT_APP_API_END_POINT: JSON.stringify(
            process.env.REACT_APP_API_END_POINT
          ),
        },
      }),
    ],
    // modify the webpack config however you'd like to by adding to this object
  });
};
