function StringSearch() {
    let Name = document.getElementById("Name").value;
 
if (Name.length>2){
}
else {
    document.getElementById('v1').innerHTML = "user name should be longer than 2 characters";
}

let Birthday = document.getElementById("Birthday").value;
if(Birthday ==""){
    document.getElementById('v2').innerHTML = "birthday may not be null";
}


let Salary = document.getElementById("DesiredSalary").value;
Salary = parseInt(Salary) 
if (Salary<10000){
    document.getElementById('v3').innerHTML = "Salary must be greater than 10,000";
}
else if (Salary>16000){
    document.getElementById('v3').innerHTML = "Salary must be less than 16,000";

}


    let Phone = document.getElementById("Phone").value;
if (Phone.length>10){
    document.getElementById('v4').innerHTML = "phone must be 10 digits long";

}
else if (Phone.length<10){
    document.getElementById('v4').innerHTML = "phone must be 10 digits long";

}
}