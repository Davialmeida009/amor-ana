const btn = document.getElementById("openLetter");
const letter = document.getElementById("letter");

btn.addEventListener("click", () => {

    if(letter.style.display === "block"){
        letter.style.display = "none";
        btn.textContent = "Abrir Minha Carta 💌";
    } else {
        letter.style.display = "block";
        btn.textContent = "Fechar Carta ❤️";
    }

});