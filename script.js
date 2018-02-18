var items = [];
var prices = [];

function addToBasket(){
  var boxes = document.querySelectorAll("input");
  // console.log(boxes);
  for (var i=0; i<boxes.length; ++i){
    if (boxes[i].checked === true){
      //console.log("box checked");
      //console.log(boxes[i].name);
      items.push(boxes[i].name);
      prices.push(Number(boxes[i].value));
    }
  }
  //console.log(items);
  //console.log(prices);
  //console.log(prices.length)

}

function total(){
   var totalPrice = 0;
   for (var i=0; i<prices.length; ++i){
     //console.log(prices[i]);
     totalPrice = totalPrice + prices[i];
  }
  //console.log(totalPrice);
  return totalPrice
}


function showBasket(){
  var ptags = document.getElementsByTagName('p');
  ptags[0].style.display = "none";

  var instruction = document.getElementsByTagName('h2');
  instruction[0].style.display="none";

var urorder = document.createElement("aside");
urorder.innerHTML = "Your order: ";
document.body.appendChild(urorder);

for (var i = 0 ; i<items.length ; ++i){
  var bask = document.createElement("div");
  bask.innerHTML = items[i] + "   $ " + prices[i];
  document.body.appendChild(bask);
}

var tot = document.createElement("section");
tot.innerHTML = "Total: $ " + total();
document.body.appendChild(tot);

}
