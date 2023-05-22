
// Definimos la función que se ejecutará cuando se haga clic en un enlace
function manejarClick(e) {
  // Evitamos que el enlace se comporte de forma predeterminada (navegar a otra página)
  e.preventDefault();
  try {
    // Obtenemos el valor del atributo href del enlace que se hizo clic
    var seccionId = this.getAttribute('href');
    // Si no hay valor en el atributo href, no hacemos nada y salimos de la función
    if (!seccionId) {
      return;
    // Si el valor del atributo href es "#" (el mismo documento), no hacemos nada y salimos de la función
    } else if (seccionId === '#') {
      return;
    // Si el valor del atributo href es una dirección externa, abrimos el enlace en una nueva pestaña o ventana
    } else if (!seccionId.startsWith('#')) {
      // Obtenemos el valor del atributo target del enlace (por defecto es "_self", la misma ventana)
      var linkTarget = this.getAttribute('target');
      // Si el valor del atributo target es "_blank", abrimos el enlace en una nueva pestaña o ventana
      if (linkTarget === '_blank') {
        window.open(this.href, '_blank');
      // Si el valor del atributo target no es "_blank", navegamos a la dirección en la misma ventana
      } else {
        window.location.href = this.href;
      }
    // Si el valor del atributo href es una referencia a una sección en el mismo documento
    } else {
      // Buscamos el elemento que tiene el id especificado en el atributo href
      var seccion = document.querySelector(seccionId);
      // Si no encontramos ningún elemento con el id especificado, mostramos un mensaje de error y salimos de la función
      if (!seccion) {
        console.error('La sección con el id "' + seccionId + '" no existe en el documento.');
        return;
      }
      // Ocultamos todas las secciones del documento
      var secciones = document.querySelectorAll('#contenido-sitio section');
      for (var j = 0; j < secciones.length; j++) {
        secciones[j].style.display = 'none';
      }
      // Mostramos solo la sección correspondiente al enlace que se hizo clic
      seccion.style.display = 'block';
    }
  } catch (error) {
    // Si se produce un error, lo mostramos en la consola
    console.error(error);
  }
}

// Obtenemos todos los enlaces del menú de navegación
// var enlaces = document.querySelectorAll('a');       Para manejar todos los enlaces de la pagina
var enlaces = document.querySelectorAll('nav a');     
// Recorremos todos los enlaces y agregamos un escuchador de eventos "click" que llamará a la función manejarClick
for (var i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', manejarClick);
}


