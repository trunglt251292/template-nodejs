'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var exam_get = function exam_get(err, req, res, callback) {
  if (err) {
    callback(err, null);
  } else {
    res.render('exam');
  }
};
exports.default = { exam_get: exam_get };
//# sourceMappingURL=controllexam.js.map