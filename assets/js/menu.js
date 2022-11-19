const menu = document.querySelector(".menu")
const navegation = document.querySelector("nav ul")
const menuImage = document.querySelector(".menu img")

menu.addEventListener("click", () => {
    ShowMenu()
    ImageShow()
})

const ImageShow = () => {
    if(menuImage.getAttribute("src") === "assets/images/open.svg") {
        menuImage.setAttribute("src", "assets/images/close.svg")
    }
    else {
        menuImage.setAttribute("src", "assets/images/open.svg")
    }
}

const ShowMenu = () => {
    if(navegation.classList.contains("active")) {
        navegation.classList.remove("active")
    }
    else {
        navegation.classList.add("active")
    }
}