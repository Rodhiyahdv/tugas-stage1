// Ambil Data Tiap Negara
const allCountry = () => {
    let APICountry = "https://covid19.mathdro.id/api/confirmed";
    let optionCountry = {
        method: 'GET'
    }

    let showCountry = "<thead><tr><th>Negara</th><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr></thead>";

    fetch(APICountry, optionCountry)
    .then(responseCountry => responseCountry.json())
    .then(dataCountry => {
        // console.log(dataCountry)

        dataCountry.forEach(elementCountry => {
            showCountry += '<tr>'
            showCountry += '<td>'+ (elementCountry.countryRegion) +'</td>'

            if (elementCountry.provinceState === null) {
                showCountry += '<td style="text-align:center;">-</td>'
            }
            else {
                showCountry += '<td style="text-align:center;">'+ (elementCountry.provinceState) +'</td>'
            }

            if (elementCountry.confirmed === null) {
                showCountry += '<td style="text-align:center;">'+ 0 +'</td>'
            }
            else {
                showCountry += '<td style="text-align:center;">'+ (elementCountry.confirmed).toLocaleString("id-ID") +'</td>'
            }

            if (elementCountry.recovered === null) {
                showCountry += '<td style="text-align:center;">'+ 0 +'</td>'
            }
            else {
                showCountry += '<td style="text-align:center;">'+ (elementCountry.recovered).toLocaleString("id-ID") +'</td>'
            }

            if (elementCountry.deaths === null) {
                showCountry += '<td style="text-align:center;">'+ 0 +'</td>'
            }
            else {
                showCountry += '<td style="text-align:center;">'+ (elementCountry.deaths).toLocaleString("id-ID") +'</td>'
            }
            showCountry += '</tr>'
        }); 
        document.getElementById("data-country").innerHTML = `<tbody>${showCountry}</tbody>`

    })
    .catch(errorCountry => console.log(errorCountry, "ERROR"))
}
allCountry();

// Cari data berdasarkan negara
let keyword = document.getElementById("keywordCountry");
const searchCountry = () => {
    if (keyword.value == "")
    {
        alert ('Keyword tidak boleh kosong.\nMasukkan nama negara yang ingin dicari')
        document.getElementById("keywordCountry").focus()
    }
    else {
        showDataCountry(keyword.value)   
    }
}

const showDataCountry = () => {
    let checkKeyword = new RegExp (`${keyword.value}`,`ig`);
    let getDataCountry = "";

    let APICountry1 = "https://covid19.mathdro.id/api/confirmed";
    let optionCountry1 = {
        method: 'GET'
    }

    fetch(APICountry1, optionCountry1)
    .then(responseCountry1 => responseCountry1.json())
    .then(dataCountry1 => {
       if (checkKeyword.test(`${dataCountry1.countryRegion}`)==false){
        let setData = `<p>Data Not Found <br> 
                <img src="empty.png">
                </p>`
                document.getElementById("data-country").innerHTML = setData
       }

        dataCountry1.forEach(elementCountry1 => {
            if (checkKeyword.test(`${elementCountry1.countryRegion}`)==true){
                // console.log(elementCountry1.countryRegion, elementCountry1.provinceState)
                getDataCountry += '<tr>'
                getDataCountry += '<td>'+ (elementCountry1.countryRegion) +'</td>'

                if (elementCountry1.provinceState === null) {
                    getDataCountry += '<td style="text-align:center;">-</td>'
                }
                else {
                    getDataCountry += '<td style="text-align:center;">'+ (elementCountry1.provinceState) +'</td>'
                }

                if (elementCountry1.confirmed === null) {
                    getDataCountry += '<td style="text-align:center;">'+ 0 +'</td>'
                }
                else {
                    getDataCountry += '<td style="text-align:center;">'+ (elementCountry1.confirmed).toLocaleString("id-ID") +'</td>'
                }

                if (elementCountry1.recovered === null) {
                    getDataCountry += '<td style="text-align:center;">'+ 0 +'</td>'
                }
                else {
                    getDataCountry += '<td style="text-align:center;">'+ (elementCountry1.recovered).toLocaleString("id-ID") +'</td>'
                }

                if (elementCountry1.deaths === null) {
                    getDataCountry += '<td style="text-align:center;">'+ 0 +'</td>'
                }
                else {
                    getDataCountry += '<td style="text-align:center;">'+ (elementCountry1.deaths).toLocaleString("id-ID") +'</td>'
                }
                getDataCountry += '</tr>'

                document.getElementById("data-country").innerHTML = `<thead>
                <tr>
                    <th>Negara</th>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Meninggal</th>
                </tr>
                </thead>
                <tbody>${getDataCountry}</tbody>`
                
            } 
        })
    })
    .catch(errorGetCountry => console.log(errorGetCountry, "ERROR"))
}

//Menampilkan kembali semua data setelah pencarian
const allData = () => {
    allCountry();
    document.getElementById("keywordCountry").value="";
}