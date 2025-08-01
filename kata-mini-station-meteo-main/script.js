// A toi de jouer pour cette partie :-) Happy coding !


const cityInput = document.getElementById("cityInput")
const divCitySearch = document.querySelector(".city-search")
const loading = document.getElementById("details")
const divGps = document.getElementById("gps")

console.log(divCitySearch)


divCitySearch.addEventListener("click", () => {
    const inputValue = cityInput.value
    fetchLocalisation(inputValue)
})

const fetchLocalisation = async (inputValue) => {
    try {

        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${inputValue}&format=json&addressdetails=1&limit=1`)
        const data = await response.json()
        loading.style.display= "none"

        ShowApiLocalisation(data)
        return data
    }
    catch (error) {
        console.log(error)
    }
}


const ShowApiLocalisation = (data) => {

    data.forEach(element => {
        document.getElementById("city").innerText= element.address.city
        const latitude = element.lat
        const longitude = element.lon
        divGps.innerText = `Coordonnées GPS : ${latitude},${longitude}`
        fetchWeather(latitude,longitude)
    })
}

const fetchWeather = async (latitude,longitude) => {
    try {
        const response= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,relative_humidity_2m`)
        const data = await response.json()
        document.getElementById("temperature").innerText= `${data.current.temperature_2m}°C`
        return data
    } catch (error) {
        console.log(error)
    }
}