"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router_1 = __importDefault(require("../core/routing/Router"));
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.build = function () {
        Router_1.default.get('/', function () {
            return {
                view: 'template',
                payload: { title: "Page d'accueil" }
            };
        });
        Router_1.default.get('/contact', function () {
            return {
                payload: { title: "Contact page" }
            };
        });
    };
    return Routes;
}());
exports.default = Routes;
