class Flower{
    private name:string;
    //protected data members or member functions
    //are allowed to use in derived class only 
    protected message:string;
    constructor(name:string,message:string){
        this.name=name;
        this.message=message;
    }
    private info(){
        return `Hey! ${this.name}!`
    }
    hey():void{
        console.log(`Hello ${this.name}!`);
        
    }
}
class color extends Flower{
    constructor(name:string,message:string){
        super(name,message);

    }
    display(){
        //not possible as this is a private member of base class....
        // this.info();
        return this.message;
    }
}
let flower = new Flower("Lilly","Hey Darling!");
console.log(flower);
flower.hey();
