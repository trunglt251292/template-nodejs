"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _controllexam = require("../controlls/controllexam");

var _controllexam2 = _interopRequireDefault(_controllexam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routerexam = function routerexam(app) {
    app.route('/').get(_controllexam2.default.exam_get);
};
exports.default = routerexam;
//# sourceMappingURL=routerexam.js.map