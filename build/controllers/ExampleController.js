"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExampleController = /** @class */ (function () {
    function ExampleController() {
    }
    ExampleController.prototype.getIndexPage = function () {
        return {
            payload: { title: "Page d'accueil" },
            view: 'template'
        };
    };
    ExampleController.prototype.getContactpage = function () {
        return {
            payload: { title: "Page de contact" },
            view: 'template',
        };
    };
    return ExampleController;
}());
exports.default = ExampleController;
