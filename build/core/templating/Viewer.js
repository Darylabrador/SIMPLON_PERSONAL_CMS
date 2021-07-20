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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ejs = __importStar(require("ejs"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var ConfigServer_1 = __importDefault(require("../server/ConfigServer"));
var Viewer = /** @class */ (function () {
    function Viewer() {
    }
    Viewer.render = function (filename, entries) {
        var response = ConfigServer_1.default.getResponse();
        var rootFolder = path.resolve('./');
        var templatePath = path.join(rootFolder, 'build', 'views', filename + ".ejs");
        var values = __assign({}, entries);
        var template = fs.readFileSync(templatePath, 'utf8');
        var output = ejs.render(template, values);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(output);
        return response.end();
    };
    Viewer.renderAPI = function (entries) {
        var response = ConfigServer_1.default.getResponse();
        response.setHeader('Content-Type', 'application/json');
        return response.end(JSON.stringify(__assign({}, entries)));
    };
    return Viewer;
}());
exports.default = Viewer;
