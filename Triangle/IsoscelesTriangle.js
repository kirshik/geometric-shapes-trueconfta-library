"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsoscelesTriangle = void 0;
var Triangle_1 = require("./Triangle");
var IsoscelesTriangle = /** @class */ (function (_super) {
    __extends(IsoscelesTriangle, _super);
    function IsoscelesTriangle(base, height) {
        return _super.call(this, base, height) || this;
    }
    IsoscelesTriangle.prototype.interact = function () {
        return 'Interacting with isosceles triangle';
    };
    IsoscelesTriangle.prototype.getLegLength = function () {
        return this.getBase();
    };
    return IsoscelesTriangle;
}(Triangle_1.Triangle));
exports.IsoscelesTriangle = IsoscelesTriangle;
