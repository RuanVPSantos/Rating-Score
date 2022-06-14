var valores = document.querySelectorAll(".value");
const envio = document.querySelector(".submit");
const form = document.querySelector("form");
const primeiro = document.querySelector(".primeiro");
const segundo = document.querySelector(".segundo");
const feedback = document.querySelector(".feedback")

valores.forEach((valor) => valor.addEventListener("click", trocaDeEscolha));

function trocaDeEscolha({target}) {
    if (target.classList.contains("escolhido")) {
        target.classList.remove("escolhido");
        envio.setAttribute("disabled", "")
    } else {
        valores.forEach((valor) => valor.classList.remove("escolhido"));
        target.classList.toggle("escolhido");
        envio.removeAttribute("disabled")
        
    }
}

function confirmaEnvio(event) {
    event.preventDefault()
    const escolhido = +document.querySelector(".escolhido").innerHTML;
    feedback.innerHTML = ("You selected " + escolhido + " out of 5");

    primeiro.classList.add("oculto");
    segundo.classList.remove("oculto");
}


form.addEventListener("submit", confirmaEnvio)