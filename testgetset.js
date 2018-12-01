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
var Stud1 = /** @class */ (function () {
    function Stud1(name, age) {
        this.name = name;
        this.age = age;
    }
    Stud1.prototype.display = function () {
        return this.name + " " + this.age;
    };
    return Stud1;
}());
var Stud2 = /** @class */ (function (_super) {
    __extends(Stud2, _super);
    function Stud2(name, age, sName) {
        var _this = _super.call(this, name, age) || this;
        _this.sName = sName;
        return _this;
    }
    return Stud2;
}(Stud1));
var stud2 = new Stud2("Yashu", 26, "Kittu");
console.log(stud2.name);
