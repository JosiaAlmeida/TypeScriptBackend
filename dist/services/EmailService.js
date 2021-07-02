"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SendEmail = /** @class */ (function () {
    function SendEmail() {
    }
    SendEmail.prototype.messageEmail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email enviado para " + to.name + ": " + message.body);
    };
    return SendEmail;
}());
exports.default = SendEmail;
