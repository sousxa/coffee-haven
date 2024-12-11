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