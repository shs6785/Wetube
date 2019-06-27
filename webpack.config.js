
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCss = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader:"babel-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractCss.extract({
          fallback: "style-loader", // css가 추출되지 않을 때 사용하는 로더
          use: [
            { 
              loader: "css-loader" 
            },
            {
              loader: "postcss-loader",
              options: {
                plugins() {
                  return autoprefixer({ browsers: "cover 99.5%" });
                }
              }
            }, 
            { 
              loader: "sass-loader" 
            }
          ],
          publicPath: OUTPUT_DIR // 경로 재설정
        })
      }
    ]
  },
  plugins: [new ExtractCss("styles.css")]
};



module.exports = config;