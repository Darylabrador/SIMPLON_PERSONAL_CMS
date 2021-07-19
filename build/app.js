"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigServer_1 = __importDefault(require("./core/server/ConfigServer"));
var Router_1 = __importDefault(require("./routers/Router"));
var server = new ConfigServer_1.default(3000);
server.init(Router_1.default);
