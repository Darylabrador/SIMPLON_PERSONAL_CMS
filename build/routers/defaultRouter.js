"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayTemplate_1 = __importDefault(require("../utils/DisplayTemplate"));
/**
 * General router handler
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
var routerHandler = function (request, response) {
    switch (request.url) {
        case '/': {
            if (request.method === 'GET') {
                var entries = { title: "mon titre via ejs" };
                var output = new DisplayTemplate_1.default("index", entries);
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(output.render());
                return response.end();
            }
            break;
        }
        default: {
            response.statusCode = 404;
            response.end();
        }
    }
};
exports.default = routerHandler;
