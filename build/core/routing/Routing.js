"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
[];
var Routing = /** @class */ (function () {
    function Routing() {
        this.routes = [];
        this.routes = [];
    }
    Routing.prototype.add = function (url, title, template, method) {
        var urlExist = this.routes.find(function (element) { return element.url === url; });
        if (!urlExist)
            this.routes.push({ url: url, title: title, template: template, method: method });
    };
    Routing.prototype.remove = function (url) {
        var filteredUrl = this.routes.filter(function (element) { return element.url != url; });
        this.routes = filteredUrl;
    };
    Routing.prototype.deleteAll = function () {
        this.routes = [];
    };
    return Routing;
}());
exports.default = Routing;
