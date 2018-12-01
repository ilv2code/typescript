// class Hello{
//     fullName:string;
// }
// let hello = new Hello();
// hello.fullName="Yashu";
// if(hello.fullName){
//     console.log(hello.fullName);
// }
var password = "Hello Kittu!";
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "Fname", {
        get: function () {
            return this.fullName;
        },
        set: function (newName) {
            if (password && password == "Hello Kittu!") {
                this.fullName = newName;
            }
            else {
                console.log("Authorised Error!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User();
user.Fname = "Yashu";
console.log(user.Fname);
