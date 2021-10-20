"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apisauce = require("apisauce");

var _cache = _interopRequireDefault(require("../utility/cache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiClient = (0, _apisauce.create)({
  baseURL: "https://fakestoreapi.com"
});
var get = apiClient.get;

apiClient.get = function _callee(url, params, axiosConfig) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(get(url, params, axiosConfig));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _cache["default"].asyncStorageStore(url, response.data);
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = apiClient;
exports["default"] = _default;