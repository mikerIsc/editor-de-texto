<<<<<<< HEAD

function buscarTexto() {
    let texto = document.getElementById("editor").innerHTML;
    let palabra = document.getElementById("buscar").value;
    let regex = new RegExp(`(${palabra})`, "gi");
    let nuevoTexto = texto.replace(regex, '<mark>$1</mark>');
    document.getElementById("editor").innerHTML = nuevoTexto;
}

function ponerNegrita() {
    document.execCommand('bold');
}

function convertirMayusculas() {
    let editor = document.getElementById("editor");
    editor.innerHTML = editor.innerText.toUpperCase();
}

function convertirMinusculas() {
    let editor = document.getElementById("editor");
    editor.innerHTML = editor.innerText.toLowerCase();
}

function reemplazarTexto() {
    let palabra = prompt("Palabra a reemplazar:");
    let nuevaPalabra = prompt("Nueva palabra:");
    let editor = document.getElementById("editor");
    let regex = new RegExp(palabra, "gi");
    editor.innerHTML = editor.innerText.replace(regex, nuevaPalabra);
}
=======
function buscarTexto() {
            let texto = document.getElementById("editor").innerHTML;
            let palabra = document.getElementById("buscar").value;
            let regex = new RegExp(`(${palabra})`, "gi");
            let nuevoTexto = texto.replace(regex, '<mark>$1</mark>');
            document.getElementById("editor").innerHTML = nuevoTexto;
        }

        function ponerNegrita() {
            document.execCommand('bold');
        }

        function convertirMayusculas() {
            let editor = document.getElementById("editor");
            editor.innerHTML = editor.innerText.toUpperCase();
        }

        function convertirMinusculas() {
            let editor = document.getElementById("editor");
            editor.innerHTML = editor.innerText.toLowerCase();
        }

        function reemplazarTexto() {
            let palabra = prompt("Palabra a reemplazar:");
            let nuevaPalabra = prompt("Nueva palabra:");
            let editor = document.getElementById("editor");
            let regex = new RegExp(palabra, "gi");
            editor.innerHTML = editor.innerText.replace(regex, nuevaPalabra);
        }
>>>>>>> f35b8ffb99597ac0f5e8425c14d183b34ddba2af
