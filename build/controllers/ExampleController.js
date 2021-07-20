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
        var data = {
            name: "John",
            surname: "DOE",
            email: "johndoe@gmail.com"
        };
        Viewer_1.default.renderAPI(data);
    };
    ExampleController.getSettings = function () {
        Viewer_1.default.render('template', { title: "Setting page" });
    };
    return ExampleController;
}());
exports.default = ExampleController;
