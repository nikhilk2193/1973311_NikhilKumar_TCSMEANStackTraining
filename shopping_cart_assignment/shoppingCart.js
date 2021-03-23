var totalItems = 0;
var cartList = [];
function addToCart(item) {
    totalItems = totalItems + 1;
    document.getElementById("totalItems").innerHTML = totalItems;
    var cartItem = document.getElementById(item);
    var parent = cartItem.parentElement;
    var itemName = parent.getElementsByTagName("h5").item(0).innerHTML;
    var itemPrice = parseInt(parent.getElementsByTagName("p").item(0).innerHTML);
    var dataObj = {
        dataName: itemName,
        dataPrice: itemPrice
    };
    cartList.push(dataObj);
    console.log(cartList);
}
function saveToSession() {
    sessionStorage.myObject = JSON.stringify(cartList);
}
//# sourceMappingURL=shoppingCart.js.map