// Ambil Data Indonesia Keseluruhan
    const APIInd = "https://covid19.mathdro.id/api/countries/Indonesia";
    const optionInd = {
        method: 'GET'
    }

    fetch(APIInd, optionInd)
    .then(responseInd => responseInd.json())
    .then(dataIndonesia => {
        console.log(dataIndonesia)
        document.querySelector(".indonesia-positive").innerHTML = (dataIndonesia.confirmed.value).toLocaleString("id-ID")
        document.querySelector(".indonesia-recovered").innerHTML = (dataIndonesia.recovered.value).toLocaleString("id-ID")
        document.querySelector(".indonesia-deaths").innerHTML = (dataIndonesia.deaths.value).toLocaleString("id-ID")
    })
    .catch(errorInd => console.log(errorInd, "ERROR"))

// Ambil Data Global Keseluruhan
const APIGlobal = "https://covid19.mathdro.id/api/";
const optionGlobal = {
    method: 'GET'
}

fetch(APIGlobal, optionGlobal)
.then(responseGlobal => responseGlobal.json())
.then(dataGlobal => {
    console.log(dataGlobal)
    document.querySelector(".global-positive").innerHTML = (dataGlobal.confirmed.value).toLocaleString("id-ID")
    document.querySelector(".global-recovered").innerHTML = (dataGlobal.recovered.value).toLocaleString("id-ID")
    document.querySelector(".global-deaths").innerHTML = (dataGlobal.deaths.value).toLocaleString("id-ID")
})
.catch(errorGlobal => console.log(errorGlobal, "ERROR"))