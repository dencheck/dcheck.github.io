
//these functions update the product description text when the colored radio buttons are clicked
function newGrey () {
	document.getElementById("fabricDisplay").textContent = "Grey";
	console.log("Gray");
	}

function newOrange () {
	document.getElementById("fabricDisplay").textContent = "Orange";
	console.log("Orange");
	}

function newYellow () {
	document.getElementById("fabricDisplay").textContent = "Yellow";
	console.log("Yellow");
	}

function newTeal () {
	document.getElementById("fabricDisplay").textContent = "Teal";
	console.log("Hellooooooo");
	}


//these functions update the product description text and price when the stuffing radio buttons are clicked
function newDuck () {
	document.getElementById("stuffingDisplay").textContent = "Duck Down";
	document.getElementById("price1").textContent = "99.99";
	document.getElementById("addToCartPrice").textContent = "99.99";
	}

function newWool () {
	document.getElementById("stuffingDisplay").textContent = "Alpaca Wool";
	document.getElementById("price1").textContent = "102.98";
	document.getElementById("addToCartPrice").textContent = "102.98";
	}

function newCloud () {
	document.getElementById("stuffingDisplay").textContent = "Cloud Foam";
	document.getElementById("price1").textContent = "109.98";
	document.getElementById("addToCartPrice").textContent = "109.98";
	}



// updates the price in the add to cart button
function priceUpdate () {
	let originalPrice = document.getElementById("addToCartPrice").textContent = parseFloat(document.getElementById("quantity").value) * parseFloat(document.getElementById("price1").textContent);
}


// adds a number to the cart button to indicate items in cart, and throws an alert when the user has not selected necessary options
var cartQuantity = 0;

function cartUpdate () {

	if (document.getElementById("fabricDisplay").textContent == "" || document.getElementById("stuffingDisplay").textContent == "") {
		alert("Please select a stuffing and fabric.");
		return;
	}
	cartQuantity = cartQuantity + parseFloat(document.getElementById("quantity").value);
	document.getElementById("cart").textContent = "Cart (" + (cartQuantity) + ")"
}