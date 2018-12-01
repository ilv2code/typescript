//we have another modifier call READONLY
var Family = /** @class */ (function () {
    function Family(name, members) {
        this.name = name;
        this.members = members;
    }
    Family.prototype.display = function () {
        return this.name + " & " + this.members;
    };
    return Family;
}());
var family = new Family("Yarlagadda", 4);
console.log(family);
