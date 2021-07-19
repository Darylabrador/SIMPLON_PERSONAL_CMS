"use strict";
var fs = require('fs');
/**
 * Simplification du routage de app.js
 * @param {object} req
 * @param {object} res
 */
var requestHandler = function (req, res) {
    var url = req.url;
    var method = req.method;
    if (url === "/") {
        res.write('<html>');
        res.write('<head> <title> CMS </title></head>');
        res.write('<body><p> Mon CMS </p></body>');
        res.write('</html>');
        return res.end();
    }
};
exports.handler = requestHandler;
