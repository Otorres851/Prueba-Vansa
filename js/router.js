const app = document.getElementById("app");
const initialUrl = window.location.hash;
const router = new Navigo("/", {
  hash: true,
});

/*-------------------*/
/*------ Index ------*/
/*-------------------*/
router.on("/", function () {
  app.innerHTML = `
  <div class="slide slide-index">

    <div class="contenido">

    </div>

    <div class="navegacion">
      <ul>
        <li><a href="/info" data-navigo>Siguiente</a></li>
      </ul>
    </div>

  </div>`;

  
  $(document).ready(function() {
    // Habilita el botón de siguiente luego de 3 segundos
  });

  $(".slide").addClass("activo");
});

/*------------------*/
/*------ Info ------*/
/*------------------*/
router.on("/info", function () {
  app.innerHTML = `
  <div class="slide slide-info">

    <div class="contenido">

    </div>

    <div class="navegacion">
      <ul>
        <li><a href="/" data-navigo>Anterior</a></li>    
        <li><a href="/video" data-navigo class="inactivo">Siguiente</a></li>
      </ul>
    </div>

  </div>`;

  // Habilita el botón de siguiente luego de desplegar la información

  $(".slide").addClass("activo");
});

/*-------------------*/
/*------ Video ------*/
/*-------------------*/
router.on("/video", function () {
  app.innerHTML = `
  <div class="slide slide-video">

    <div class="contenido">

    </div>

    <div class="navegacion">
      <ul>
        <li><a href="/info" data-navigo>Anterior</a></li>    
        <li><a href="/redes" data-navigo class="inactivo">Siguiente</a></li>
      </ul>
    </div>

  </div>`;

  // Habilita el botón de siguiente luego de ver el video
  // La música de fondo se detiene o disminuye mientras se vea el video

  $(".slide").addClass("activo");
});

/*-------------------*/
/*------ Redes ------*/
/*-------------------*/
router.on("/redes", function () {
  app.innerHTML = `
  <div class="slide slide-redes">

    <div class="contenido">

    </div>

    <div class="navegacion">
      <ul>
        <li><a href="/video" data-navigo>Anterior</a></li>    
        <li><a href="/servicios" data-navigo class="inactivo">Siguiente</a></li>
      </ul>
    </div>

  </div>`;

  // Habilita el botón de siguiente luego de ver todos los desplegables (3)

  $(".slide").addClass("activo");
});

/*-----------------------*/
/*------ Servicios ------*/
/*-----------------------*/
router.on("/servicios", function () {
  app.innerHTML = `
  <div class="slide slide-servicios">

    <div class="contenido">

    </div>

    <div class="navegacion">
      <ul>
        <li><a href="/redes" data-navigo>Anterior</a></li>    
        <li><a href="/cierre" data-navigo class="inactivo">Siguiente</a></li>
      </ul>
    </div>

  </div>`;

  // Al dar click en las flechas del carrusel debe sonar el efecto transition
  // Habilita el botón de siguiente luego de ver todos los slides del carrusel
  

  $(".slide").addClass("activo");
});

/*--------------------*/
/*------ Cierre ------*/
/*--------------------*/
router.on("/cierre", function () {
  app.innerHTML = `
  <div class="slide slide-cierre">

    <div class="contenido">

    </div>

    <div class="navegacion">
      <ul>
        <li><a href="/" data-navigo>Reiniciar</a></li>    
        <li><a href="https://www.linkedin.com/in/otorres-38a6241a2/" class="inactivo">Finalizar</a></li>
      </ul>
    </div>

  </div>`;

  $(document).ready(function() {
    // Habilita el botón de finalizar luego de 3 segundos
    // En el botón de finalizar siéntete libre de llevarnos a tu perfil de LinkedIn o de cerrar la pestaña del navegador
  });  

  $(".slide").addClass("activo");
});



router.resolve(initialUrl || "/");