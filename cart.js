var cart = JSON.parse(localStorage.getItem('meals'))​
cart.map(function(elem, index) {
    var div = document.createElement("div");​
    var img = document.createElement("img");
    img.src = elem.image​
    var name = document.createElement("h3");
    name.textContent = elem.name;​
    var price = document.createElement("p");
    price.textContent = elem.price​​
    var button = document.createElement("button");
    button.textContent = "Delete Item";
    button.addEventListener('click', function() {
        removeMeal(index)
    })
    div.append(img, name, price, button);
    document.querySelector(".order").append(div);
});​
function removeMeal(index) {
    arr.splice(index, 1)
}