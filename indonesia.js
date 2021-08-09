// Ambil Data Provinsi
let APIProv = "https://indonesia-covid-19.mathdro.id/api/provinsi";
let optionProv = {
    method: 'GET'
}

let showProv = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";

fetch(APIProv, optionProv)
.then(responseProv => responseProv.json())
.then(dataProv => {
    console.log(dataProv.data)
    dataProv.data.forEach(elementProv => {
        showProv += '<tr>'
        showProv += '<td>'+ (elementProv.provinsi).toUpperCase() +'</td>'
        showProv += '<td>'+ (elementProv.kasusPosi).toLocaleString("id-ID") +'</td>'
        showProv += '<td>'+ (elementProv.kasusSemb).toLocaleString("id-ID") +'</td>'
        showProv += '<td>'+ (elementProv.kasusMeni).toLocaleString("id-ID") +'</td>'
        showProv += '</tr>'
    });
    document.getElementById("data-prov").innerHTML = showProv
})
.catch(errorProv => console.log(errorProv, "ERROR"))


// Cari Data Berdasarkan Nama Provinsi
// let keyword = document.getElementById("keywordProv");
// let searchCountry = document.getElementById("getProv");

// let getDataCountry = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";

// searchCountry.addEventListener("click", function() {
//     const country = keyword.value;

//     fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
//     .then(response => response.json())
//     .then(resCountry => {
//         console.log(resCountry.data)

//         // if (resCountry.data.length != 0) {
//         //     resCountry.data.forEach(resultCountry => {
//         //         getDataCountry += '<tr>'
//         //         getDataCountry += '<td>'+ resultCountry.provinsi +'</td>'
//         //         getDataCountry += '<td>'+ (resultCountry.kasusPosi).toLocaleString("id-ID") +'</td>'
//         //         getDataCountry += '<td>'+ (resultCountry.kasusSemb).toLocaleString("id-ID") +'</td>'
//         //         getDataCountry += '<td>'+ (resultCountry.kasusMeni).toLocaleString("id-ID") +'</td>'
//         //         getDataCountry += '</tr>'
//         //     }); 
//         //         document.getElementById("data-prov").innerHTML = getDataCountry
//         // }
//         // else {
//         //     getDataCountry = `Data Not Found`
//         //     document.getElementById("data-prov").innerHTML = getDataCountry
//         // }
//     })
//     .catch(errorData => console.log(errorData))
// });

