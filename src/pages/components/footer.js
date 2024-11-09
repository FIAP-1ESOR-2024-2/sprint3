class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
     <footer class="py-3 px-3 bg-secondary shadow-sm">
        <div class="row">
            <div class="col-6">
                <div class="d-flex align-items-center">
                    <img src="../assets/agriculture.svg" alt="Logo Agrotech" class="me-3 main-logo">
                    <a href="./index.html">
                        <span class="fs-3 nav-text">Agrotech</span>
                    </a>
                </div>
                <p>� Copyright 2024 Agrotech</p>
            </div>
            <div class="col-4">                
                <ul style="color: white">
                    <li><a href="./contact.html" class="nav-text">Fale Conosco</a></li>
                    <li><a href="#" class="nav-text">Sobre n�s</a></li>
                    <li><a href="#" class="nav-text">Pol�ticas de privacidade</a></li>
                    <li><a href="#" class="nav-text">Termos de utiliza��o</a></li>
                </ul>
            </div>            
        </div>
    </footer>
        `;
    }
}

customElements.define('footer-bar', Footer);