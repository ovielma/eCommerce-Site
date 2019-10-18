

//********************************************/
/*USER INFORMATION FUNCTIONS START - *Jason */

/*class for later?
class Customer {
	constructor(fullname, address1, address2, city, state, zipcode, phoneNumber, emailname) {
		this.fullname = fullname;
		this.address1 = address1;
		this.address2 = address2;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.phonenumber = phonenumber;
		this.email = emailname;
	}
}*/


//test function
/*function display(){
	alert("hello world");
}*/

function validatePhoneNumber(){
	var phoneNumberInfo = document.getElementById("phoneNumberUserInfo").value;
	var phoneNumberValidation = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
	if( (phoneNumberInfo.match(phoneNumberValidation)))
	{
		return true;
	}
	else
	{
		alert("Phone Number is Invalid Format. Required format = xxx-xxx-xxxx");
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
        return false;
    }
}

function onClickUserInformation(){
	validatePhoneNumber();
	validateEmailAddress();
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
