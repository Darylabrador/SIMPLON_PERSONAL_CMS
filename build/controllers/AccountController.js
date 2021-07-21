"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountController = /** @class */ (function () {
    function AccountController() {
    }
    AccountController.getAccount = function () {
        var accountList = [
            { name: 'daryl' },
            { name: 'john' },
            { name: 'alix' },
        ];
        return accountList;
    };
    return AccountController;
}());
exports.default = AccountController;
