const burgerButton = document.getElementById("burger-button");
burgerButton.addEventListener("click", () => {
    const burgerMenu = document.getElementById("burger-menu");
    if (burgerMenu.getAttribute("class").indexOf("burger-menu_active") !== -1){
        burgerMenu.setAttribute("class", "burger-menu");
    }else{
        burgerMenu.setAttribute("class", "burger-menu burger-menu_active");
    }
});