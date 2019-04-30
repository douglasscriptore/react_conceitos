const path = require("path");

module.exports = {
  // tudo no react se inicia em um arquivo principal
  entry: path.resolve(__dirname, "src", "index.js"),
  // onde será jogado o código transpilado pelo babel
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  //configurando o webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    // aqui cria as regras para que o webpack trate importações fora do padrão dentro do react
    rules: [
      {
        // criando uma regex para pegar todos arquivos JS
        test: /\.js$/,
        // exclui todos arquivos da pasta node_modules
        exclude: /node_modules/,
        // informa que será utilizado o babel loader
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
