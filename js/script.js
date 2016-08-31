// Business Logic:
function Pizza(service, size) {
  this.service = service;
  this.pizzaSize = size;
  this.meat = [];
  this.veggie = [];
  this.price = 5;
}

Pizza.prototype.service = function() {
  if (this.service === "delivery") {
    this.price += 2;
  }
};

Pizza.prototype.size = function() {
  if (this.pizzaSize === "medium") {
    this.price += 1;
  }
  else if (this.pizzaSize === "large") {
    this.price += 2;
  }
  else if (this.pizzaSize === "extra-large") {
    this.price += 3;
  }
  else if (this.pizzaSize === "cthulu") {
    this.price += 10;
  }
};

Pizza.prototype.meatTop = function() {
  this.price += (this.meat.length * 3);
};

Pizza.prototype.veggieTop = function() {
  this.price += (this.veggie.length * 2);
};

Pizza.prototype.orderTotal = function() {
  this.size();
  this.meatTop();
  this.veggieTop();
};


$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var inputService = $("#service").val();
    var inputPizzaSize = $("#size").val();

    var newPizza = new Pizza(inputService, inputPizzaSize);

    // var checkedBoxes = document.querySelectorAll('input:checked')
    //
    // checkedBoxes.forEach(function(currentBox){
    //   console.log(currentBox.name);
    // })

    if (document.getElementById('mushroom').checked) {
      newPizza.veggie.push("mushroom");
    }
    if (document.getElementById("redpeppers").checked) {
      newPizza.veggie.push("redpeppers");
    }
    if (document.getElementById("bellpeppers").checked) {
      newPizza.veggie.push("bellpeppers");
    }
    if (document.getElementById("spinach").checked) {
      newPizza.veggie.push("spinach");
    }
    if (document.getElementById("arugula").checked) {
      newPizza.veggie.push("arugula");
    }
    if (document.getElementById("apples").checked) {
      newPizza.veggie.push("apples");
    }
    if (document.getElementById("squash").checked) {
      newPizza.veggie.push("squash");
    }
    if (document.getElementById("broccoli").checked) {
      newPizza.veggie.push("broccoli");
    }
    if (document.getElementById("veggie_nonsense").checked) {
      newPizza.veggie.push("veggie_nonsense");
    }
    if (document.getElementById("pepperoni").checked) {
      newPizza.meat.push("pepperoni");
    }
    if (document.getElementById("bacon").checked) {
      newPizza.meat.push("bacon");
    }
    if (document.getElementById("canadian").checked) {
      newPizza.meat.push("canadian");
    }
    if (document.getElementById("kangaroo").checked) {
      newPizza.meat.push("kangaroo");
    }
    if (document.getElementById("baby").checked) {
      newPizza.meat.push("baby");
    }
    if (document.getElementById("bison").checked) {
      newPizza.meat.push("bison");
    }
    if (document.getElementById("duck").checked) {
      newPizza.meat.push("duck");
    }
    if (document.getElementById("triceratops").checked) {
      newPizza.meat.push("triceratops");
    }

newPizza.orderTotal();


    $(".bill").append(newPizza.price);




  });
});
