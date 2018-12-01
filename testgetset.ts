class Stud1{
 
    constructor(public name:string,public age:number){
       
    }
    display(){
        return `${this.name} ${this.age}`
    }
}
class Stud2 extends Stud1{
    sName:string;
    constructor(name:string,age:number,sName:string){
        super(name,age);
        this.sName=sName;
    }
    
}
let stud2=new Stud2("Yashu",26,"Kittu");
console.log(stud2.name);

