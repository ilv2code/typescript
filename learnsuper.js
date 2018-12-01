var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//base class
var Flower = /** @class */ (function () {
    function Flower(name, color) {
        this.name = name;
        this.color = color;
    }
    //member functions
    Flower.prototype.info = function (name, color) {
        return "This flower " + this.name + " is of color " + this.color;
    };
    ;
    return Flower;
}());
//child class 
var Rose = /** @class */ (function (_super) {
    __extends(Rose, _super);
    function Rose(name, color) {
        return _super.call(this, name, color) || this;
    }
    Rose.prototype.rinfo = function () {
        return this.info;
    };
    return Rose;
}(Flower));
var flower = new Flower("lilly", "white");
console.log(flower);
var flower1 = new Flower("lotus", "pink");
console.log(flower1);
var rose = new Rose("lilly", "Red");
console.log(rose);
// let r=rose.info("lotus","Red");
var rose2 = new Rose("Rose", "Purple");
console.log(rose2);
