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
const MAX_HRS_IN_A_MONTH = 160;

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

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalHrs = 0;
let totalDays = 0;
let empDailyWageArr = new Array();

while(totalHrs < MAX_HRS_IN_A_MONTH && totalDays < NUM_OF_WORKING_HOURS) {
    totalDays++;
    let empCheck = Math.floor(Math.random() * 10) & 3;
    let empHrs = getEmployeeHrs(empCheck);
    totalHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let employeeWage =  calcDailyWage(totalHrs);
console.log("Total days: ",totalDays," Total hours: ",totalHrs," Employee wage: ", employeeWage);

//uc7a
let totalEmployeeWage = 0;
function sum(dailyWage) {
    totalEmployeeWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total days: ",totalDays," Total hours: ",totalHrs," Employee wage: ", totalEmployeeWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Employee wage with reduce: ", empDailyWageArr.reduce(totalWages, 0));

//uc7b
let dailyCnt = 0;
function mapWithDailyWage(dailyWage) {
    dailyCnt++;
    return dailyCnt + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapWithDailyWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

//uc7c
function fullTimeWage(dailyWage) {
    return dailyWage.includes(160);
}

let fullTimeWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Full time Wage Array: ", fullTimeWageArr);

//uc7d
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("First full time wage was earned on Day: ", mapDayWithWageArr.find(findFullTimeWage));

//uc7e
function isAllFullTime(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Are all days full time?",mapDayWithWageArr.every(isAllFullTime));

//uc7f
function isAllPartTime(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Are any days part time?",mapDayWithWageArr.some(isAllPartTime));