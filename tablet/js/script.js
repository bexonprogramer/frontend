let tabs=document.querySelector("ul"),
    tabsItem=document.querySelectorAll("li"),
    content=document.querySelectorAll(".home");


function show(i){
    content.forEach(elem => {
        elem.classList.remove('active')
    });
    content[i].classList.add('active')
}


tabsItem.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        show(index)
    })
})  