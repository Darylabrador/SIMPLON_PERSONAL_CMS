"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayTemplate_1 = __importDefault(require("../core/templating/DisplayTemplate"));
var Routing_1 = __importDefault(require("../core/routing/Routing"));
/**
 * General router handler
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
var routerHandler = function (request, response) {
    var route = new Routing_1.default();
    route.add('/', "Page d'accueil", 'index', 'GET');
    route.add('/contact', "Page de contact", 'contact', 'GET');
    var existingRoute = route.routes.find(function (element) { return element.url == request.url; });
    if (existingRoute) {
        if (existingRoute.method == "GET") {
            var entries = { title: existingRoute.title };
            var output = new DisplayTemplate_1.default(existingRoute.template, entries);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(output.render());
            return response.end();
        }
    }
    else {
        var output = new DisplayTemplate_1.default("error", {});
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(output.render());
        return response.end();
    }
};
exports.default = routerHandler;
