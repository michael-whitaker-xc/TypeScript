///////////////////////////////////////////////////////////////
//////////////        class   ///////////////////////
///////////////////////////////////////////////////////////////
class Department {
  name: string;
  protected employees: Employee[] = []; //making it protected makes it available to classes which inherit from this class.

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log(`This department is ${this.name}`);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("Number of employees: " + this.employees.length);
    console.log(this.employees);
  }
}

class Employee {
  name: string;
  startDate: Date;

  constructor(n: string) {
    this.name = n;
    this.startDate = new Date();
  }
}

const hrDept = new Department("Human Resources");
console.log("Department = " + hrDept.name);

hrDept.describe();

hrDept.addEmployee(new Employee("Max"));
hrDept.addEmployee(new Employee("Manuel"));
// hrDept.employees.push(new Employee("Anna"));//will fail because the employees array is private.
hrDept.name = "HR";

hrDept.printEmployeeInformation();

class Department2 {
  private employees: Employee[] = [];

  constructor(public name: string, private readonly id: number) {
    //   this.name = name;
    //   this.id = id;
  }
  //a different way to declare the initial variables is to only put them in the constructor
}

let thisDept = new Department2("Skunk Workx", 666);
console.log(thisDept.name);

///////////////////////////////////////////////////////////////
//////////////        inheritance   ///////////////////////
///////////////////////////////////////////////////////////////

class ITDept extends Department {
  private administrator: string = "";
  constructor() {
    super("IT"); //this uses the constructor from the inherited class ad passes the name "IT"
  }

  setAdmin(n: string) {
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
console.log(
  `The admin of the '${theItCrowd.name}' department is ${theItCrowd.getAdmin()}`
);

///////////////////////////////////////////////////////////////
//////////////        Overriding   ////////////////////////
///////////////////////////////////////////////////////////////

class AccountingDept extends Department {
  constructor(name: string, private reports: string[]) {
    super(name);
  }

  addEmployee(employee: Employee): void {
    if (employee.name == "Max") {
      return;
    }
    this.employees.push(employee);
  }
}

///////////////////////////////////////////////////////////////
//////////////        getters/setters   ///////////////////////
///////////////////////////////////////////////////////////////
class MarketingDept extends Department {
  private lastReport: string;
  
  get mostRecentReport(){
    return this.lastReport;
  }

  set mostRecentReport(report: string){
    this.lastReport = report;
    this.reports.push(report);
  }

  constructor(name: string, private reports: string[]) {
    super(name);
    this.lastReport = reports[0];
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
}

const marketingDept = new MarketingDept('Marketing',['report','kudhfgok']);

marketingDept.mostRecentReport = 'this report';

console.log(marketingDept.mostRecentReport);

