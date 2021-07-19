const fs = require('fs');

/**
 * Simplification du routage de app.js
 * @param {object} req 
 * @param {object} res 
 */
const requestHandler = (req, res) => {
    const url    = req.url;
    const method = req.method;

    if (url === "/") {
        res.write('<html>');
        res.write('<head> <title> CMS </title></head>');
        res.write('<body><p> Mon CMS </p></body>');
        res.write('</html>');
        return res.end();
    }
};

exports.handler = requestHandler;