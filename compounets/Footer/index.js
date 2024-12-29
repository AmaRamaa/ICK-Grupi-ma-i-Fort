class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const stylesheetRoot = this.getAttribute('stylesheetRoot')
        this.innerHTML = `
        <link rel="stylesheet" href="${stylesheetRoot}">
            <footer class="footer">
        <div class="container">
            <img src="../../Assets/imgs/Container.png" class="containerIMG1">
            <div class="row">
                <div class="footer-col1">
                    <h3>kosova hut</h3>
                    <br>
                    <p>FOOD AND RESTAURANT</p>
                    <br>
                    <h3>Tuesday-Saturday:12:00pm-23:00pm</h3>   
                    <br>
                    <h3>Closed on Sunday</h3>
                    <br>
                    <br>
                    <h3>5 star rated on TripAdvisor</h3>
                </div>
                <div class="footer-col">
                    <h3>Menu</h3>
                    <br>
                    <br>
                    <ul class="ul1">
                        <li><a href="../Menu/index.html">Steaks</a></li>
                        <br>
                        <li><a href="../BurgerMenu/index.html">Burgers</a></li>
                        <br>
                        <li><a href="../Menu/index.html">Coctails</a></li>
                        <br>
                        <li><a href="../Menu/index.html">Bar B Q</a></li>
                        <br>
                        <li><a href="../Menu/index.html">Desserts</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Newsletter</h3>
                    <br>
                    <br>
                    <p>Get recent news and updates.</p>
                    <br>

                    <forms>
                        <div class="back-end">
                            <input type="email" name="Email Address" id="email" placeholder="Email Address"
                                class="emailAddress">
                            <br>
                            <br>
                            <input type="button" value="Subscribe" class="button">
                    </forms>
                </div>

            </div>

        </div>
        <img src="../../Assets/imgs/Container2.png" alt="" class="containerIMG2">
        </div>
        <div class="bottom-div"></div>

        <div class="footer-col4">
            <p>@2025 kosova hut</p>
            <div class="pizza">
            </div>
            <div class="facebook">
                <a href="#">Facebook </a>
                </p> 
            </div>

            <div class="instagram">
                <a href="#">Instagram</a>
            </div>
        </div>
    </footer>
        `
    }
}
customElements.define('custom-footer', CustomFooter)