"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Viewer_1 = __importDefault(require("../core/templating/Viewer"));
var ExampleController = /** @class */ (function () {
    function ExampleController() {
    }
    ExampleController.getAccount = function () {
        Viewer_1.default.render('template', { title: "account" });
    };
    ExampleController.getSettings = function () {
        Viewer_1.default.renderAPI({ title: "Settings" });
    };
    return ExampleController;
}());
exports.default = ExampleController;
