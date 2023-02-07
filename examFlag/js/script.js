const flagsElem = document.querySelector(".flags");
let dropDown = document.querySelector(".select"),
    showMenu = document.querySelector(".menu"),
    caret = document.querySelector(".caret"),
    region = document.querySelectorAll(".region"),
    regionName = docu   ment.getElementsByClassName("regionName");
// console.log(regionName)

async function getCountry() {
    const url = await fetch("https://restcountries.com/v2/all?fields=name,capital,region,population,flags")
    const res = await url.json()
    res.forEach(element => {
        showCountry(element)
    });
}
getCountry()

function showCountry(data) {
    const box = document.createElement('div');
    box.classList.add('box')
    box.innerHTML = `
        <img src="${data.flags.png}">
        <div class="text">
        <div class="name"> ${data.name}</div>
        <div class="population"><strong>Population:</strong> ${data.population}</div>
        <div class="regionName"><strong>Region:</strong> ${data.region} </div>
        <div class="capital"><strong>Capital:</strong> ${data.capital}</div>
        </div>`

    flagsElem.appendChild(box)

    box.addEventListener('click', () => {
        showMenu.classList.toggle("showDrop")
        showModal(data)
    })

    function cursor() {
        box.style.cursor = "pointer"
    }
    cursor()
}

dropDown.addEventListener("click", () => {
    showMenu.classList.toggle("showDrop")
    caret.classList.toggle("caretRotate")
})

region.forEach(regElem => {
    regElem.addEventListener('click', () => {
        delActive()
        regElem.classList.toggle("active")
        Array.from(regionName).forEach(element => {
            console.log(element)
            if (element.innerText.includes(regElem.innerText)) {
                element.parentElement.parentElement.style.display = "grid"
            }else{
                element.parentElement.parentElement.style.display = "none"
            }
        })
    })

})

function delActive() {
    region.forEach(elem => {
        elem.classList.remove("active")
    })
}

let search = document.querySelector(".search");
let  names = document.getElementsByClassName("name");
search.addEventListener('input', () => {
    console.log(search.value)
    Array.from(names).forEach(element => {
        if (element.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            element.parentElement.parentElement.style.display = "grid"
        } else {
            element.parentElement.parentElement.style.display = "none"
        }
    })
    showMenu.classList.add("showDrop")
})  

let  moon = document.querySelector(".moon");

moon.addEventListener('click', () => {
    document.body.classList.toggle("dark")
    document.querySelector(".project").classList.toggle('dark')
    modal.classList.toggle("darkk")
    console.log("ddd")
})

const modal = document.querySelector('.modal');

function showModal(data) {
    modal.classList.toggle("close")
    modal.innerHTML = `
    <button class="back">Back</button>
    <div class="bloks">
        <div class="leftModal">
            <img src="${data.flags.png}">
        </div>
        <div class="rightModal">
            <h3>${data.name}</h3>
            <div class="modalText">
                <div class="innerLeft inner">
                   <div><strong>Native name:</strong> ${data.population}</div>
                    <div><strong>Population:</strong> ${data.population}</div>
                    <div><strong>Region:</strong> ${data.region} </div>
                    <div><strong>Sub Region:</strong> ${data.region} </div>
                    <div><strong>Capital:</strong> ${data.capital}</div>
                </div>
                <div class="innerRight inner">
                    <div><strong>Top level domain: </strong> ${data.population}</div>
                    <div><strong>Currencies: </strong> ${data.region} </div>
                    <div><strong>Languages: </strong> ${data.capital}</div>
                </div>
            </div>

        </div>
    </div>`;
    const backModal = modal.querySelector(".back");

    backModal.addEventListener('click', () => {
        modal.classList.toggle("close")
    })
}































// regionName=document.getElementsByClassName("regionName");
