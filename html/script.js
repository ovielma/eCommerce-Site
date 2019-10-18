
//********************************************/
/*USER INFORMATION FUNCTIONS START - *Jason */

function validatePhoneNumber(){
	var phoneNumberInfo = document.getElementById("pNumber").value;
	var phoneNumberValidation = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
	if( (phoneNumberInfo.match(phoneNumberValidation)))
	{
		return true;
	}
	else
	{
		alert("Phone Number is Invalid Format. Required format = xxx-xxx-xxxx");
		document.getElementById("userInfoForm").action = "UserInformation.html";
		return false;
	}
}

function validateEmailAddress() {
  var str = document.getElementById("emailUserInfo").value;
  var patt = new RegExp("@");
  var res = patt.test(str);
  if (res == true)
      {
          return true;
      }
    else {
        alert("The Email Address is Invalid. Email Address Needs '@' symbol to be valid.");
				document.getElementById("userInfoForm").action = "UserInformation.html";
        return false;
    }
}

function onClickUserInformation(){

	var inputFullName = document.getElementById("uname");
	localStorage.setItem("uname", inputFullName.value);

	var inputAddress1 = document.getElementById("a1name");
	localStorage.setItem("a1name", inputAddress1.value);

	var inputAddress2 = document.getElementById("a2name");
	localStorage.setItem("a2name", inputAddress2.value);

	var inputCity = document.getElementById("ctyname");
	localStorage.setItem("ctyname", inputCity.value);

	var inputStateName = document.getElementById("myStates");
	localStorage.setItem("myStates", inputStateName.value);

	var inputZipCode = document.getElementById("zname");
	localStorage.setItem("zname", inputZipCode.value);

	var inputPhoneNumber = document.getElementById("pNumber");
	localStorage.setItem("pNumber", inputPhoneNumber.value);

	var inputEmail= document.getElementById("emailUserInfo");
	localStorage.setItem("emailUserInfo", inputEmail.value);

	validatePhoneNumber();
	validateEmailAddress();
}

function sameAddress(){
	var sameAddress1 = localStorage.getItem("a1name");
	var sameAddress2 = localStorage.getItem("a2name");
	var sameCity = localStorage.getItem("ctyname");
	var sameState = localStorage.getItem("myStates");
	var sameZipCode = localStorage.getItem("zname");

	if (document.getElementById("checkbox-one").checked){
		alert("populating shipping info from user information");
    document.getElementById("address-1").value = sameAddress1;
		document.getElementById("address-2").value = sameAddress2;
		document.getElementById("city").value = sameCity;
		document.getElementById("state").value = sameState;
		document.getElementById("zip").value = sameZipCode;
	}

	if (document.getElementById("checkbox-two").checked){
		document.getElementById("address-1").value = "";
		document.getElementById("address-2").value = "";
		document.getElementById("city").value = "";
		document.getElementById("state").value = "";
		document.getElementById("zip").value = "";
		}

}

function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
		sameAddress();
}

function shippingSubmitFunction(){
	var shippingAddress1 = document.getElementById("address-1");
	localStorage.setItem("address-1", shippingAddress1.value);

	var shippingAddress2 = document.getElementById("address-2");
	localStorage.setItem("address-2", shippingtAddress2.value);

	var shippingCity = document.getElementById("city");
	localStorage.setItem("city", shippingCity.value);

	var shippingStateName = document.getElementById("state");
	localStorage.setItem("state", shippingStateName.value);

	var shippingZipCode = document.getElementById("zip");
	localStorage.setItem("zip", shippingZipCode.value);
	document.getElementById("address-1").value = shippingAddress1;
	document.getElementById("address-2").value = shippingAddress2;
	document.getElementById("city").value = shippingCity;
	document.getElementById("state").value = shippingState;
	document.getElementById("zip").value = shippingZipCode;
}
//******************************************/
/*USER INFORMATION FUNCTIONS END - *Jason */


/* function to calculate the sum of 4 numbers*/
function sumFunction(p1, p2, p3, p4) {
	parseFloat(p1);parseFloat(p2);parseFloat(p3);parseFloat(p4);
	var num = p1 + p2 + p3 + p4;
	var n = num.toFixed(2);
  return n;
}
/* function to calculate tax*/
function tax(){
	var num = productsObject.subtotal * .08
	var n = num.toFixed(2);
	return n;
}
/* function to calculate shipping*/
function shipping(){
	var num = productsObject.subtotal * .03;
	var n = num.toFixed(2);
	return n;
}
/*confirmation page for checkout page*/
function submission() {
  var myWindow = window.open("", "", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  myWindow.document.write("<h1>Thank you for odering through us! We are working on your order.</h1>");
  myWindow.document.write("<p>Your Order: </p>");
  myWindow.document.write(productsObject.productOne);
  myWindow.document.write("<br>");
  myWindow.document.write(productsObject.productTwo);
	myWindow.document.write("<br>");
	//for starting to write summary submission of store
	//myWindow.document.write(localStorage.getItem("address-1"));
}

/* object to hold product names, prices, and set functions*/
var productsObject = {
  productOne:"iPhone 12",
  productTwo: "Snickers",
  priceOne: 1199.99,
  priceTwo: 5.99,
  subtotal: 0.00,
  getProducts: function() {
    document.write(this.productOne + " " + this.productTwo);
  },
  setProductOne: function(input, proprice) {
  	this.productOne = input;
  	this.priceOne = proprice;
  },
  setProductTwo: function(input, proprice) {
  	this.productTwo = input;
  	this.priceTwo = proprice;
  },
  setSubtotal: function(input) {
  	this.subtotal = input;
  }
}
/*get functions to retrieve information from products object*/
function getProductOne(){
	document.write(productsObject.productOne);
}
function getPriceOne(){
	return productsObject.priceOne;
}
document.getElementById("priOne").innerHTML = getPriceOne();
function getProductTwo(){
	document.write(productsObject.productTwo);
}
function getPriceTwo(){
	return productsObject.priceTwo;
}
function getSubtotal(){
	return productsObject.subtotal;
}

/* Adding items to cart in product page */
$(document).ready(function addToCart() {
	document.getElementById("add2Cart").innerHTML = "Your item(s) have been added to your cart!";
});
