// JavaScript source code

var sessionBudgetObj = [];

function addFormData() {
    var data = readFormData();
    sessionBudgetObj.push(data); 
    sessionStorage.myObject = JSON.stringify(sessionBudgetObj);
    clearData();
}
    

function readFormData() {
    var budgetObj = {}
    budgetObj.clientName = document.getElementById("clientName").value;
    budgetObj.projectName = document.getElementById("projectName").value;
    budgetObj.budget = document.getElementById("budget").value;
    return budgetObj;
}

function clearData() {
    document.getElementById("clientName").value = "";
    document.getElementById("projectName").value = "";
    document.getElementById("budget").value = "";
}