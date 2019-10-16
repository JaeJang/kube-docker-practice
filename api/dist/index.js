"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _mysql = _interopRequireDefault(require("mysql"));

var _router = _interopRequireDefault(require("./router"));

var _keys = _interopRequireDefault(require("./keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 5001;
var app = (0, _express["default"])();
app.server = _http["default"].createServer(app);
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());

var db = _mysql["default"].createConnection({
  host: _keys["default"].host,
  user: _keys["default"].user,
  password: _keys["default"].pword,
  database: _keys["default"].database
});

app.set('db', db);
new _router["default"](app);
app.server.listen(PORT, function () {
  console.log("connected on port " + PORT);
});