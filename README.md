# PROYECTO JS BÁSICO CAJERO **AUTOMÁTICO**

[Ver este proyecto](https://sato31.github.io/coding-cajeroATM/)

Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas.

![1660548633245](image/README/1660548633245.png)

Para esto, puedes trabajar con un arreglo de objetos como el siguiente:

```
var user =[  
	{ nombre:"Edrei Hernández", saldo:100.00, password:"edrei"},  
	{ nombre:"Goretty Flores", saldo:150.00, password:"gore"},  
	{ nombre:"Oscar Sánchez", saldo:50.00, password:"sanchez"}
]
```

Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta.

![1660548708780](image/README/1660548708780.png)

Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente.

![1660548781050](image/README/1660548781050.png)

Si el password es correcto, debes mostrar las siguientes opciones:

* **Consultar saldo**
* **Ingresar monto**
* **Retirar monto**

![1660548865618](image/README/1660548865618.png)

Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta.

![1660548908888](image/README/1660548908888.png)

Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar.

![1660548946505](image/README/1660548946505.png)

Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.

![1660548996659](image/README/1660548996659.png)

Al seleccionar retirar monto, el usuario debe escribir el monto a retirar.

![1660549036945](image/README/1660549036945.png)

Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

![1660549100307](image/README/1660549100307.png)

Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.

![1660549245716](image/README/1660549245716.png)

![1660549315249](image/README/1660549315249.png)

Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.
