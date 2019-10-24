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

function priceUpdate () {
	let originalPrice = document.getElementById("addToCartPrice").textContent = parseFloat(document.getElementById("quantity").value) * parseFloat(document.getElementById("price1").textContent);
}

var cartQuantity = 0;

function cartUpdate () {

	if (document.getElementById("fabricDisplay").textContent == "" || document.getElementById("stuffingDisplay").textContent == "") {
		alert("Please select a stuffing and fabric.");
		return;
	}
	cartQuantity = cartQuantity + parseFloat(document.getElementById("quantity").value);
	document.getElementById("cart").textContent = "Cart (" + (cartQuantity) + ")"
}