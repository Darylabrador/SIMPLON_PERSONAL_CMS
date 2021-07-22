"use strict";
/**
 * Example controller
 * That's controller return a string html thanks to viewer & response class
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Viewer_1 = __importDefault(require("../../core/templating/Viewer"));
var ExampleController = /** @class */ (function () {
    function ExampleController() {
    }
    ExampleController.getSettings = function () {
        return Viewer_1.default.render('template', { title: "Setting page" });
    };
    return ExampleController;
}());
exports.default = ExampleController;
