// =========================
// SCROLL PARA CARTA
// =========================

function scrollToLetter() {

    document
        .getElementById("carta-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}

// =========================
// ABRIR CARTA
// =========================

function abrirCarta() {

    document
        .getElementById("envelope")
        .classList.toggle("open");

}

// =========================
// CONTADOR
// =========================

const dataInicio = new Date("2022-10-01T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = agora.getHours();

    const minutos = agora.getMinutes();

    const segundos = agora.getSeconds();

    document.getElementById("contador").innerHTML = `
        ${dias} dias ❤️<br>
        ${horas} horas ❤️<br>
        ${minutos} minutos ❤️<br>
        ${segundos} segundos ❤️
    `;

}

setInterval(atualizarContador, 1000);
atualizarContador();

// =========================
// MOTIVOS
// =========================

const motivos = [

    "Seu sorriso ilumina meus dias.",
    "Você me faz sorrir sem perceber.",
    "Seu jeito é único.",
    "Você é linda por dentro e por fora.",
    "Eu adoro conversar com você.",
    "Você torna qualquer dia melhor.",
    "Seu abraço parece casa.",
    "Sua voz me acalma.",
    "Você é especial para mim.",
    "Você faz meu coração acelerar.",

    "Você me inspira.",
    "Seu olhar é encantador.",
    "Você me entende.",
    "Você me faz feliz.",
    "Seu carinho faz diferença.",
    "Você é incrível.",
    "Seu jeito me conquista.",
    "Você é minha pessoa favorita.",
    "Você alegra meus pensamentos.",
    "Você é inesquecível.",

    "Seu sorriso é meu lugar favorito.",
    "Você me motiva.",
    "Você é doce.",
    "Você é gentil.",
    "Você me faz acreditar no amor.",
    "Você é divertida.",
    "Você é forte.",
    "Você é inteligente.",
    "Você é linda.",
    "Você é maravilhosa."

];

function novoMotivo() {

    const motivo =
        motivos[
            Math.floor(
                Math.random() * motivos.length
            )
        ];

    document.getElementById("motivo")
        .textContent = motivo;

}

// =========================
// CARROSSEL
// =========================

const fotos = [

    "imagens/foto1.jpg",
    "imagens/foto2.jpg",
    "imagens/foto3.jpg",
    "imagens/foto4.jpg",
    "imagens/foto5.jpg"

];

let fotoAtual = 0;

const imagem =
    document.getElementById("carouselImage");

function mostrarFoto() {

    imagem.src = fotos[fotoAtual];

}

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

        fotoAtual++;

        if (fotoAtual >= fotos.length) {
            fotoAtual = 0;
        }

        mostrarFoto();

    });

document
    .getElementById("prevBtn")
    .addEventListener("click", () => {

        fotoAtual--;

        if (fotoAtual < 0) {
            fotoAtual = fotos.length - 1;
        }

        mostrarFoto();

    });

// troca automática

setInterval(() => {

    fotoAtual++;

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    mostrarFoto();

}, 5000);

// =========================
// CORAÇÕES
// =========================

function criarCoracao() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 15 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(criarCoracao, 500);