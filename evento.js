function saludar(event) {
    event.stopPropagation();
    alert('Hola!');
}

const container = document.getElementById("container");

container.addEventListener("click", () => {
    alert("Hola! Soy el div");
}); 
