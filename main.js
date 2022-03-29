// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas.
// Para esto, puedes trabajar con un arreglo de objetos como el siguiente:
// var cuentas = [
//   { nombre: "Hiromi", saldo: 200, password: 'helloworld' }
//   { nombre: "Manuel", saldo: 290, password: 'l33t' }
//   { nombre: "Luis", saldo: 67, password: '123' }
// ];
// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto,
// debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
// Consultar saldo
// Ingresar monto
// Retirar monto
// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar.
// Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar.
// Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
// Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio. 

// var user =[      //Se crea el arreglo de objetos user
//     { nombre: "Edrei", saldo: 1000.00, password: "edrei"},     //objetos
//     { nombre: "Gore", saldo: 1500.00, password: "gore"},
//     { nombre: "Oscar", saldo: 500.00, password: "sanchez"}
// ]

var welcome = document.getElementById('welcome')
var consultaSaldo = document.getElementById('consultaSaldo')
var IngresaMonto = document.getElementById('ingresaMonto')
var retiraMonto = document.getElementById('retiraMonto')
var saldoTotal = document.getElementById('saldoTotal')
// var usuarioActual = ''

// function autenticarUsuario(){
//     var inputNombre = prompt('Ingrese el número de usuario:\n    1. Edrei\n    2. Gore\n    3. Oscar')
//     var inputPassword =''
//     if(inputNombre === '1'){
//         inputPassword = prompt('Introduce Contraseña: ')
//         if (inputPassword === user[0].password){
//             welcome.innerHTML = ('Bienvenido ' + user[0].nombre)
//         }
//         else{
//             alert('Intentelo de nuevo') 
//         }
//     }
//     else if(inputNombre === '2'){
//         inputPassword = prompt('Introduce Contraseña: ')
//         if (inputPassword === user[1].password){
//             welcome.innerHTML = ('Bienvenida ' + user[1].nombre)
//             }
//         else{
//             alert('Intentelo de nuevo') 
//         }
//     }
//     else if(inputNombre === '3'){
//         inputPassword = prompt('Introduce Contraseña: ')
//         if (inputPassword === user[2].password){
//             welcome.innerHTML = ('Bienvenido ' + user[2].nombre)
//         }
//         else{
//             alert('Intentelo de nuevo') 
//         }
//     } 
//     else{
//         alert('Intentelo de nuevo ')
//         autenticarUsuario()
//     }
// }

welcome.innerHTML = ('Bienvenido usuario')

function muestraAccionesBotones(){
    consultaSaldo.addEventListener('click', () => { 
        contenedorAcciones.classList.remove('none')
        containerIngreso.classList.add('none')
        containerRetiro.classList.add('none')
        containerSaldo.classList.remove('none')
    })
    
    IngresaMonto.addEventListener('click', () => { 
        contenedorAcciones.classList.remove('none')
        containerIngreso.classList.remove('none')
        containerRetiro.classList.add('none')
        containerSaldo.classList.add('none')
    })
    
    retiraMonto.addEventListener('click', () => { 
        contenedorAcciones.classList.remove('none')
        containerIngreso.classList.add('none')
        containerRetiro.classList.remove('none')
        containerSaldo.classList.add('none')
    })
}

function saldosUsuarios(){
    // saldoTotal.innerHTML = ('$' + saldoActual)
    // saldoTotal.innerHTML = ('$' + user[1].saldo)
    // saldoTotal.innerHTML = ('$' + user[2].saldo)
}

function añadeMonto(){

}

function restaMonto(){

}

// autenticarUsuario()
muestraAccionesBotones()
saldosUsuarios()
añadeMonto()
restaMonto()


