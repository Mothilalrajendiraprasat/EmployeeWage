


var emp_rate_per_hr = 20;
var empHrs =0, empWage =0;
var is_full_time = 1;
var is_part_time =2;
var no_of_days = 20;
for(i=0;i<=no_of_days;i++){
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
    break;

}
empWage = emp_rate_per_hr * empHrs;
console.log("Daily wage of employee is "+empWage);
}
