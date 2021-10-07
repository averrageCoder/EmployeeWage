class EmployeePayrllData {
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {return this._name; }
    set name(name) {
        this._name = name;
    }

    toString() {
        return "id=" + this.id + ", name: "+this.name + ", salary: " + this.salary;
    }
} 

let employeePayrllData  = new EmployeePayrllData(1, "Mark", 30000);
employeePayrllData.id = 0;
employeePayrllData.name = 'Jeff';
console.log("employeePayrllData: "+employeePayrllData.toString());