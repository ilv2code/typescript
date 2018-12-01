//we have another modifier call READONLY
class Family{
    readonly name:string;
    readonly members:number;
    constructor(name:string,members:number){
        this.name=name;
        this.members=members;
    }
    display(){
        return `${this.name} & ${this.members}`
    }
}
let family = new Family("Yarlagadda",4);
console.log(family);
// as it is a readonly property we cannot overwrite the value
// family.name="Kamineni";
