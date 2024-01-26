// Script para el desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script para mostrar/ocultar el botón de desplazamiento hacia arriba
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// Script para desplazarse hacia arriba al hacer clic en el botón
document.getElementById("scroll-to-top").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});




    // Agrega proyectos dinámicamente
    function agregarProyecto(imagenSrc, titulo, descripcion, demoLink, repoLink) {
        var proyectosContainer = document.querySelector('.proyectos-container');

        // Crea un nuevo proyecto div
        var proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');

        // Crea el contenido del proyecto
        var contenidoProyecto = `
            <div class="proyecto-imagen">
                <img src="${imagenSrc}" alt="${titulo}">
            </div>
            <div class="proyecto-info">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
                <div class="botones-proyecto">
                    <a href="${demoLink}" target="_blank"><button>Ver Demo</button></a>
                    <a href="${repoLink}" target="_blank"><button>Repositorio</button></a>
                </div>
            </div>
        `;

        // Agrega el contenido al proyecto div
        proyectoDiv.innerHTML = contenidoProyecto;

        // Agrega el proyecto al contenedor
        proyectosContainer.appendChild(proyectoDiv);
    }

    // Agrega proyectos de ejemplo
    agregarProyecto('proyecto1.jpg', 'Proyecto 1', 'Descripción del Proyecto 1.', 'https://demo1.com', 'https://repo1.com');
    agregarProyecto('proyecto2.jpg', 'Proyecto 2', 'Descripción del Proyecto 2.', 'https://demo2.com', 'https://repo2.com');
    // Agrega más proyectos según sea necesario