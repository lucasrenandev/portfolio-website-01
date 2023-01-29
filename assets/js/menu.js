// SELECIONANDO ELEMENTOS
const menu = document.querySelector("#menu-icon")
const menuImage = document.querySelector("#menu-icon img")
const navegation = document.querySelector(".nav-list")

// ADICIONANDO EVENTO DE CLIQUE
menu.addEventListener("click", () => {
    MenuShow()
    ImageShow()
})

// FUNÇÃO PARA ALTERNAR AS IMAGENS DO MENU
const ImageShow = () => {
    if(menuImage.getAttribute("src") === "assets/images/menu.svg") {
        menuImage.setAttribute("src", "assets/images/close.svg")
    }
    else {
        menuImage.setAttribute("src", "assets/images/menu.svg")
    }
}

// FUNÇÃO PARA ALTERNAR ENTRE ABRIR E FECHAR MENU
const MenuShow = () => {
    if(navegation.classList.contains("active")) {
        navegation.classList.remove("active")
    }
    else {
        navegation.classList.add("active")
    }
}