var totalItems: any = 0;
var cartList : any = [];
function addToCart(item): void{
    totalItems = totalItems + 1;
    document.getElementById("totalItems").innerHTML = totalItems;
    var cartItem = document.getElementById(item);
    var parent = cartItem.parentElement;
    var itemName = parent.getElementsByTagName("h5").item(0).innerHTML;
    var itemPrice = parseInt(parent.getElementsByTagName("p").item(0).innerHTML);

    let dataObj = {
        dataName: itemName,
        dataPrice: itemPrice
    };

    cartList.push(dataObj);
    console.log(cartList);
}


function saveToSession(): void {
    sessionStorage.myObject = JSON.stringify(cartList);
}