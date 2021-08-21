// Ambil Data Indonesia Keseluruhan
const getDataIndonesia = () => {
    const APIInd = "https://covid19.mathdro.id/api/countries/Indonesia";
    const optionInd = {
        method: 'GET'
    }

    fetch(APIInd, optionInd)
    .then(responseInd => responseInd.json())
    .then(dataIndonesia => {
        // console.log(dataIndonesia)
        if(dataIndonesia.confirmed.value === null) {
            document.querySelector(".indonesia-positive").innerHTML = 0
        }
        else {
            document.querySelector(".indonesia-positive").innerHTML = (dataIndonesia.confirmed.value).toLocaleString("id-ID")
        }
        
        if(dataIndonesia.recovered.value === null) {
            document.querySelector(".indonesia-recovered").innerHTML = 0
        }
        else {
            document.querySelector(".indonesia-recovered").innerHTML = (dataIndonesia.recovered.value).toLocaleString("id-ID")
        }

        if(dataIndonesia.deaths.value === null) {
            document.querySelector(".indonesia-deaths").innerHTML = 0
        }
        else {
            document.querySelector(".indonesia-deaths").innerHTML = (dataIndonesia.deaths.value).toLocaleString("id-ID")
        } 
    })
    .catch(errorInd => console.log(errorInd, "ERROR"))
}
getDataIndonesia();
    

// Ambil Data Global Keseluruhan
const getDataGlobal = () => {
    const APIGlobal = "https://covid19.mathdro.id/api/";
    const optionGlobal = {
        method: 'GET'
    }

    fetch(APIGlobal, optionGlobal)
    .then(responseGlobal => responseGlobal.json())
    .then(dataGlobal => {
        // console.log(dataGlobal)
        if(dataGlobal.confirmed.value === null) {
            document.querySelector(".global-positive").innerHTML = 0
        }
        else {
            document.querySelector(".global-positive").innerHTML = (dataGlobal.confirmed.value).toLocaleString("id-ID")
        }
        
        if(dataGlobal.recovered.value === null) {
            document.querySelector(".global-recovered").innerHTML = 0
        }
        else {
            document.querySelector(".global-recovered").innerHTML = (dataGlobal.recovered.value).toLocaleString("id-ID")
        }

        if(dataGlobal.deaths.value === null) {
            document.querySelector(".global-deaths").innerHTML = 0
        }
        else {
            document.querySelector(".global-deaths").innerHTML = (dataGlobal.deaths.value).toLocaleString("id-ID")
        }
    })
    .catch(errorGlobal => console.log(errorGlobal, "ERROR"))
}
getDataGlobal();