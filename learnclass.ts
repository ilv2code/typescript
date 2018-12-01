class Student{
    //data members
    name:string;
    age:number;
    dept:string;
    //instantiating above class with help of constructor
    constructor(name:string,age:number,dept:string){
        this.name=name;
        this.age=age;
        this.dept=dept;
    }
    //member functions
    studentinfo(){
     return `Hey this is${this.name}from${this.dept}of age${this.age}.`
    }
    studentdis():any{
     console.log("Hey I am From Vizag!");
     
   }

}
//creating instance of class 
let student = new Student("Yashu",26,"ComputerScience");
console.log(student);
console.log(student.studentinfo());
student.studentdis();
// console.log(dis);

