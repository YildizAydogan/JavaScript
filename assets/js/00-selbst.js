var productName=  prompt("1. Urunun Adi");
var productAmount=Number(prompt("1. Urunun Adet"));
var productPrice= Number(prompt("1. Urunun Fiyati"));


 var productName2=prompt("2. Urunun Adi");
 var productAmount2=Number(prompt("2. Urunun Adet"));
 var productPrice2= Number(prompt("2. Urunun Fiyati"));



// var totalPrice=productAmount + productPrice;
// console.log(totalPrice);
// alert("1. Urunun Fiyati: " + (productAmount  * productPrice));



var product1={
name: productName,
amount: productAmount,
price: productPrice,
totalPrice: (productAmount * productPrice)


};


var product2={
    name: productName2,
    amount: productAmount2,
    price: productPrice2,
    totalPrice: (productAmount2 * productPrice2)  
    };
    

 var order=[product1, product2];
    // console.log(order); bunu yazdirdigimda console da product1 ve 2 nin girilen tum degerlerinin array seklinde yazimini gordum
  
 var orderTotalPrice = orderTotalPriceCalculate(order);
    
    //alert(orderTotalPrice);  
document.getElementById("urunAdi1").innerText=
product1.name;
document.getElementById("urunAdet1").innerText=
product1.amount;
document.getElementById("urunFiyat1").innerText=
product1.price;
document.getElementById("urunToplamFiyat1").innerText=
product1.totalPrice;


document.getElementById("urunAdi2").innerText=
product2.name;
document.getElementById("urunAdet2").innerText=
product2.amount;
document.getElementById("urunFiyat2").innerText=
product2.price;
document.getElementById("urunToplamFiyat2").innerText=
product2.totalPrice;


document.getElementById("orderTotalPrice").innerText =
"Sepet Toplam Fiyati : " + orderTotalPrice;


 function orderTotalPriceCalculate(order){

let totalPrice= 0 ;
order.forEach(function(item){  //item, index deyip direk indexini de getiririm
totalPrice += item.totalPrice;

});


return totalPrice;
    }
   
