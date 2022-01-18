const base64wasm = require("../../base64-wasm-bundler/main.js");

module.exports = {
    rollup: {
      inPlugins: [base64wasm()],
      outPlugins: []
    }
}