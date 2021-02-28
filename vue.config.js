module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
        // Vue CLI v3 用户可参考 css-loader v1 文档
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          //   localIdentName: '[path][name]__[local]--[hash:base64:5]'
          localIdentName: '[local]--[hash:base64:5]'
        },
        localsConvention: 'camelCaseOnly'
      }
    }
  }
};
