// A toi de jouer pour cette partie :-) Happy coding !


const cityInput = document.getElementById("cityInput")
const loading = document.getElementById("details")
const divGps = document.getElementById("gps")
console.log(cityInput)


document.querySelector(".city-search button").addEventListener("click", () => {
    const inputValue = cityInput.value

    fetchLocalisation(inputValue)
})

const fetchLocalisation = async (inputValue) => {
    try {

        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${inputValue}&format=json&addressdetails=1&limit=1`)
        const data = await response.json()
        loading.style.display= "none"
        
        if (data.length === 0){
            document.getElementById("city").innerText = "Ville introuvable"
            divGps.innerText = ""
            document.getElementById("temperature").innerText = ""
        }
        ShowApiLocalisation(data)
        return data
    }
    catch (error) {
        console.log(error)
    }
}

const ShowApiLocalisation = (data) => {

    data.forEach(element => {
        document.getElementById("city").innerText= `${element.name}, ${element.address.country}`
        const latitude = element.lat
        const longitude = element.lon
        divGps.innerText = `Coordonnées GPS : ${latitude},${longitude}`
        fetchWeather(latitude,longitude)
    })
    return
}

const fetchWeather = async (latitude,longitude) => {
    try {
        loading.style.display="block"
        const response= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,relative_humidity_2m`)
        const data = await response.json()
        loading.style.display="none"
        document.getElementById("temperature").innerText= `${data.current.temperature_2m}°C`
        return data
    } catch (error) {
        console.log(error)
    }
}


