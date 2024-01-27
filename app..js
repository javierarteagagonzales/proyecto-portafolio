$(document).ready(function() {
    // Agrega un evento de clic a todos los enlaces del menú
    $('nav a').on('click', function(event) {
      // Evita la acción predeterminada del enlace
      event.preventDefault();
  
      // Obtiene el ID de la sección a la que se va a desplazar
      var targetId = $(this).attr('href');
  
      // Realiza un desplazamiento suave hacia la sección de destino
      $('html, body').animate({
        scrollTop: $(targetId).offset().top
      }, 800); // Ajusta la velocidad según tus preferencias
    });
  });
  