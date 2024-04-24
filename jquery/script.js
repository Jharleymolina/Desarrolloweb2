$(document).ready(function(){
    var estudiantes = [];

    // Verificar si hay datos guardados en el almacenamiento local
    var estudiantesGuardados = localStorage.getItem("estudiantes");
    if (estudiantesGuardados) {
        estudiantes = JSON.parse(estudiantesGuardados);
        mostrarEstudiantes();
    }

    $("#registrar").click(function(){
        var ci = $("#ci").val();
        var nombre = $("#nombre").val();
        var fecha = $("#fecha").val();
        var direccion = $("#direccion").val();

        var estudiante = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };

        estudiantes.push(estudiante);
        guardarEstudiantes();
        mostrarEstudiantes();
        limpiarFormulario();
    });

    $("#limpiarTabla").click(function(){
        limpiarTabla();
    });

    function mostrarEstudiantes() {
        $("#lista").empty();
        $.each(estudiantes, function(index, estudiante) {
            $("#lista").append("<tr><td>" + estudiante.ci + "</td><td>" + estudiante.nombre + "</td><td>" + estudiante.fecha + "</td><td>" + estudiante.direccion + "</td></tr>");
        });
    }

    function limpiarFormulario() {
        $("#ci").val("");
        $("#nombre").val("");
        $("#fecha").val("");
        $("#direccion").val("");
    }

    function limpiarTabla() {
        estudiantes = [];
        guardarEstudiantes();
        mostrarEstudiantes();
    }

    function guardarEstudiantes() {
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    }
});
