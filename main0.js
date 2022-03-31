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
// Checar la parte de la acumulación del dinero tanto en retiro como en depósito y modificar que aparezca el nuevo saldo actual tras haber realizado un movimiento

var user =[      //Se crea el arreglo de objetos user
    { nombre: "Edrei Hernández", saldo: 100.00, password: "edrei"},     //objetos
    { nombre: "Goretty Flores", saldo: 150.00, password: "gore"},
    { nombre: "Oscar Sánchez", saldo: 500.00, password: "sanchez"}
]

//VARIABLES GLOBALES 
var usuarioActual 
var saldoActual
var passActual

//ASIGNAR VARIABLES A BOTONES DE HTML
var buttonEdrei = document.getElementById('buttonEdrei')
var buttonGore = document.getElementById('buttonGore')
var buttonOscar = document.getElementById('buttonOscar')

buttonEdrei.addEventListener('click', function asignaUsuario0(){
    usuarioActual = user[0].nombre
    saldoActual = user[0].saldo
    passActual = user[0].password
    containerCuentas.classList.add('none')
    loginUsuario.classList.remove('none')
    faceUsuario1.classList.add('none')
    faceUsuario2.classList.add('none')
    nameUser.innerHTML = 'Edrei Hernández'
    bienvenida.classList.add('none')
    containerButtonsActions.classList.add('none')
})
buttonGore.addEventListener('click', function asignaUsuario1(){
    usuarioActual = user[1].nombre
    saldoActual = user[1].saldo
    passActual = user[1].password  
    containerCuentas.classList.add('none')
    faceUsuario0.classList.add('none')
    faceUsuario2.classList.add('none')
})
buttonOscar.addEventListener('click', function asignaUsuario2(){
    usuarioActual = user[2].nombre
    saldoActual = user[2].saldo
    passActual = user[2].password
    containerCuentas.classList.add('none')
    faceUsuario0.classList.add('none')
    faceUsuario1.classList.add('none')
})

// Validación de Contraseña
var botonLogin = document.getElementById('botonLogin')
// var introPassword = document.getElementById('introPassword')

botonLogin.addEventListener('click', validate)

function validate () {

    var pass = introPassword.value

    if (pass === passActual) {
        alert('Contraseña aceptada')
        loginUsuario.classList.add('none')
        bienvenida.classList.remove('none')
        welcome.innerHTML = usuarioActual
        containerButtonsActions.classList.remove('none')
    }else {
        alert('Contraseña incorrecta')
    }
}

// Botones de operaciones en cajero

var consultaSaldo = document.getElementById('consultaSaldo')
var ingresaMonto = document.getElementById('ingresaMonto')
var retiraMonto = document.getElementById('retiraMonto')
var saldoTotalInicial = document.getElementById('saldoTotalInicial')

consultaSaldo.addEventListener('click', consulta)
function consulta () {
    containerSaldo.classList.remove('none')
    containerIngreso.classList.add('none')
    containerRetiro.classList.add('none')
    saldoTotalInicial.innerHTML ='$' + saldoActual + ' MXN'
}

ingresaMonto.addEventListener('click', ingresa)
function ingresa () {
    containerIngreso.classList.remove('none')
    containerSaldo.classList.add('none')
    containerRetiro.classList.add('none')
}

retiraMonto.addEventListener('click', retira)
function retira () {
    containerRetiro.classList.remove('none')
    containerIngreso.classList.add('none')
    containerSaldo.classList.add('none')
}

// Operaciones en cajero
// Ingresar monto

var introMonto = document.getElementById('introMonto')
var buttonConfirmIntro = document.getElementById('buttonConfirmIntro')
var montoIngresado = document.getElementById('montoIngresado')
var saldoTotal = document.getElementById('saldoTotal')
var acumulado 

buttonConfirmIntro.addEventListener('click', deposito)

function deposito() {
    montoIngresado.innerHTML ='$' + introMonto.value + ' MXN'
    // acumulado = saldoActual + 
    saldoTotal.innerHTML ='$' + (saldoActual + parseFloat(introMonto.value)) + ' MXN'
}

//  Retirar monto

var buttonConfirmRetiro = document.getElementById('buttonConfirmRetiro')
var retiroMonto = document.getElementById('retiroMonto')
var montoRetirado = document.getElementById('montoRetirado')
var saldoTotalRetiro = document.getElementById('saldoTotalRetiro')

buttonConfirmRetiro.addEventListener('click', retirar)
function retirar () {
    montoRetirado.innerHTML = '$' + retiroMonto.value + ' MXN'
    saldoTotalRetiro.innerHTML = '$' + (saldoActual - parseFloat(retiroMonto.value)) + ' MXN'
}



