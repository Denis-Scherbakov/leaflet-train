const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@menu-item-height": "300px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
