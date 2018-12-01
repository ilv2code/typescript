var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = /** @class */ (function () {
    function Company() {
    }
    //member functions
    //instantiating class
    Company.prototype.companyInfo = function (companyName) {
        this.companyName = companyName;
        return "I works for " + this.companyName + "!";
    };
    return Company;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.empInfo = function () {
        this.empName = "Yashu";
        console.log("Hey!this is " + this.empName + " works " + this.companyName);
    };
    return Employee;
}(Company));
var employee = new Employee();
var eInfo = employee.companyInfo("FaceBook");
console.log("CompanyInformation: " + eInfo);
employee.empInfo();
