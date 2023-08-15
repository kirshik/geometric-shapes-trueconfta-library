"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.interact = function () {
        return 'Interacting with circle';
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.getDiameter = function () {
        return this.radius * 2;
    };
    return Circle;
}());
exports.Circle = Circle;
