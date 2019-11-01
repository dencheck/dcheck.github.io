var valid= true;
var carouselCounter = 0;


//This builds the divs to populate the shopping cart on page load
function populate (order, index) {
	console.log(order);
	var holder = document.createElement("div");
	holder.id = "holder" + index;
	holder.className = "cartItem";
	document.getElementById("yourCart").appendChild(holder);
	document.getElementById("holder"+index).innerHTML = 

						'<img src="assets/'+order.fabric+'Pillow.jpg" class="cartImage">'+
						'<div class = "cartItemLeft">'+
							'<h3>Quantity:</h3>'+
							'<p>Fabric: '+order.fabric+'</p>'+
							'<p>Stuffing: '+order.stuffing+'</p>'+
						'</div>'+
						'<div class = "cartItemQuant">'+
							'<p>Quantity:</p> <input type="number" class = "quantity" value="'+order.quantity+'">'+
						"</div>"+
						'<div class = "cartItemRight">'+
							'<h3>$'+ order.price+ '</h3>'+
							'<br>'+
							'<p onclick="deleteItem('+index+');">Remove</p>'+
						'</div>'
}


//These 2 functions change the carousel image using carouselCounter
function nextCarousel() {
	if (carouselCounter < 3){
		carouselCounter ++;
		document.getElementById("carouselImage").src = "assets/carouselImage" + carouselCounter + ".jpg";
	}
}

function prevCarousel() {
	if (carouselCounter > 0){
		carouselCounter --;
		document.getElementById("carouselImage").src = "assets/carouselImage" + carouselCounter + ".jpg";
	}
}


//This deletes a particular item from the cart array, and reloads the page when remove is clicked
function deleteItem(indexx) {
	deleteArray = JSON.parse(localStorage.getItem("cartArray"));
	deleteArray.splice(indexx,1);
	localStorage.setItem("cartArray", JSON.stringify(deleteArray));
	location.reload();
}

//These display attributes of the pillow under the product image when the options are selected
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

//This updates the price in the Add to Cart button

function priceUpdate () {
	let originalPrice = document.getElementById("addToCartPrice").textContent = parseFloat(document.getElementById("quantity").value) * parseFloat(document.getElementById("price1").textContent);
}

var cartQuantity = 0;


//This alerts the user when they try to check out without selecting options
function cartUpdate () {

	if (document.getElementById("fabricDisplay").textContent == "" || document.getElementById("stuffingDisplay").textContent == "") {
		alert("Please select a stuffing and fabric.");
		valid = false;
		return;
	}
	else valid = true;
	cartQuantity = cartQuantity + parseFloat(document.getElementById("quantity").value);
	document.getElementById("cart").textContent = "Cart (" + (cartQuantity) + ")"
}

//defines the objects that go into the cart array to build shopping cart

function cartItem(quantity, fabric, stuffing, price) {
	this.quantity = quantity;
	this.fabric = fabric;
	this.stuffing = stuffing;
	this.price = price;
}

var cartArray = [];


//This function adds an object to the cart array and pushes it to local storage when the add to cart button is clicked
function addToCart(){
	if (valid === true){
		console.log("vslid");
		if (JSON.parse(localStorage.getItem("cartArray")) == null) {
			localStorage.setItem("cartArray", JSON.stringify(cartArray));
		}

		newCartItem = new cartItem(document.getElementById("quantity").value, document.getElementById("fabricDisplay").textContent, document.getElementById("stuffingDisplay").textContent, document.getElementById("addToCartPrice").textContent);
		//console.log(newCartItem);
		cartArray = JSON.parse(localStorage.getItem("cartArray"));
		//console.log(cartArray);
		cartArray.push(newCartItem);
		//console.log(cartArray);
		localStorage.setItem("cartArray", JSON.stringify(cartArray));
		//console.log(localStorage);
	}
}

//This populates the cart page with the items from local storage on page load
function loadCart(){
	var cartArray = JSON.parse(localStorage.getItem("cartArray"));
	console.log(cartArray);
	if (cartArray != null){
		for (i = 0; i<cartArray.length; i++) {
			populate(cartArray[i],i);
		}
	}
}