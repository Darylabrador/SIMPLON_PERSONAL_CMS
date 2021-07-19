"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayTemplate_1 = __importDefault(require("../core/templating/DisplayTemplate"));
var Routing_1 = __importDefault(require("../core/routing/Routing"));
var ExampleController_1 = __importDefault(require("../controllers/ExampleController"));
/**
 * General router handler
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
var routerHandler = function (request, response) {
    var route = new Routing_1.default();
    var exampleController = new ExampleController_1.default();
    route.addFromController(exampleController.getIndexPage());
    route.addFromController(exampleController.getContactpage());
    route.add('/users', { title: "Page de la liste des utilisateurs" }, 'template', 'GET');
    route.add('/compte', { title: "Page de mon compte" }, 'template', 'GET');
    var existingRoute = route.routes.find(function (element) { return element.url == request.url; });
    if (existingRoute) {
        if (existingRoute.method == "GET") {
            var output = new DisplayTemplate_1.default(existingRoute.view, existingRoute.payload);
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
