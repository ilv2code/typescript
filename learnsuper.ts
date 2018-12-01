//base class
class Flower{
    //data members
    name:string;
    color:string;
    constructor(name:string,color:string){
        this.name=name;
        this.color=color;
    }
    //member functions
    info(name:string,color:string){
        return `This flower ${this.name} is of color ${this.color}`
    };
}
//child class 
class Rose extends Flower{
    constructor(name:string,color:string){
        super(name,color);  
        
    }
    rinfo(){
       return this.info;
        
    }
}
let flower = new Flower("lilly","white");
console.log(flower);
let flower1 = new Flower("lotus","pink");
console.log(flower1);

let rose=new Rose("lilly","Red");
console.log(rose);

// let r=rose.info("lotus","Red");
let rose2 = new Rose("Rose","Purple")
console.log(rose2);





