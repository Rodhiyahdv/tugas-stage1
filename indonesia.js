// Ambil Data Provinsi
const allProv = () => {
    let APIProv = "https://indonesia-covid-19.mathdro.id/api/provinsi";
    let optionProv = {
        method: 'GET'
    }

    let showProv = `<div class="sticky-top">
    <thead>
        <tr>
        <th>Provinsi</th>
        <th>Positif</th>
        <th>Sembuh</th>
        <th>Meninggal</th>
        </tr>
    </thead>
    </div>`;

    fetch(APIProv, optionProv)
    .then(responseProv => responseProv.json())
    .then(dataProv => {
        // console.log(dataProv.data)
        dataProv.data.pop()
        dataProv.data.forEach(elementProv => {
            showProv += '<tr>'
            showProv += '<td>'+ (elementProv.provinsi)+'</td>'

            if (elementProv.kasusPosi === null) {
                showProv += '<td style="text-align:center;">'+ 0 +'</td>'
            }
            else {
                showProv += '<td style="text-align:center;">'+ (elementProv.kasusPosi).toLocaleString("id-ID") +'</td>'
            }

            if (elementProv.kasusSemb === null) {
                showProv += '<td style="text-align:center;">'+ 0 +'</td>'
            }
            else {
                showProv += '<td style="text-align:center;">'+ (elementProv.kasusSemb).toLocaleString("id-ID") +'</td>'
            }

            if (elementProv.kasusMeni === null) {
                showProv += '<td style="text-align:center;">'+ 0 +'</td>'
            }
            else {
                showProv += '<td style="text-align:center;">'+ (elementProv.kasusMeni).toLocaleString("id-ID") +'</td>'
            }
            showProv += '</tr>'
        });
        document.getElementById("data-prov").innerHTML = `<tbody>${showProv}</tbody>`
    })
    .catch(errorProv => console.log(errorProv, "ERROR"))
}
allProv();

//Cari data berdasarkan provinsi
let keyword = document.getElementById("keywordProv");
const searchProv = () => {
    if (keyword.value == "")
    {
        alert ('Keyword tidak boleh kosong.\nMasukkan nama provinsi yang ingin dicari')
        document.getElementById("keywordProv").focus()
    }
    else {
        showDataProv(keyword.value)
    }
}

const showDataProv = () => {
    let checkKeyword = new RegExp (`${keyword.value}`,`ig`);
    let getDataProv = "";

    let APIProv1 = "https://indonesia-covid-19.mathdro.id/api/provinsi";
    let optionProv1 = {
        method: 'GET'
    }

    fetch(APIProv1, optionProv1)
    .then(responseProv1 => responseProv1.json())
    .then(dataProv1 => {
        dataProv1.data.pop()
       if (checkKeyword.test(`${dataProv1.data.provinsi}`)==false){
        let setData = `<p>Data Not Found <br> 
                <img src="empty.png">
                </p>`
                document.getElementById("data-prov").innerHTML = setData
       }

        dataProv1.data.forEach(elementProv1 => {
            if (checkKeyword.test(`${elementProv1.provinsi}`)==true){
                // console.log(elementProv1.provinsi)
                getDataProv += '<tr>'
                getDataProv += '<td>'+ (elementProv1.provinsi) +'</td>'

                if (elementProv1.kasusPosi === null) {
                    getDataProv += '<td style="text-align:center;">'+ 0 +'</td>'
                }
                else {
                    getDataProv += '<td style="text-align:center;">'+ (elementProv1.kasusPosi).toLocaleString("id-ID") +'</td>'
                }

                if (elementProv1.kasusSemb === null) {
                    getDataProv += '<td style="text-align:center;">'+ 0 +'</td>'
                }
                else {
                    getDataProv += '<td style="text-align:center;">'+ (elementProv1.kasusSemb).toLocaleString("id-ID") +'</td>'
                }

                if (elementProv1.kasusMeni === null) {
                    getDataProv += '<td style="text-align:center;">'+ 0 +'</td>'
                }
                else {
                    getDataProv += '<td style="text-align:center;">'+ (elementProv1.kasusMeni).toLocaleString("id-ID") +'</td>'
                }
                getDataProv += '</tr>'

                document.getElementById("data-prov").innerHTML = `<thead>
                <tr>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Meninggal</th>
                </tr>
                </thead>
                <tbody>${getDataProv}</tbody>`
                
            } 
        })
    })
    .catch(errorGetProv => console.log(errorGetProv, "ERROR"))
}

//Menampilkan kembali semua data setelah pencarian
const allData = () => {
    allProv();
    document.getElementById("keywordProv").value="";
}
