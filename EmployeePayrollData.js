class EmployeePayrllData {
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(name)) this._name = name;
        else throw 'Name is incorrect';
    }

    

    toString() {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "not defined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name: "+this.name + ", salary: " + this.salary
        + ", gender: "+this.gender+", startDate: "+empDate;
    }
} 

let employeePayrllData  = new EmployeePayrllData(1, "Mark", 30000);
employeePayrllData.id = 0;
try {
    employeePayrllData.name = 'Jef';
    console.log("employeePayrllData: "+employeePayrllData.toString());
}
catch (e) {
    console.error(e);
}

let newEmployeePayrllData  = new EmployeePayrllData(1, "Terissa", 30000, 'f', new Date());
console.log("employeePayrllData: "+newEmployeePayrllData.toString());