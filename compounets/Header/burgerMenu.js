const burgerMenu = document.getElementById("burgerMenuDropDown");
const navList = document.getElementById("navLEFT");

const burgerMenuIsClicked = () => {
    // Toggle visibility by adding/removing a class
    burgerMenu.classList.toggle("visible");
    navList.classList.toggle("visible");

    // Optional: Log current state for debugging
    console.log("Burger Menu Visible:", burgerMenu.classList.contains("visible"));
    console.log("Nav List Visible:", navList.classList.contains("visible"));
};