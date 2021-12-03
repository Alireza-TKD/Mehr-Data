class DataGetter {
    constructor(file){
        this.file = file;
    }
    async getTable(){
        const elem = document.getElementById('tableContainer');
        
        const page = await fetch(`${this.file}`);
        const res = await page.text();
        elem.innerHTML = res;

        this.file == 'public/main.html' ? document.getElementById('searchInp').style.display = 'none' : document.getElementById('searchInp').style.display = 'block' 
        this.file == 'public/main.html' ? document.getElementById('excButton').style.visibility= 'hidden' : document.getElementById('excButton').style.visibility= 'visible'
        document.getElementById('searchInp').value = ''
    }
}

const phoneData = new DataGetter('public/phones.html');
const getMain = new DataGetter('public/main.html');

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
        const themeBtn = document.getElementById('themeBtn').firstChild;
        if(this.condition){
            this.condition = false;
            links[0].removeAttribute('href');
<<<<<<< HEAD
            links[0].setAttribute('href','../src/CSS/light.css');
            themeBtn.classList.remove('fa-sun');
            themeBtn.classList.add('fa-moon');
            themeBtn.title = 'تم تیره';
=======
            links[0].setAttribute('href','../src/CSS/light.css')
            toggler.style.transform = 'translateX(-29px)'
>>>>>>> 8539132a5d7de98fa763381532440de6cd491247
        }else{
            this.condition = true;
            links[0].removeAttribute('href');
            links[0].setAttribute('href', '../src/CSS/dark.css');
            themeBtn.classList.remove('fa-moon');
            themeBtn.classList.add('fa-sun');
            themeBtn.title = 'تم روشن';
        }
    }
}

const themeChanger = new Theme(true)

