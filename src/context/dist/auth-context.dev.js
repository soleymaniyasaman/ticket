"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var token = (0, _utils.getTokenObject)();

var AuthContext = _react["default"].createContext({
  isLoggedIn: token ? true : false,
  token: null,
  login: function login() {},
  logout: function logout() {}
});

exports.AuthContext = AuthContext;