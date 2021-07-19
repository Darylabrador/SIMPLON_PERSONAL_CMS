"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var defaultRouter_1 = __importDefault(require("./routers/defaultRouter"));
var port = 3000;
var server = http_1.createServer(defaultRouter_1.default);
server.listen(port);
