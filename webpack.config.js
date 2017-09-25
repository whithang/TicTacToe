const path = require('path');

module.exports = {
  // context: path.join(__dirname, 'src'),
  entry: "./src/main.js", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "bundle.js", // string
    // the filename template for entry chunks

    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page

    library: "MyLibrary", // string,
    // the name of the exported library

    libraryTarget: "umd", // universal module definition
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)

      {
        test: /\.js$/,
        // include: [
        //   path.resolve(__dirname, "app")
        // ],
        exclude: /node_modules/,
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include

        // issuer: { test, include, exclude },
        // conditions for the issuer (the origin of the import)

        enforce: "pre",
        enforce: "post",
        // flags to apply these rules, even if they are overridden (advanced option)

        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide

        options: {
          presets: ["es2015"]
        },
        // options for the loader
      },

      {
        test: /\.html$/,

        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      },

      // { oneOf: [ /* rules */ ] },
      // // only use one of these nested rules
      //
      // { rules: [ /* rules */ ] },
      // // use all of these nested rules (combine with conditions to be useful)
      //
      // { resource: { and: [ /* conditions */ ] } },
      // // matches only if all conditions are matched
      //
      // { resource: { or: [ /* conditions */ ] } },
      // { resource: [ /* conditions */ ] },
      // // matches if any condition is matched (default for arrays)
      //
      // { resource: { not: /* condition */ } }
      // matches if the condition is not matched
    ],

  },

  resolve: {

    modules: [
      // "node_modules",
      path.join(__dirname, "node_modules"),
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used

    alias: {
    },
  },

  performance: {
  },

  devtool: "source-map", // enum

  context: __dirname, // string (absolute path!)


  target: "web",
  stats: "errors-only",

  devServer: {
  },

  plugins: [
  ],
}
