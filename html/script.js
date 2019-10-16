
/* function to calculate the sum of two products*/
function sumFunction(p1, p2) {
  document.write(p1 + p2);
}
/* object to hold product names, prices, and set functions*/
var productsObject = {
  productOne:"iPhone 12",
  productTwo: "Snickers",
  priceOne: 1199.99,
  priceTwo: 5.99,
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
  }
}
/*get functions to retrieve information from products object*/
function getProductOne(){
	document.write(productsObject.productOne);
}
function getPriceOne(){
	document.write(productsObject.priceOne);
}
function getProductTwo(){
	document.write(productsObject.productTwo);
}
function getPriceTwo(){
	document.write(productsObject.priceTwo);
}
