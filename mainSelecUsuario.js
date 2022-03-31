
var user =[      //Se crea el arreglo de objetos user
    { nombre: "Edrei", saldo: 1000.00, password: "edrei"},     //objetos
    { nombre: "Gore", saldo: 1500.00, password: "gore"},
    { nombre: "Oscar", saldo: 500.00, password: "sanchez"}
]

var buttonEdrei = document.getElementById('buttonEdrei')
var buttonGore = document.getElementById('buttonGore')
var buttonOscar = document.getElementById('buttonOscar')

var usuarioActual 
var saldoActual
var passActual

buttonEdrei.addEventListener('click', function asignaUsuario0(){
    usuarioActual = user[0].nombre
    saldoActual = user[0].saldo
    passActual = user[0].password
})
buttonGore.addEventListener('click', function asignaUsuario1(){
    usuarioActual = user[1].nombre
    saldoActual = user[1].saldo
    passActual = user[1].password
})
buttonOscar.addEventListener('click', function asignaUsuario2(){
    usuarioActual = user[2].nombre
    saldoActual = user[2].saldo
    passActual = user[2].password
})


// function asignaUsuario0(){
//     usuarioActual = user[0].nombre
//     saldoActual = user[0].saldo
//     passActual = user[0].password 
// }
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