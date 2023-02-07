const tabs = document.querySelectorAll('.tab__el'),
        tabItems = document.querySelectorAll('.tab__item'),
        tabItemParent = document.querySelector('.tab__link__wrapper')

function showTabContent(i = 0){
    tabs[i].classList.add('tab__el_active')
    tabItems[i].classList.add('tab__item_active')
}

function hideTabContent(){
    tabs.forEach((item) => {
        item.classList.remove('tab__el_active')
    })
    tabItems.forEach(item => {
        item.classList.remove('tab__item_active')
    })
}

function clearBg(){
    tabItems.forEach(item => {
        item.style.backgroundColor = 'transparent'
    })
}

// tabItems.forEach((el, index) => {
//     el.addEventListener('click', () => {
//         hideTabContent()
//         showTabContent(index)
//     })
// })

tabItemParent.addEventListener('click', (e) => {
    if(e.target.classList.contains("tab__item")){
        tabItems.forEach((item, index) =>{
            if(e.target === item){
                clearBg()
                let bg = window.getComputedStyle(tabs[index]).backgroundColor
                tabItems[index].style.backgroundColor = bg
                hideTabContent()
                showTabContent(index)
            }
        })
    }
})


hideTabContent()
showTabContent()