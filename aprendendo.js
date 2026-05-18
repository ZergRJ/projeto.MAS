const botaoMenu = document.getElementById("botao-menu");
    const menu = document.getElementById("menu");

    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });
});