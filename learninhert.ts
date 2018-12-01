class Company {
    //data members
    companyName:string;
    //member functions
    //instantiating class
    companyInfo(companyName:string){
        this.companyName=companyName;
        return `I works for ${this.companyName}!`
    }
}
class Employee extends Company{
    empName:string;
    
    empInfo():void{
       this.empName="Yashu"
       console.log(`Hey!This is ${this.empName} works ${this.companyName}`);
        
    }
}
//instance created for child class which inhereted the properties of parents
//class.....
let employee = new Employee();
let eInfo=employee.companyInfo("FaceBook");
console.log("CompanyInformation: "+eInfo);
employee.empInfo();


