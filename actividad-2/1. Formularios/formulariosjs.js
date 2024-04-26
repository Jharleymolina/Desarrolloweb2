$(document).ready(function() {
    // Arreglo para almacenar los datos de los clientes
    var clientes = [];
  
    // Evento click del botón "Registrar"
    $("#registrar").click(function() {
      // Obtener los valores de los campos del formulario
      var ci = $("#ci").val();
      var nombre = $("#nombre").val();
      var fecha = $("#fecha").val();
      var direccion = $("#direccion").val();
      var telefono = $("#telefono").val();
  
      // Validar si todos los campos están completos
      if (ci === "" || nombre === "" || fecha === "" || direccion === "" || telefono === "") {
        // Mostrar mensaje de error
        alert("No ha completado todos los campos. Por favor, inténtelo de nuevo.");
        return; // Salir de la función sin registrar el cliente
      }
  
      // Crear un objeto cliente con los datos del formulario
      var cliente = {
        ci: ci,
        nombre: nombre,
        fecha: fecha,
        direccion: direccion,
        telefono: telefono
      };
  
      // Agregar el objeto cliente al arreglo clientes
      clientes.push(cliente);
      
      // Llamar a la función para mostrar los clientes
      mostrarClientes();
      
      // Limpiar el formulario después de registrar un cliente
      limpiarFormulario();
    });
  
    // Función para mostrar los clientes en la tabla
    function mostrarClientes() {
      // Vaciar el cuerpo de la tabla
      $("#lista tbody").empty();
  
      // Recorrer el arreglo de clientes y agregar cada cliente a la tabla
      clientes.forEach(function(cliente) {
        var listItem = $("<tr>").html("<td>" + cliente.ci + "</td><td>" + cliente.nombre + "</td><td>" + cliente.fecha + "</td><td>" + cliente.direccion + "</td><td>" + cliente.telefono + "</td>");
        $("#lista tbody").append(listItem);
      });
    }
  
    // Función para limpiar el formulario
    function limpiarFormulario() {
      $("#ci").val("");
      $("#nombre").val("");
      $("#fecha").val("");
      $("#direccion").val("");
      $("#telefono").val("");
    }
  });
