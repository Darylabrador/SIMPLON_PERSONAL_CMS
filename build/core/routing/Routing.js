"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
[];
var Routing = /** @class */ (function () {
    function Routing() {
        this.routes = [];
        this.routes = [];
    }
    Routing.prototype.add = function (url, payload, view, method) {
        var urlExist = this.routes.find(function (element) { return element.url === url; });
        if (!urlExist)
            this.routes.push({ url: url, payload: payload, view: view, method: method });
    };
    Routing.prototype.remove = function (url) {
        var filteredUrl = this.routes.filter(function (element) { return element.url != url; });
        this.routes = filteredUrl;
    };
    Routing.prototype.addFromController = function (payload) {
        var urlExist = this.routes.find(function (element) { return element.url === payload.url; });
        if (!urlExist)
            this.routes.push(__assign({}, payload));
    };
    Routing.prototype.deleteAll = function () {
        this.routes = [];
    };
    return Routing;
}());
exports.default = Routing;
