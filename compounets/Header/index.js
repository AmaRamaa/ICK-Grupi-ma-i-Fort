class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const stylesheetRoot = this.getAttribute('stylesheetRoot')
        this.innerHTML = `
        <link rel="stylesheet" href="${stylesheetRoot}">
        <header> 
        <div class="headerDIV">
            <div class="SVGdiv">
                <img src="../../Assets/svgs/Logo.svg">
                    
                <h2 class="SVGtext">
                    kosova hut 
                </h2>
            </div>
            <div class="navBARdiv">
                <nav class="navBAR">
                    <div class="navLEFT">
                        <a href="../home/index.html">Home</a>
                        <a href="../Menu/index.html">Menu</a>
                        <a href="../Reservations/index.html">Reservations</a>
                        <a href="../BurgerMenu/index.html">Burger Menu</a>
                    </div>
                    <div class="navRIGHT">
                        <div class="cart">
                            <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Cart Icon" class="cartICON">
                            <span class="cartCOUNT">0</span>
                        </div>
                        <button class="btn">Null</button>
                        <div class="menuICON" id="menuICON" onclick="burgerMenuIsClicked()" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <!-- <div class="menuICON" id="XIcon" onclick="burgerMenuIsClicked()">
                            <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
                        </div> -->
                    </div>
                </nav>
            </div>
        </div>
        <div class="burgerMenuDropDown" id="burgerMenuDropDown">
            <div class="navLEFT" id="navLEFT">
                <a href="../home/index.html">Home</a>
                        <a href="../Menu/index.html">Menu</a>
                        <a href="../Reservations/index.html">Reservations</a>
                        <a href="../BurgerMenu/index.html">Burger Menu</a>
            </div>
        </div>
    </header>
        `
    }
}
customElements.define('custom-header', CustomHeader)