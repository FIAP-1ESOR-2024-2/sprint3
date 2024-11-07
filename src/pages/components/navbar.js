class Navbar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <nav class="py-3 px-3 bg-secondary shadow-sm">
                <div class="d-flex flex-row justify-content-between">
                    <!-- Logo -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/agriculture.svg" alt="Logo Agrotech" class="me-3 main-logo">
                        <a href="./index.html">
                            <span class="fs-3 nav-text">Agrotech</span>
                        </a>
                    </div>

                    <!-- Navegação -->
                    <div class="d-flex align-items-center" style="margin-right: 100px;">
                        <ul class="list-unstyled m-0">
                            <li class="nav-text">
                                <a href="./contact.html" class="nav-text">Fale Conosco</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Login -->
                    <div class="d-flex align-items-center">
                        <a href="./login.html" class="d-flex align-items-center">
                            <span class="me-2 nav-text">Entrar</span>
                            <i class="ph ph-sign-in nav-text"></i>
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', Navbar);
