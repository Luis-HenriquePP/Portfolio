/* =========================================================
   PORTFÓLIO - JAVASCRIPT
   ========================================================= */


/* =========================================================
   ANO AUTOMÁTICO DO FOOTER
   ========================================================= */

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


/* =========================================================
   NAVBAR AO ROLAR
   ========================================================= */

const navbar = document.getElementById("navbar");


function atualizarNavbar() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", atualizarNavbar);

atualizarNavbar();



/* =========================================================
   ANIMAÇÃO REVEAL
   ========================================================= */

const elementosReveal = document.querySelectorAll(".reveal");


const observerReveal = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementosReveal.forEach((elemento) => {

    observerReveal.observe(elemento);

});



/* =========================================================
   TECNOLOGIAS
   ========================================================= */

const tecnologias = document.querySelectorAll(".tech-orbit");

const technologyName =
    document.getElementById("technology-name");

const technologyCategory =
    document.getElementById("technology-category");

const technologyDescription =
    document.getElementById("technology-description");



/* =========================================================
   FUNÇÃO PARA MOSTRAR TECNOLOGIA
   ========================================================= */

function selecionarTecnologia(tecnologia) {

    if (!tecnologia) {
        return;
    }


    /* Remove seleção anterior */

    tecnologias.forEach((item) => {

        item.classList.remove("active");

    });


    /* Seleciona a atual */

    tecnologia.classList.add("active");


    /* Pega os dados */

    const nome =
        tecnologia.dataset.name;

    const categoria =
        tecnologia.dataset.category;

    const descricao =
        tecnologia.dataset.description;


    /* Pequena animação */

    if (technologyName) {

        technologyName.classList.remove("technology-change");

        void technologyName.offsetWidth;

        technologyName.classList.add("technology-change");

    }


    /* Atualiza informações */

    if (technologyName) {

        technologyName.textContent = nome;

    }


    if (technologyCategory) {

        technologyCategory.textContent = categoria;

    }


    if (technologyDescription) {

        technologyDescription.textContent = descricao;

    }

}



/* =========================================================
   CLIQUE NAS TECNOLOGIAS
   ========================================================= */

tecnologias.forEach((tecnologia) => {

    tecnologia.addEventListener("click", () => {

        selecionarTecnologia(tecnologia);

    });

});



/* =========================================================
   TECLADO
   Permite selecionar tecnologia com Enter/Espaço
   ========================================================= */

tecnologias.forEach((tecnologia) => {

    tecnologia.addEventListener("keydown", (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            selecionarTecnologia(tecnologia);

        }

    });

});



/* =========================================================
   FECHAR MENU MOBILE AO CLICAR EM UM LINK
   ========================================================= */

const menu = document.getElementById("menu");

const linksMenu =
    document.querySelectorAll(".navbar .nav-link");


linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth <= 991 &&
            menu &&
            menu.classList.contains("show")
        ) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(menu);

            if (bootstrapCollapse) {

                bootstrapCollapse.hide();

            } else {

                new bootstrap.Collapse(menu, {
                    toggle: false
                }).hide();

            }

        }

    });

});



/* =========================================================
   NAVEGAÇÃO SUAVE
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const destino =
            document.querySelector(this.getAttribute("href"));


        if (!destino) {
            return;
        }


        event.preventDefault();


        destino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});



/* =========================================================
   EFEITO PARALLAX MUITO LEVE NO SISTEMA ORBITAL
   ========================================================= */

const orbitSystem =
    document.querySelector(".orbit-system");


if (
    orbitSystem &&
    window.matchMedia("(min-width: 769px)").matches
) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;


    document.addEventListener("mousemove", (event) => {

        mouseX =
            (event.clientX / window.innerWidth - 0.5) * 10;

        mouseY =
            (event.clientY / window.innerHeight - 0.5) * 10;

    });


    function animarOrbita() {

        currentX += (mouseX - currentX) * 0.04;

        currentY += (mouseY - currentY) * 0.04;


        orbitSystem.style.transform =
            `translate(${currentX}px, calc(-50% + ${currentY}px))`;


        requestAnimationFrame(animarOrbita);

    }


    animarOrbita();

}



/* =========================================================
   ATALHO DE TECLADO
   Pressionar ESC remove foco das tecnologias
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        tecnologias.forEach((tecnologia) => {

            tecnologia.classList.remove("active");

        });


        const primeiraTecnologia =
            document.querySelector(".tech-postgresql");


        if (primeiraTecnologia) {

            primeiraTecnologia.classList.add("active");

            selecionarTecnologia(primeiraTecnologia);

        }

    }

});