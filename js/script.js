const textCard = document.querySelectorAll(".text-card")
const apiUrl = "https://icanhazdadjoke.com/"

const searchElement = document.getElementById("search-element")
const searchForm = document.getElementById("search-form")
const headerJoke = document.getElementById("header-joke")
const searchDad = document.getElementById("search-Dad")
const searchDog = document.getElementById("search-Dog")
const searchCar = document.getElementById("search-Car")

async function fetchText(url) {
    let response = await fetch(url, {
            method: "GET",
            headers: {
            "Accept": "application/json",
            "User-Agent": "My Library (https://github.com/SebastianLomme/opdracht_043_api_fun.git)",
        }});
    return response.json();
}

textCard.forEach(element => {
    fetchText(apiUrl).then(data => {
        element.textContent = data.joke
        
    })
})

const searchJoke = (object) => {
        fetchText(`https://icanhazdadjoke.com/search?term=${object}`).then(data => {const randomSearchResults = Math.floor(Math.random()*data.results.length)
        if (data.results.length > 0 ) {
            headerJoke.textContent = data.results[randomSearchResults].joke
        } else {
            headerJoke.textContent = "search not found"
        }}
        )
}

searchDad.addEventListener("click", () => searchJoke(searchDad.innerText))
searchDog.addEventListener("click", () => searchJoke(searchDog.innerText))
searchCar.addEventListener("click", () => searchJoke(searchCar.innerText))

searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    searchJoke(searchElement.value)
    searchElement.value = ""
})

