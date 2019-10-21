

function myFunction(a, b) {
  return a * b
}

function shark(name, age) {
  this.name = name;
  this.age = age;
  this.type = "shark";
  this.image = "shark.jpg";
}

function lemur(name, age) {
  this.name = name;
  this.age = age;
  this.type = "lemur";
  this.image = "lemur.jpg";
}

function beetle(name, age) {
  this.name = name;
  this.age = age;
  this.type = "beetle";
  this.image = "beetle.jpg";
}

var animals = [new shark(), new lemur(), new beetle()];
var names = ["hank", "jeff", "william"]

function generateRandomIndex(maxIndex) {
	randNum = Math.floor(Math.random() * maxIndex);
	return randNum;
}

