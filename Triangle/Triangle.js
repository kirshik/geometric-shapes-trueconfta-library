"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return (this.base * this.height) / 2;
    };
    Triangle.prototype.interact = function () {
        return 'Interacting with triangle';
    };
    Triangle.prototype.getBase = function () {
        return this.base;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
