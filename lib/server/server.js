'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _commonRoutes = require('../common/routes');

var _commonRoutes2 = _interopRequireDefault(_commonRoutes);

// Express
var app = (0, _express2['default'])();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

// This server static files from /isomorphic-react/lib/server/**
// As soon as something isn't found here, we will go to the next Routing block
// where React will try to render something
app.use(_express2['default']['static'](__dirname));

// Everything handled by React after we didn't find it through the
// static file server by Express
app.get('/*', function (req, res, next) {

  _reactRouter2['default'].run(_commonRoutes2['default'], req.url, function (Handler, state) {
    if (state.pathname == undefined) {
      console.log('we could not match the pathname, so go do a 404');
      next();
    } else {
      console.log('seems to be an active route, use React for this');
      var content = _react2['default'].renderToString(_react2['default'].createElement(Handler, null));
      return res.render('index', { content: content });
    }
  });
}, function (req, res) {
  console.log('make it a 404');
  res.status(404).send('Sorry, cant find that!');
});

var port = process.env.PORT || 3000;
// var host = process.env.HOST || 0.0.0.0;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});