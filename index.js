"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataSource_1 = require("./DataSource");
exports.DataSource = DataSource_1.default;
function data(target, propertyKey) {
    if (!target.__data) {
        target.__data = [];
    }
    target.__data.push(propertyKey);
}
exports.data = data;
function action(target, propertyKey) {
    if (!target._actions) {
        target._actions = [];
    }
    target._actions.push(propertyKey);
}
exports.action = action;
