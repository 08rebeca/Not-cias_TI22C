const botaoAbrir = document.querySelector(".header-mobile > button")
const botaoFechar = documente.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = documente.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click', abrirMenu)
botapFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}