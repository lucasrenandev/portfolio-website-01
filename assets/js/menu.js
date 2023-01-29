// SELECIONANDO ELEMENTOS
const menu = document.querySelector(".menu")
const menuImage = document.querySelector(".menu img")
const navegation = document.querySelector("nav ul")

// ADICIONANDO EVENTO DE CLIQUE
menu.addEventListener("click", () => {
    ShowMenu()
    ImageShow()
})

// FUNÇÃO PARA ALTERNAR AS IMAGENS DO MENU
const ImageShow = () => {
    if(menuImage.getAttribute("src") === "assets/images/open.svg") {
        menuImage.setAttribute("src", "assets/images/close.svg")
    }
    else {
        menuImage.setAttribute("src", "assets/images/open.svg")
    }
}

// FUNÇÃO PARA ALTERNAR ENTRE ABRIR E FECHAR MENU
const ShowMenu = () => {
    if(navegation.classList.contains("active")) {
        navegation.classList.remove("active")
    }
    else {
        navegation.classList.add("active")
    }
}