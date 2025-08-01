// A toi de jouer pour cette partie :-) Happy coding !


const cityInput = document.getElementById("cityInput")
const divCitySearch = document.querySelector(".city-search")
const loading = document.getElementById("details")
const divGps = document.getElementById("gps")

console.log(divCitySearch)


divCitySearch.addEventListener("click", () => {
    const inputValue = cityInput.value
    localisation(inputValue)
})


const localisation = async (inputValue) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${inputValue}&format=json&addressdetails=1&limit=1`)
        const data = await response.json()
        loading.style.display= "none"

        document.getElementById("city").innerText=inputValue
        data.forEach(element => {
            divGps.innerText = `Coordonnées GPS : ${element.lat},${element.lon}`
        });

        return data
    }
    catch (error) {
        console.log(error)
    }
}