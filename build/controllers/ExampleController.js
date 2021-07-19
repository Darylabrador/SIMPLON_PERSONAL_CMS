"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExampleController = /** @class */ (function () {
    function ExampleController() {
    }
    ExampleController.prototype.getIndexPage = function () {
        return {
            url: '/',
            payload: { title: "Page d'ccueil" },
            view: 'template',
            method: 'GET'
        };
    };
    ExampleController.prototype.getContactpage = function () {
        return {
            url: '/contact',
            payload: { title: "Page de contact" },
            view: 'template',
            method: 'GET'
        };
    };
    return ExampleController;
}());
exports.default = ExampleController;
