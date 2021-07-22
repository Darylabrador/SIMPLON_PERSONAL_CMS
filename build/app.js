"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = __importDefault(require("./core/server/Server"));
var Routes_1 = __importDefault(require("./app/routers/Routes"));
var Api_1 = __importDefault(require("./app/routers/Api"));
Routes_1.default.build();
Api_1.default.build();
Server_1.default.start();
