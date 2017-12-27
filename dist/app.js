"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require("serve-favicon");

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _routerexam = require("./routers/routerexam");

var _routerexam2 = _interopRequireDefault(_routerexam);

var _controllexam = require("./controlls/controllexam");

var _controllexam2 = _interopRequireDefault(_controllexam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Global variables
 */

/**
 * Router variables
 */
/**
 * Creating Project REST API Project
 */
var app = (0, _express2.default)();
var debug = require('debug')('workspace:server');
var http = require('http');
var socketio = require('socket.io');
var port = normalizePort(process.env.PORT || 3000);
var server = http.createServer(app);
var io = socketio.listen(server);

/**
 * Database
const url = <url database>
mongoose.connect(url,(err)=>{
	if(err)
		console.log(err);
	console.log('Da ket noi ket noi thanh cong!!!!');
})*/
/**
 * Use, Set
 */
app.use((0, _morgan2.default)("dev"));
app.set("views", _path2.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', port);
app.use(_express2.default.static(_path2.default.join(__dirname, "public")));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  var err = new Error('Not Found!');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/**
 * API
 */
/**
 * Socket IO
 */
(0, _routerexam2.default)(app);
/**
 * Socket IO
 */
io.sockets.on('connection', function (socket) {
  console.log('Co nguoi ket noi bang socket : ' + socket.id);
  socket.on("disconnect", function () {
    console.log(socket.id + " da ngat ket noi Server");
  });
});
/**
 * Setup Dev
 */
server.listen(port, function () {
  console.log('Server dang hoat dong nhe!!!! port : ' + port);
});

// server lang nghe

server.on('error', onError);
server.on('listening', onListening);

// method
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
exports.default = app;
//# sourceMappingURL=app.js.map