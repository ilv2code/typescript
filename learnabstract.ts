//abstract classes cannot be instantiated directly 
//why..?? may be bcoz these classes which are declared as abstract need not be instantiated
//these provides some basic set up thats all 
abstract class Employee{
    empName:string = "Default!";
    salary:number = 1010;
//we dont have a function body and it just say what it should return,
//defines only how the function should look like

    abstract info(empName:string,salary:number):void;

//for non abstract we need to provide body(functionality)
display(){
      return this.empName;
    }
}
//we can only inherite from absract classes....
//all of the abstract methods are supposed to be defined in derived class --its a must
class Emp1 extends Employee{
    info(empName:string,salary:number){
        this.empName=empName;
        this.salary=salary;
        console.log(`${this.empName} & ${this.salary}`);
     }
}
class Emp2 extends Employee{
    info(empName:string){
        this.empName=empName;
        console.log(`${this.empName}`);
        
    }
}
let emp1 = new Emp1();
console.log(emp1);
emp1.info("Yashu",50000);
emp1.info("Sam",20000);
emp1.info("Ram",30000);
emp1.info("Geetha",60000);
let emp2=new Emp2();
emp2.info("Hari");

//non-abstract cannot be over ridden but abstract can be over ridden
console.log(emp1.display());
console.log(emp1.display());
console.log(emp1.display());








