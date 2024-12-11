document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const header = item.querySelector(".faq-header");
        const content = item.querySelector(".faq-ls-descp");

        header.addEventListener("click", () => {
            // Fecha outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherContent = otherItem.querySelector(".faq-ls-descp");
                    otherItem.classList.remove("open");
                    otherContent.style.maxHeight = null; // Reseta a altura
                }
            });

            // Alterna o estado do item clicado
            if (item.classList.contains("open")) {
                item.classList.remove("open");
                content.style.maxHeight = null; // Fecha
            } else {
                item.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px"; // Abre dinamicamente
            }
        });
    });
});

document.getElementById("next").addEventListener("click", function() {
    const carousel = document.querySelector(".fb-content");
    const itemWidth = carousel.querySelector(".fb-comment").offsetWidth + parseInt(getComputedStyle(carousel).gap); // Largura de um item + o gap
    const totalWidth = carousel.scrollWidth; // A largura total do carrossel
    const scrollPosition = carousel.scrollLeft; // A posição atual de rolagem

    if (scrollPosition + itemWidth * 2 < totalWidth) {
        // Move o carrossel para a direita
        carousel.scrollBy({ left: itemWidth * 2, behavior: 'smooth' });
    }

    // Atualiza o estado das setas imediatamente após a rolagem
    updateArrowStates();
});

document.getElementById("prev").addEventListener("click", function() {
    const carousel = document.querySelector(".fb-content");
    const itemWidth = carousel.querySelector(".fb-comment").offsetWidth + parseInt(getComputedStyle(carousel).gap); // Largura de um item + o gap
    const scrollPosition = carousel.scrollLeft; // A posição atual de rolagem

    if (scrollPosition > 0) {
        // Move o carrossel para a esquerda
        carousel.scrollBy({ left: -itemWidth * 2, behavior: 'smooth' });
    }

    // Atualiza o estado das setas imediatamente após a rolagem
    updateArrowStates();
});

// Função para atualizar o estado das setas
function updateArrowStates() {
    const carousel = document.querySelector(".fb-content");
    const scrollPosition = carousel.scrollLeft;
    const itemWidth = carousel.querySelector(".fb-comment").offsetWidth + parseInt(getComputedStyle(carousel).gap);
    const totalWidth = carousel.scrollWidth;

    // Se o carrossel chegou ao final, desativa a seta direita
    if (scrollPosition + itemWidth * 2 >= totalWidth) {
        document.getElementById("next").classList.add("disabled");
    } else {
        document.getElementById("next").classList.remove("disabled");
    }

    // Se o carrossel está no início, desativa a seta esquerda
    if (scrollPosition === 0) {
        document.getElementById("prev").classList.add("disabled");
    } else {
        document.getElementById("prev").classList.remove("disabled");
    }
}

// Chama a função ao carregar a página para definir o estado inicial
window.addEventListener("load", updateArrowStates);

// Adicionar um ouvinte de rolagem para atualizar as setas enquanto o carrossel se move
document.querySelector(".fb-content").addEventListener("scroll", function() {
    updateArrowStates();
});
