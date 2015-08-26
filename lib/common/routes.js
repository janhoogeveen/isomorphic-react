'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsAppController = require('./components/AppController');

var _componentsAppController2 = _interopRequireDefault(_componentsAppController);

var _componentsHomeController = require('./components/HomeController');

var _componentsHomeController2 = _interopRequireDefault(_componentsHomeController);

var _componentsLoginHandler = require('./components/LoginHandler');

var _componentsLoginHandler2 = _interopRequireDefault(_componentsLoginHandler);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsAppController2['default'] },
  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsHomeController2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'login', handler: _componentsLoginHandler2['default'], path: '/login' })
);
module.exports = exports['default'];