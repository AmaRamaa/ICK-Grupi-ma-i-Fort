const burgerMenu = document.getElementById("burgerMenuDropDown");
const navList = document.getElementById("navLEFT");

const burgerMenuIsClicked = () => {
    let burgerMenu = document.getElementById("burgerMenuDropDown");
    let navList = document.getElementById("navLEFT");
    if (burgerMenu.style.display === "none") {
        console.log(true)
        burgerMenu.style.display = "flex";
        navList.style.display = "flex";

    } else {
        console.log(false)
        burgerMenu.style.display = "none";
        navList.style.display = "none";
    }
}