// Ambil Data Tiap Negara
let APICountry = "https://covid19.mathdro.id/api/confirmed";
let optionCountry = {
    method: 'GET'
}

let tempCountry = [];
let showCountry = "<tr><th>Negara</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";

fetch(APICountry, optionCountry)
.then(responseCountry => responseCountry.json())
.then(dataCountry => {
    console.log(dataCountry)     
    dataCountry.forEach(elementCountry => {
        tempCountry.push(elementCountry)
        showCountry += '<tr>'
        showCountry += '<td>'+ (elementCountry.countryRegion).toUpperCase() +'</td>'
        showCountry += '<td>'+ (elementCountry.confirmed).toLocaleString("id-ID") +'</td>'
        showCountry += '<td>'+ (elementCountry.recovered) +'</td>'
        showCountry += '<td>'+ (elementCountry.deaths).toLocaleString("id-ID") +'</td>'
        showCountry += '</tr>'
    }); 
    document.getElementById("data-country").innerHTML = showCountry

})
.catch(errorCountry => console.log(errorCountry, "ERROR"))

// Cari Data Berdasarkan Nama Negara
// let keyword = document.getElementById("keywordCountry");
// let searchCountry = document.getElementById("getCountry");

// let getDataCountry = "<tr><th>Negara</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";

// searchCountry.addEventListener("click", function() {
//     let country = keyword.value;

//     fetch(`https://covid19.mathdro.id/api/countries/${country}`)
//     .then(response => response.json())
//     .then(resCountry => {
//         console.log(resCountry)

//         resCountry.forEach(r => {
//             if (tempCountry[countryRegion] == country) {
//                 getDataCountry += `<tr>
//                     <td>${country.toUpperCase()}</td>
//                     <td>${(r.confirmed.value).toLocaleString("id-ID")}</td>
//                     <td>${(r.recovered.value).toLocaleString("id-ID")}</td>
//                     <td>${(r.deaths.value).toLocaleString("id-ID")}</td>
//                 </tr>`
//                 document.getElementById("data-country").innerHTML = getDataCountry
//             }
//             else {
//                 getDataCountry = `<p>Data Not Found <br> 
//                 <img src="empty.png">
//                 </p>`
//                 document.getElementById("data-country").innerHTML = getDataCountry
//             }
//         })

//     })
//     .catch(errorData => console.log(errorData))
// });

let keyword = document.getElementById("keywordCountry");
let country = document.getElementById("getCountry").addEventListener("click", () => searchCountry(keyword.value));

// let getDataCountry = "<tr><th>Negara</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";

const searchCountry = async (country) => {
    let response = await fetch (`https://covid19.mathdro.id/api/countries/${country}`,
        {
           method: "GET", 
        }
    );

    response = await response.json();
    console.log(response);

    if(response.error) {
        let setData = `<p>Data Not Found <br> 
            <img src="empty.png">
            </p>`
        document.getElementById("data-country").innerHTML = setData
    }
    
    let getDataCountry = `<tr><th>Negara</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>
    <tr>
        <td>${country.toUpperCase()}</td>
        <td>${(response.confirmed.value).toLocaleString("id-ID")}</td>
        <td>${(response.recovered.value).toLocaleString("id-ID")}</td>
        <td>${(response.deaths.value).toLocaleString("id-ID")}</td>
        </tr>`
    document.getElementById("data-country").innerHTML = getDataCountry
    

    // for (let n in response) {
    //     if(response[n].error) {
    //         getDataCountry += `<tr>
    //         <td>${country.toUpperCase()}</td>
    //         <td>${(response.confirmed.value).toLocaleString("id-ID")}</td>
    //         <td>${(response.recovered.value).toLocaleString("id-ID")}</td>
    //         <td>${(response.deaths.value).toLocaleString("id-ID")}</td>
    //         </tr>`
    //         document.getElementById("data-country").innerHTML = getDataCountry
    //     }
    //     else {
    //         getDataCountry = `<p>Data Not Found <br> 
    //         <img src="empty.png">
    //         </p>`
    //         document.getElementById("not-found").innerHTML = getDataCountry
    //     }
    // }
}

