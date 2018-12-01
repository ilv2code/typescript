var Restaurant = /** @class */ (function () {
    function Restaurant(name, place, rating) {
        this.name = name;
        this.place = place;
        this.rating = rating;
        this.name = name;
        this.place = place;
        this.rating = rating;
    }
    Restaurant.prototype.display = function () {
        return "Welcome to " + this.name + " in " + this.place + " which is having " + this.rating + " rating!";
    };
    Restaurant.info = function () {
        console.log("Hey Hello!");
        //  this.info();
    };
    return Restaurant;
}());
var restaurant = new Restaurant("GrandInn", "Hitech-City", 5);
console.log(restaurant.display());
//restaurant.info(); //we cannot create instance for this outside the class
Restaurant.info();
