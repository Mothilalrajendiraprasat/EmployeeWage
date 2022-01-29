
var emp_rate_per_hr = 20;
var empHrs =0, empWage =0;
var is_full_time = 1;
var is_part_time =2;
 // random to compute the value of random number rang of 2 number
var empcheck =  Math.floor(Math.random()*3);
switch(empcheck){
    case is_full_time:
    empHrs =8;
    break;
    
    case is_part_time:
        empHrs = 4;
        break;
         
    default :
    empHrs =0;

}
 // daily wage give the employee rate per hour 20 and the emp hour 8 of day comput
empWage = emp_rate_per_hr * empHrs;
console.log("Daily wage of employee is "+empWage);
