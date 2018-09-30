"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlackHoleObject = Proxy.bind(null, function () { return this; }, {
    get: function (_target, _property, receiver) {
        return receiver;
    },
});
exports.default = BlackHoleObject;
