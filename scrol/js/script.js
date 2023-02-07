let openModal = document.querySelector(".click")
let closeModal = document.querySelector(".closeBtn")
let modal = document.querySelector(".modal-container")

function open() {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

function close() {
    modal.style.display = "none"
    document.body.style.overflow = "";

}

openModal.addEventListener("click", open)
closeModal.addEventListener("click", close)

window.addEventListener('scroll', () => {
    let scroler = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (Math.trunc(document.documentElement.scrollTop) === scroler) {
        alert(" hello ")
    }
})