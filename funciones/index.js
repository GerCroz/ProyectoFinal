//Funcion que le aplica el estilo a la opcion seleccionada en el menu y quita la prev seleccionada
seleccionar = (link) => {
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    link.className = "seleccionado";

    //desaparece el menu una vez seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";

}

//Funcion flecha para mostrar el menu responsive
responsiveMenu = () => {
    var x = document.getElementById("nav");

    if(x.className===""){
        x.className = "responsive";
    }else {
        x.className = "";
    }
}