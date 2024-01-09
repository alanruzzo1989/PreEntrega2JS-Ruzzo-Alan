const productos = [
  { nombre: "Remera", precio: 16500 },
  { nombre: "Jean", precio: 21800 },
  { nombre: "Musculosa", precio: 11500 },
  { nombre: "Bermuda", precio: 14000 },
  { nombre: "Media", precio: 3500 },
  { nombre: "Boxer", precio: 4600 },
  { nombre: "Calza", precio: 12700 },
]

let carrito = []
let nombre = prompt("Ingrese su nombre");

function saludar() {
  alert(nombre + ", Bienvenido@ a EyE INDUMENTARIA!");
}
saludar();

let seleccion = prompt(nombre + "¿Desea comprar algun producto?")

while (seleccion != "si" && seleccion != "no") {
  alert(nombre + "Por Favor ingrese `si` o `no`")
  seleccion = prompt(nombre + "¿Desea comprar algun producto?")
}

if (seleccion == "si") {
  alert("Esta es nuestra lista de Productos")
  let todosLosProductos = productos.map((producto) => producto.nombre + " " + "$" + producto.precio);
  alert(todosLosProductos.join("\n"))
} else if (seleccion == "no") {
  alert("¡Gracias por visitarnos!")
}

while (seleccion != "no") {
  let producto = prompt("Agrega un Producto")
  let precio = 0

  if (producto == "Remera" || producto == "Jean" || producto == "Musculosa" || producto == "Bermuda" || producto == "Media" || producto == "Boxer" || producto == "Calza") {
    switch (producto) {
      case "Remera":
        precio = 16500
        break
      case "Jean":
        precio = 21800
        break
      case "Musculosa":
        precio = 11500
        break
      case "Bermuda":
        precio = 14000
        break
      case "Media":
        precio = 3500
        break
      case "Boxer":
        precio = 4600
        break
      case "Calza":
        precio = 12700
        break
      default:
        break;
    }
    let unidades = parseInt(prompt("Que cantidad desea comprar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito);
  } else {
    alert("Producto NO Encontrado")
  }

  seleccion = prompt("Quiere seguir comprando?")

  while (seleccion == "no") {
    carrito.forEach((carritoFinal) => {
      alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto $${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acum, prod) => acum + prod.precio * prod.unidades, 0)
alert(`El TOTAL de su Compra es: $${total}`);

function despedir() {
  alert("¡MUCHAS GRACIAS POR SU COMPRA!. Vuelva Pronto");
}
despedir();
