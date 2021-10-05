{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2
    if(empCheck == IS_ABSENT) {
        console.log('UC1- Employee is Absent');
    }
    else
        console.log('UC1- Employee is Present');
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR =  20;
const NUM_OF_WORKING_HOURS = 20;

function getEmployeeHrs(empcheck) {
    switch(empcheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return  FULL_TIME_HOURS;
            break;
        default:
            return  0;
    }
}

let totalHrs = 0;
for(let day=0; day < NUM_OF_WORKING_HOURS; day++) {
    let empCheck = Math.floor(Math.random() * 10) & 3;
    totalHrs += getEmployeeHrs(empCheck);
}
let totalEmployeeWage =  totalHrs * WAGE_PER_HOUR;
console.log("Toal hours: ",totalHrs," Employee wage: ", totalEmployeeWage);