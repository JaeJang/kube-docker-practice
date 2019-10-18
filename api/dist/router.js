"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router(app) {
    _classCallCheck(this, Router);

    this.app = app;
    this.setupRouter();
  }

  _createClass(Router, [{
    key: "setupRouter",
    value: function setupRouter() {
      var app = this.app;
      var db = app.get('db');
      app.get('/', function (req, res) {
        console.log('GET /');
        db.query('SELECT * FROM Test', function (error, results, fields) {
          if (error) {
            return res.status(503).json({
              error: {
                message: "Unable to get",
                error: error
              }
            });
          }

          res.status(200).json(results);
        });
      });
      app.post('/add', function (req, res) {
        console.log('POST /add');

        if (req.body.post) {
          var newPost = {
            post: req.body.post
          };
          db.query('INSERT INTO Test SET ?', newPost, function (err, results) {
            if (err) {
              return res.status(503).json({
                error: {
                  message: "Unable to save",
                  error: err
                }
              });
            }

            return res.status(200).json(results);
          });
        }
      });
    }
  }]);

  return Router;
}();

var _default = Router;
exports["default"] = _default;