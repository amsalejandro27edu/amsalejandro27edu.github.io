const botonclaro = document.querySelector("#modo-claro");
const botonoscuro = document.querySelector("#modo-oscuro");
const chatgpt = document.querySelectorAll(".chatgpt");
const barra = document.querySelector("#barra-desplegable");
const barraocultada = document.querySelector("#barra-ocultada");
const footer = document.querySelector("footer");
const textoBarraLateral = document.querySelectorAll("span")
const li = document.querySelectorAll(".contenedor");
const botonInicio = document.querySelectorAll("#boton-inicio");
const cabecera = document.querySelector(".cabecera");
const enlace = document.querySelectorAll("a");


const coloresOscuro = {
    fondo: "#0d0d0d",
    barralateral: "#1a1a1a",
    borde: "#333",
    texto: "#e0e0e0",
    contenido: "#1a1a1a",
    titulo: "#1f1f1f",
    hover: "#262626",
    enlace: "#00b4ff"
};
 
const coloresClaro = {
    fondo: "#f5f5f5",
    barralateral: "#ffffff",
    borde: "#d0d0d0",
    texto: "#333333",
    contenido: "#f9f9f9",
    titulo: "#e8e8e8",
    hover: "#e0e0e0",
    enlace: "#0078d4"
};


const barraDesplegada = {
    ancho: "18%"
}

const barraNoDesplegada = {
    ancho: "8%"
}

function aplicarAnchoBarra(ancho) {
    const root = document.documentElement;
    root.style.setProperty("--ancho-barra", ancho);
}

function desplegarBarra(){
    aplicarAnchoBarra(barraDesplegada.ancho);
    barra.style.display = "inline-block";
    barraocultada.style.display = "none";
    footer.style.display = "flex";
    footer.style.flexDirection = "row";
        textoBarraLateral.forEach(span => {
        span.style.display = "flex";    
    });
    botonInicio.forEach(h1 => {
        h1.style.display = "flex";    
    });

    li.forEach(item => {
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";    
    });
    cabecera.style.justifyContent = "flex-start";
    enlace.forEach(a => {
        a.style.justifyContent = "flex-start";    
    });
}

function ocultarBarra(){
    aplicarAnchoBarra(barraNoDesplegada.ancho);
    barra.style.display = "none";
    barraocultada.style.display = "inline-block";
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
    textoBarraLateral.forEach(span => {
        span.style.display = "none";    
    });
    botonInicio.forEach(h1 => {
        h1.style.display = "none";    
    });
    li.forEach(item => {
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";    
    });
    cabecera.style.justifyContent = "center";
    enlace.forEach(a => {
        a.style.justifyContent = "center";    
    });
}

barra.addEventListener("click", ocultarBarra);
barraocultada.addEventListener("click", desplegarBarra);
 
function aplicarColores(colores) {
    const root = document.documentElement;
   
    root.style.setProperty("--color-fondo", colores.fondo);
    root.style.setProperty("--color-barra", colores.barralateral);
    root.style.setProperty("--color-borde", colores.borde);
    root.style.setProperty("--color-texto", colores.texto);
    root.style.setProperty("--color-contenido", colores.contenido);
    root.style.setProperty("--color-titulo", colores.titulo);
    root.style.setProperty("--color-hover", colores.hover);
    root.style.setProperty("--color-enlace", colores.enlace);
}
 
function cambiaroscuro(){
    aplicarColores(coloresOscuro);
   
    document.querySelector("#modo-claro").style.display = "none";
    botonoscuro.style.display = "none";
    botonclaro.style.display = "block";
    chatgpt.forEach(img => {
        img.src = "../img/ChatGPT2.svg";
    });
   
    localStorage.setItem("modo", "oscuro");
}
 
function cambiarclaro(){
 
    aplicarColores(coloresClaro);
    botonclaro.style.display = "none";
    botonoscuro.style.display = "block";
    chatgpt.forEach(img => {
            img.src = "../img/ChatGPT.svg";
        });

    localStorage.setItem("modo", "claro");
}
 
function inicializarModo(){
    const modoGuardado = localStorage.getItem("modo") || "oscuro";
   
    if(modoGuardado === "claro"){
        cambiarclaro();
    } else {
        cambiaroscuro();
    }
}
 
document.addEventListener("DOMContentLoaded", function(){
    const botonclaro = document.querySelector("#modo-claro");
    const botonoscuro = document.querySelector("#modo-oscuro");
   
    botonclaro.addEventListener("click", cambiarclaro);
    botonoscuro.addEventListener("click", cambiaroscuro);
 
   
    inicializarModo();
});
 