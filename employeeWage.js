
var emp_rate_per_hr = 20;
var is_full_time = 1;
var is_part_time =2;
var no_of_days = 20;
var max_working_Hrs = 100;
var empHrs =0, empWage =0,totalempHrs=0,totalEmpwage =0 , totalWorkingDays =0;
while(totalempHrs<=max_working_Hrs && totalWorkingDays<no_of_days){
    var empcheck =  Math.floor(Math.random()*3);
switch(empcheck){
    case is_full_time:
    empHrs =8;
    totalWorkingDays ++ ;
    break;
    
    case is_part_time:
        empHrs = 4;
        totalWorkingDays ++ ;
        break;
         
    default :
    totalWorkingDays ++;
    empHrs =0;
    break;
}
empWage = emp_rate_per_hr * empHrs;
totalempHrs += empHrs;
console.log("Working day "+totalWorkingDays+" : employee work "+empHrs+" hour employee wage "+empWage);
}
totalEmpwage = totalempHrs * emp_rate_per_hr ;
console.log("Montly employee wage  "+totalEmpwage);
