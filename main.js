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

var user =[      //Se crea el arreglo de objetos user
    { nombre: "Edrei Hernández", saldo: 100.00, password: "edrei"},     //objetos
    { nombre: "Goretty Flores", saldo: 150.00, password: "gore"},
    { nombre: "Oscar Sánchez", saldo: 50.00, password: "sanchez"}
]

//VARIABLES GLOBALES 
var usuarioActual 
var saldoActual
var passActual

//ASIGNAR VARIABLES A BOTONES DE HTML
var buttonEdrei = document.getElementById('buttonEdrei')
var buttonGore = document.getElementById('buttonGore')
var buttonOscar = document.getElementById('buttonOscar')

var botonLogin = document.getElementById('botonLogin')

var consultaSaldo = document.getElementById('consultaSaldo')
var ingresaMonto = document.getElementById('ingresaMonto')
var retiraMonto = document.getElementById('retiraMonto')

var buttonConfirmIntro = document.getElementById('buttonConfirmIntro')
var buttonConfirmRetiro = document.getElementById('buttonConfirmRetiro')

//VARIABLES A SUSTITUIR EN HTML
var nameUser = document.getElementById('nameUser')
var welcome = document.getElementById('welcome')
var saldoTotal = document.getElementById('saldoTotal')


buttonEdrei.addEventListener('click', function asignaUsuario0(){
    usuarioActual = user[0].nombre
    saldoActual = user[0].saldo
    passActual = user[0].password
    containerCuentas.classList.add('none')
    loginUsuario.classList.remove('none')
    faceUsuario0.classList.remove('none')
    faceUsuario1.classList.add('none')
    faceUsuario2.classList.add('none')
    nameUser.innerHTML = (usuarioActual)
})
buttonGore.addEventListener('click', function asignaUsuario1(){
    usuarioActual = user[1].nombre
    saldoActual = user[1].saldo
    passActual = user[1].password
    containerCuentas.classList.add('none')
    loginUsuario.classList.remove('none')
    faceUsuario0.classList.add('none')
    faceUsuario1.classList.remove('none')
    faceUsuario2.classList.add('none')
    nameUser.innerHTML = (usuarioActual)   
})
buttonOscar.addEventListener('click', function asignaUsuario2(){
    usuarioActual = user[2].nombre
    saldoActual = user[2].saldo
    passActual = user[2].password
    containerCuentas.classList.add('none')
    loginUsuario.classList.remove('none')
    faceUsuario0.classList.add('none')
    faceUsuario1.classList.add('none')
    faceUsuario2.classList.remove('none')
    nameUser.innerHTML = (usuarioActual)
})

botonLogin.addEventListener('click', autenticarUsuario)

consultaSaldo.addEventListener('click', consulta)
ingresaMonto.addEventListener('click', ingresa)
retiraMonto.addEventListener('click', retira)

buttonConfirmIntro.addEventListener('click', deposito)
buttonConfirmRetiro.addEventListener('click', retirar)

function autenticarUsuario(){
    if (introPassword.value === passActual){ 
        alert('Contraseña aceptada')
        loginUsuario.classList.add('none')
        containerButtonsActions.classList.remove('none')
        welcomeUser()
        }
    else{
        alert('Contraseña incorrecta. Intentelo de nuevo.')
    }
}

function welcomeUser(){
    bienvenida.classList.remove('none')
    welcome.innerHTML = ('Bienvenido ' + usuarioActual)
}

function consulta() { 
    contenedorAcciones.classList.remove('none')
    containerIngreso.classList.add('none')
    containerRetiro.classList.add('none')
    containerSaldo.classList.remove('none')
    saldo.classList.remove('none')
    saldoTotal.innerHTML = '$' + saldoActual.toFixed(2) + ' MXN'
}
function ingresa(){
    contenedorAcciones.classList.remove('none')
    containerIngreso.classList.remove('none')
    containerRetiro.classList.add('none')
    containerSaldo.classList.add('none')
    showMontoYSaldoIntro.classList.add('none')
    saldo.classList.add('none')
}
    
function retira(){   
    contenedorAcciones.classList.remove('none')
    containerIngreso.classList.add('none')
    containerRetiro.classList.remove('none')
    containerSaldo.classList.add('none')
    showMontoYSaldoRetiro.classList.add('none')
    saldo.classList.add('none')
}

// function saldoUsuario(){
//     saldoTotal.innerHTML = ('$' + saldoActual)
// }
var dinero
function deposito(){
    showMontoYSaldoIntro.classList.remove('none')
    saldo.classList.remove('none')
    dinero = parseFloat(introMonto.value)
    if((saldoActual + dinero) <= 990){
        montoIngresado.innerHTML = '$' + introMonto.value + ' MXN'
        saldoActual = saldoActual + dinero
        saldoTotal.innerHTML = '$' + saldoActual.toFixed(2) + ' MXN'
    }
    else{
        alert('El monto no pudo ser ingresado.\n Recuerde que el saldo máximo es de $990.00 MXN')
    }
    introMonto.value=''
}

function retirar() {
    showMontoYSaldoRetiro.classList.remove('none')
    saldo.classList.remove('none')
    dinero = parseFloat(retiroMonto.value)
    if((saldoActual - dinero) >= 10){
        montoRetirado.innerHTML = '$' + retiroMonto.value + ' MXN'
        saldoActual = saldoActual - dinero
        saldoTotal.innerHTML = '$' + saldoActual.toFixed(2) + ' MXN'
    }
    else{
        alert('El monto no pudo ser retirado.\nRecuerde que el saldo mínimo es de $10.00 MXN')
    }
    retiroMonto.value=''
    
}