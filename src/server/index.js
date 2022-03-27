"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use(express_1["default"].static('dist'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
app.listen('5000', function () {
    console.log("\n  ################################################\n  \uD83D\uDEE1\uFE0F  Server listening on port: 5000\uD83D\uDEE1\uFE0F\n  ################################################\n");
});
