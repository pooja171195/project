const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealEl = document.getElementById('meal');
const resultHeading = document.getElementsByClassName('result-heading');
const single_mealEl = document.getElementById('single-meal');
//search meals
function searchMeal(e){
    e.preventDefault();

    single_mealEl.innerHTML="";

    //get search meal
    const term = search.value;
    //console.log(search.value);
    if(term.trim()){
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
        ).then((res)=>res.json())
        .then((data)=>console.log(data));
    }
}



//event listerners
submit.addEventListener('submit',searchMeal);