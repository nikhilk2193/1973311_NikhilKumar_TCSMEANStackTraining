// JavaScript source code

var data = JSON.parse(sessionStorage.myObject);
var sum = 0;

for (var i = 0; i < data.length; i++) {

    var table = document.getElementById("budgetList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length); 
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data[i].clientName;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data[i].projectName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data[i].budget; 
    sum += parseInt(data[i].budget);
}

document.getElementById("budget").innerHTML = sum;
