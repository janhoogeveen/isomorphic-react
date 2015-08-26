"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _commonRoutes = require("../common/routes");

var _commonRoutes2 = _interopRequireDefault(_commonRoutes);

_reactRouter2["default"].run(_commonRoutes2["default"], _reactRouter2["default"].HistoryLocation, function (Handler, state) {
	console.log('Route picked up by React');
	console.log(Handler, state);
	_react2["default"].render(_react2["default"].createElement(Handler, null), document.getElementById('react-app'));
});