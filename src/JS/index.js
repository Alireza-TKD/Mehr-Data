class DataGetter {
    constructor(file){
        this.file = file;
    }
    async getTable(){
        const elem = document.getElementById('tableContainer');
        
        const page = await fetch(`${this.file}`);
        const res = await page.text();
        elem.innerHTML = res;

        this.file == 'main.html' ? document.getElementById('searchInp').style.display = 'none' : document.getElementById('searchInp').style.display = 'block' 
        this.file == 'main.html' ? document.getElementById('excButton').style.visibility= 'hidden' : document.getElementById('excButton').style.visibility= 'visible'
    }
}

const phoneData = new DataGetter('phones.html');
const domainData = new DataGetter('domains.html');
const getData = new DataGetter('commands.html');
const getMain = new DataGetter('main.html');

//for main page
getMain.getTable()


const search = () => {
    let rows = document.querySelectorAll('.row');
    let searchInp = document.getElementById('searchInp');

    rows.forEach(item => {
        item.innerHTML.toUpperCase().indexOf(searchInp.value.toUpperCase()) > -1 ? item.style.display = '' : item.style.display = 'none';
    })

}

const excelReport = () => {
    let data = document.getElementById('tableContainer');
    TableToExcel.convert(data , {
        name : 'data.xlsx',
        sheet : {
            name : 'phones'
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

//copy values
const copyText = text => {
    document.execCommand('copy');
    alert(`${text.innerHTML} کپی شد`)
}