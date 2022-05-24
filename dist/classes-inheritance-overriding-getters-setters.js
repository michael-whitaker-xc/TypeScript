"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`This department is ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("Number of employees: " + this.employees.length);
        console.log(this.employees);
    }
}
class Employee {
    constructor(n) {
        this.name = n;
        this.startDate = new Date();
    }
}
const hrDept = new Department("Human Resources");
console.log("Department = " + hrDept.name);
hrDept.describe();
hrDept.addEmployee(new Employee("Max"));
hrDept.addEmployee(new Employee("Manuel"));
hrDept.name = "HR";
hrDept.printEmployeeInformation();
class Department2 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
}
let thisDept = new Department2("Skunk Workx", 666);
console.log(thisDept.name);
class ITDept extends Department {
    constructor() {
        super("IT");
        this.administrator = "";
    }
    setAdmin(n) {
        this.administrator = n;
    }
    getAdmin() {
        return this.administrator;
    }
}
const theItCrowd = new ITDept();
theItCrowd.addEmployee(new Employee("John"));
theItCrowd.addEmployee(new Employee("Jeff"));
theItCrowd.addEmployee(new Employee("Anna"));
theItCrowd.addEmployee(new Employee("Brett"));
theItCrowd.setAdmin("Michael");
console.log(`The admin of the '${theItCrowd.name}' department is ${theItCrowd.getAdmin()}`);
class AccountingDept extends Department {
    constructor(name, reports) {
        super(name);
        this.reports = reports;
    }
    addEmployee(employee) {
        if (employee.name == "Max") {
            return;
        }
        this.employees.push(employee);
    }
}
class MarketingDept extends Department {
    constructor(name, reports) {
        super(name);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        return this.lastReport;
    }
    set mostRecentReport(report) {
        this.lastReport = report;
        this.reports.push(report);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const marketingDept = new MarketingDept('Marketing', ['report', 'kudhfgok']);
marketingDept.mostRecentReport = 'this report';
console.log(marketingDept.mostRecentReport);
//# sourceMappingURL=classes-inheritance-overriding-getters-setters.js.map