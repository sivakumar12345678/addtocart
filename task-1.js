var x=0.00;
var y=0.00;
document.getElementById("count").innerText=x;
document.getElementById("count1").innerText=y;
//add to cart
function addtocart(value) {
 document.getElementById("count").innerHTML= value;
x=x+1;
document.getElementById("count").innerText=x;
//increament the value
document.getElementById("count1").innerHTML= value;
y=y+10.00;
document.getElementById("count1").innerText=y;

}
//remove to cart 
function removetocart(value) {
//remove to cart
if(x>0){
document.getElementById("count").innerHTML= value;
 x=x-1;
document.getElementById("count").innerText=x;

 }
//  else{
//  alert("cart is empty")
// }
 //remove to value
 
 if(y>0){

document.getElementById("count1").innerHTML= value;
y=y-10;
 document.getElementById("count1").innerText=y;
}
// else{
//  alert("cart is empt")
//  }
}

