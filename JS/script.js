function cifrar(){
    var tipo = document.getElementById("tipo").value;

    if(tipo=="128"){
        leerdes()
        cifrar128()
    }
    if(tipo=="192"){
        leerdes()
        cifrar192()
    }
    if(tipo=="256"){
        leerdes()
        cifrar256()
    }

}

function cifrar128(){
    let txt = document.getElementById("txtDes").value;
    let clavedes = document.getElementById("clavedes").value;

    if(clavedes.length!=16){
        alert("La clave no es valida, tiene que ser de 16 caracteres");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clavedes);
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-128');
    }

}

function cifrar192(){
    let txt = document.getElementById("txtDes").value;
    let clavedes = document.getElementById("clavedes").value;

    if(clavedes.length!=24){
        alert("La clave no es valida, tiene que ser de 24 caracteres");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clavedes);
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-192');
    }

}

function cifrar256(){
    let txt = document.getElementById("txtDes").value;
    let clavedes = document.getElementById("clavedes").value;

    if(clavedes.length!=32){
        alert("La clave no es valida, tiene que ser de 32 caracteres");
    }else{
        var cifrado = CryptoJS.AES.encrypt(txt, clavedes);
        descargarArchivo(generarTexto(cifrado), 'CifradoAES-256');
    }

}

function descifrar(){
    var tipo = document.getElementById("tipo").value;

    if(tipo=="128"){
        leerdes()
        descifrar128()
    }
    if(tipo=="192"){
        leerdes()
        descifrar192()
    }
    if(tipo=="256"){
        leerdes()
        descifrar256()
    }

}

function descifrar128(){
    let txt = document.getElementById("txtDes").value;
    let clave = document.getElementById("clavedes").value;

    if(clave.length!=16){
        alert("La clave no es valida, tiene que ser de 16 caracteres");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-128');
    }

}

function descifrar192(){
    let txt = document.getElementById("txtDes").value;
    let clave = document.getElementById("clavedes").value;

    if(clave.length!=24){
        alert("La clave no es valida, tiene que ser de 24 caracteres");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-192');
    }

}

function descifrar256(){
    let txt = document.getElementById("txtDes").value;
    let clave = document.getElementById("clavedes").value;

    if(clave.length!=32){
        alert("La clave no es valida, tiene que ser de 32 caracteres");
    }else{
        var descifrado = CryptoJS.AES.decrypt(txt, clave);
        descargarArchivo(generarTexto(descifrado.toString(CryptoJS.enc.Utf8)), 'DescifradoAES-256');
    }

}

function descargarArchivo(contenidoEnBlob, nombreArchivo) {

    var reader = new FileReader();

    reader.onload = function (event) {

        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';

        save.download = nombreArchivo;
        var clicEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        save.dispatchEvent(clicEvent);

        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };

    reader.readAsDataURL(contenidoEnBlob);
};

function generarTexto(datos) {
    let texto = [];
    texto.push(datos);

    return new Blob(texto, {
        type: 'text/plain'
    });
};

function leerdes(){
    let archivodes = document.getElementById("archivodes").files[0];

    let readerDes = new FileReader();
    readerDes.onload = function(fileLoadedEvent){
        let txtDes = fileLoadedEvent.target.result;
        document.getElementById("txtDes").value = txtDes;
    };

    readerDes.readAsText(archivodes, "UTF-8");

}