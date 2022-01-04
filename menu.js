console.log("pooja");
// async function getMeal() {

//     try {
//         let url = ("https://themealdb.com/api/json/v1/1/categories.php")
//         let res = await fetch(url);
//         let data = await res.json()
//         console.log("data:", data)​
//         let meal = data.categories
//         console.log('meal:', meal)
//         appendMeal(meal)
//     } catch (err) {
//         console.log('err:', err)
//     }
// }
// getMeal()​​
// document.querySelector('.show');​
// var cart_count = 0
// var cart = []​
// function appendMeal(arr) {
//     arr.forEach(function(user) {
//         let div = document.createElement('div')​
//         let img = document.createElement('img')
//         img.src = user.strCategoryThumb​
//         let name = document.createElement('p')
//         name.innerText = user.strCategory​
//         let price = document.createElement('p')
//         price.innerText = getRndInteger(100, 500)

//         let button = document.createElement('button')
//         button.innerText = "Add To Cart"
//         button.addEventListener('click', function() {
//             addTocart(user)
//             cart_count++
//             document.querySelector('.h2').textContent = cart_count

//             var mealObj = {
//                 image: img,
//                 name: name,
//                 price: price
//             }
//         })
//         div.append(img, name, price, button)
//         document.querySelector('.show').append(div)
//     })​
//     function getRndInteger(min, max) {
//         return Math.floor(Math.random() * (500 - 100)) + 100;
//     }
// }

// function addTocart(elem) {

//     cart.push(mealObj)​
//     localStorage.setItem('meals', JSON.stringify(cart))
// }​​
// document.querySelector('.h2').addEventListener('click', function() {
//     window.location.href = 'cart.html'
// })