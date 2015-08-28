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

var _componentsAboutController = require('./components/AboutController');

var _componentsAboutController2 = _interopRequireDefault(_componentsAboutController);

var _componentsProjectController = require('./components/ProjectController');

var _componentsProjectController2 = _interopRequireDefault(_componentsProjectController);

var _componentsWorkIndexController = require('./components/WorkIndexController');

var _componentsWorkIndexController2 = _interopRequireDefault(_componentsWorkIndexController);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { name: 'app', path: '/', handler: _componentsAppController2['default'] },
  _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'home', handler: _componentsHomeController2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'about', handler: _componentsAboutController2['default'] }),
  _react2['default'].createElement(
    _reactRouter.Route,
    { name: 'work' },
    _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'work-index', handler: _componentsWorkIndexController2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { name: 'project', handler: _componentsProjectController2['default'], path: ':id' })
  )
);
module.exports = exports['default'];