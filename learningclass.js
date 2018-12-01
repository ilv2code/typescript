var Wishes = /** @class */ (function () {
    function Wishes(message) {
        this.greeting = message;
    }
    Wishes.prototype.greet = function () {
        return this.greeting;
        console.log(this.greet);
    };
    return Wishes;
}());
var wishes = new Wishes("Good Morning!");
console.log(wishes);
var wishes1 = new Wishes("Hey Buddy!");
console.log(wishes1);
