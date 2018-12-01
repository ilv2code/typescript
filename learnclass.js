var Student = /** @class */ (function () {
    //instantiating above class with help of constructor
    function Student(name, age, dept) {
        this.name = name;
        this.age = age;
        this.dept = dept;
    }
    //member functions
    Student.prototype.studentinfo = function () {
        return "Hey this is" + this.name + "from" + this.dept + "of age" + this.age + ".";
    };
    Student.prototype.studentdis = function () {
        console.log("Hey I am From Vizag!");
    };
    return Student;
}());
//creating instance of class 
var student = new Student("Yashu", 26, "ComputerScience");
console.log(student);
console.log(student.studentinfo());
student.studentdis();
// console.log(dis);
