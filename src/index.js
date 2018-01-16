require('./css/index.less');

const Elm = require('./elm/Main.elm');

const app = Elm.Main.embed(document.getElementById('main'));
