// Función para determinar el navegador
function obtenerNavegador() {
    // Obtenemos el nombre del navegador desde el objeto navigator
    let nombreNavegador = navigator.userAgent;
  
    // utilizamos switch case para validar el navegador
    let navegador;
    switch(true) {
      case nombreNavegador.indexOf("Chrome") !== -1:
        navegador = "Google Chrome";
        break;
      case nombreNavegador.indexOf("Firefox") !== -1:
        navegador = "Mozilla Firefox";
        break;
      case nombreNavegador.indexOf("Safari") !== -1:
        navegador = "Safari";
        break;
      case nombreNavegador.indexOf("Opera") !== -1 || nombreNavegador.indexOf("OPR") !== -1:
        navegador = "Opera";
        break;
      case nombreNavegador.indexOf("Edge") !== -1:
        navegador = "Microsoft Edge";
        break;
      case nombreNavegador.indexOf("MSIE") !== -1:
        navegador = "Internet Explorer";
        break;
      default:
        navegador = "Navegador desconocido";
    }
  
    return navegador;
  }
  
  // Función para mostrar la bienvenida y el navegador
  function mostrarInformacion() {
    let navegador = obtenerNavegador();
    console.log("¡BIENVENIDO!");
    console.log("Estás utilizando el navegador:", navegador);
  }
  
  //  Llamada de función para mostrar la información
  mostrarInformacion();
  