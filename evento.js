function saludar(evento) {
    evento.stopPropagation();
    alert('Hola!');
}

const container = document.getElementById("container");

container.addEventListener("click", () => {
    alert("Hola! Soy el div");
});