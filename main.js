let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contraseña');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if( numeroDigitado < 6){
        alert("Para garantizar que su contraseña sea segura se sugere un minimo de 6 Caracteres");
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        
        password+=caracterAleatorio;

    }

    contrasena.value = password;

}

//allow pasting en la consola 