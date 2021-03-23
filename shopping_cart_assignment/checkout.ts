var data = JSON.parse(sessionStorage.myObject);
var sum = 0;

for (var i = 0; i < data.length; i++) {
    var table = document.getElementById("cartList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data[i].dataName;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data[i].dataPrice;

    sum += parseInt(data[i].dataPrice);
}

document.getElementById("totalPrice").innerHTML = sum.toString();