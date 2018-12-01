var something = /** @class */ (function () {
    function something() {
        this.bankId = '123';
        this.newBankId = 123;
    }
    Object.defineProperty(something.prototype, "fullName", {
        get: function () {
            return this.bankId;
        },
        set: function (bnk) {
            this.bankId = bnk;
        },
        enumerable: true,
        configurable: true
    });
    return something;
}());
var anything = /** @class */ (function () {
    function anything() {
        this.some = new something();
    }
    anything.prototype.fun = function () {
        return this.some.fullName = '123';
    };
    return anything;
}());
var nopes = new anything();
var y = nopes.fun();
console.log(y);
