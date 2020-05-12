const api ={
    key :"2ba21244cd1f33e2d4065a1ff0a619fc",
    baseurl:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.KeyCode == 13) {
        //getResults(searchbox.value);
        console.log(searchbox.value);
    }
}