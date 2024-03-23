function cambiar() {
    let botonModo =document.getElementById("noche");
    let hojaEstilo = document.getElementById("hoja-estilo");

    botonModo.classList.toggle("dia")
    if (hojaEstilo.getAttribute("href") === "css/style.css") {
        hojaEstilo.setAttribute("href", "css/styleDarkMode.css");
    } else {
        hojaEstilo.setAttribute("href", "css/style.css");
    }
}

const pantalla = document.querySelector(".contEscritura");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'ac') {
            pantalla.value = "0";
            return;
        }

        if (boton.id === "borrar") {
            if(pantalla.value.length === 1 || pantalla.value === "Error!"){
                pantalla.value = "0";
            }else{
                pantalla.value = pantalla.value.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try{
                pantalla.value = eval(pantalla.value.replace(/%/g, "*0.01"));
            } catch{
                pantalla.value = "Error!";
            }
            return;
        }


        if (pantalla.value === "0" || pantalla.value === "Error!") {
            pantalla.value = botonApretado;
        } else {
            pantalla.value += botonApretado;
        }
    });
});


