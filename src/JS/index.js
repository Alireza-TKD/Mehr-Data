class DataGetter {
    constructor(file){
        this.file = file;
    }
    getTable(){
        const xhttp = new XMLHttpRequest;
        const elem = document.getElementById('tableContainer');
        xhttp.open('GET',`${this.file}`,true);
        xhttp.send();
        xhttp.onload = () => {
           elem.innerHTML = xhttp.responseText;

        }
    }
}

const phoneData = new DataGetter('phones.html')
