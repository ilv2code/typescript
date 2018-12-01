var Plant = /** @class */ (function () {
    function Plant() {
        //getters and setters are applied for private variables only
        this._species = "DEFAULT";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "DEFAULT";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
var x = plant.species = "Lilly";
console.log(x);
var y = plant.species = "hj";
console.log(y);
