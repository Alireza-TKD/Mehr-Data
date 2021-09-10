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

const phoneData = new DataGetter('phones.html');
const domainData = new DataGetter('domains.html');
const getData = new DataGetter('commands.html');



const search = () => {
    let rows = document.querySelectorAll('.row');
    let searchInp = document.getElementById('searchInp');

    rows.forEach(item => {
        item.innerHTML.indexOf(searchInp.value) > -1 ? item.style.display = '' : item.style.display = 'none';
    })

}

const excelReport = () => {
    let data = document.getElementById('tableContainer');
    TableToExcel.convert(data , {
        name : 'data.xlsx',
        sheet : {
            name : 'sheet1'
        },
    });
};

class Theme {
    constructor(condition){
        this.condition = condition;
    }
    changer(){
        const links = document.getElementsByTagName('link');
        const toggler = document.getElementById('toggler')
        if(this.condition){
            this.condition = false;
            links[0].removeAttribute('href');
            links[0].setAttribute('href','../src/CSS/light.css')
            toggler.style.transform = 'translateX(-40px)'
        }else{
            this.condition = true;
            links[0].removeAttribute('href');
            links[0].setAttribute('href', '../src/CSS/dark.css')
            toggler.style.transform = 'translateX(0)'
        }
    }
}

const themeChanger = new Theme(true)