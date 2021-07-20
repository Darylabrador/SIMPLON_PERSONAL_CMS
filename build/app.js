"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigServer_1 = __importDefault(require("./core/server/ConfigServer"));
var Routes_1 = __importDefault(require("./routers/Routes"));
Routes_1.default.build();
ConfigServer_1.default.start();
