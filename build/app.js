"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = __importDefault(require("./core/server/Server"));
var Routes_1 = __importDefault(require("./routers/Routes"));
Routes_1.default.build();
Server_1.default.start();
