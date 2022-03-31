// var user =[      //Se crea el arreglo de objetos user
//     { nombre: "Edrei", saldo: 1000.00, password: "edrei"},     //objetos
//     { nombre: "Gore", saldo: 1500.00, password: "gore"},
//     { nombre: "Oscar", saldo: 500.00, password: "sanchez"}
// ]

// var buttonEdrei = document.getElementById('buttonEdrei')
// var buttonGore = document.getElementById('buttonGore')
// var buttonOscar = document.getElementById('buttonOscar')

//var welcome = document.getElementById('welcome')

// var usuarioActual = null
// var saldoActual = null
// var passActual = null

// function asignaUsuario0(){
//     usuarioActual = user[0].nombre
//     saldoActual = user[0].saldo
//     passActual = user[0].password
//}
// function asignaUsuario1(){
//     usuarioActual = user[1].nombre
//     saldoActual = user[1].saldo
//     passActual = user[1].password
// }
// function asignaUsuario2(){
//     usuarioActual = user[2].nombre
//     saldoActual = user[2].saldo
//     passActual = user[2].password
// }

// buttonEdrei.addEventListener('click', function asignaUsuario0(){
//     usuarioActual = user[0].nombre
//     saldoActual = user[0].saldo
//     passActual = user[0].password
// })
// buttonEdrei.addEventListener('click', autenticarUsuario)

// buttonGore.addEventListener('click', function asignaUsuario1(){
//     usuarioActual = user[1].nombre
//     saldoActual = user[1].saldo
//     passActual = user[1].password
// })
// buttonGore.addEventListener('click', autenticarUsuario)

// buttonOscar.addEventListener('click', function asignaUsuario2(){
//     usuarioActual = user[2].nombre
//     saldoActual = user[2].saldo
//     passActual = user[2].password
// })
// buttonOscar.addEventListener('click', autenticarUsuario)

var containerEdrei = document.getElementById('containerEdrei')
var containerGore = document.getElementById('containerGore')
var containerOscar = document.getElementById('containerOscar')

function autenticarUsuario(){
    // var inputPassword = prompt('Introduce Contraseña: ')
    confContraseña.innerHTML = introPass.value
    if (confContraseña === passActual){ 
        console.log('Bienvenido(a) ' + usuarioActual)
        //console.log(usuarioActual + ' ' + saldoActual + ' ' + passActual)
        }
    else{
        alert('Intentelo de nuevo ')
        autenticarUsuario()
    }
}

function muestraUsuario(){
    if (usuarioActual === 'Edrei'){
        containerEdrei.classList.remove('none')
        containerGore.classList.add('none')
        containerOscar.classList.add('none') 
    }
    else if (usuarioActual === 'Gore'){
        containerEdrei.classList.add('none')
        containerGore.classList.remove('none')
        containerOscar.classList.add('none') 
    }
    else if (usuarioActual === 'Oscar'){
        containerEdrei.classList.add('none')
        containerGore.classList.add('none')
        containerOscar.classList.remove('none') 
    }
}
autenticarUsuario()
muestraUsuario()

//welcome.innerHTML = ('Bienvenido ' + usuarioActual)
//console.log(usuarioActual + ' ' + saldoActual + ' ' + passActual)
//export { asignaUsuarioActual };