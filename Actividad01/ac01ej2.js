// Función para solicitar usuario y contraseña
function solicitarCredenciales() {
    // PEDIR USUARIO Y COTRASENA
    let usuario = prompt("Ingrese su usuario:");
    let contraseña = prompt("Ingrese su contraseña:");
  
    //PARA QUE LOS USUARIOS ESTEN EN MINUSCULA

    usuario = usuario.toLowerCase();
  
    // Validamos las credenciales utilizando switch case
    switch (usuario) {
      case "juan":
      case "pedro":
      case "maria":
      case "raul":
        switch (contraseña) {
          case "D153n0W3b2":
            alert("Credenciales válidas. Bienvenido.");
            break;
          default:
            alert("Contraseña incorrecta. Inténtelo de nuevo.");
        }
        break;
      default:
        alert("Usuario incorrecto. Inténtelo de nuevo.");
    }
  }
  
  // Llamamos a la función 
  solicitarCredenciales();
  