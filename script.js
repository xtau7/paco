let paginaActual = 1;
const totalPaginas = 3;

document.addEventListener("DOMContentLoaded", function() {
    // Asegurar que el sobre esté visible al cargar la página
    const sobre = document.getElementById('sobre');
    sobre.style.display = 'block';
});

function mostrarCarta() {
    const sobre = document.getElementById('sobre');
    const carta = document.getElementById('carta');
    const musicaFondo = document.getElementById('musica-fondo');

    sobre.style.transform = 'translateY(-100%)';
    carta.style.transform = 'translate(-50%, -50%) scale(1)';
    mostrarPagina(paginaActual);

    musicaFondo.play(); // Reproducir la música de fondo
}

function mostrarPagina(pagina) {
    const mensajes = document.querySelectorAll('.mensaje');
    mensajes.forEach(mensaje => {
        mensaje.classList.remove('mostrar');
        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 500); // Asegurar que se ocultan después de la transición
    });

    setTimeout(() => {
        if (pagina === 'final') {
            const final = document.getElementById('pagina-final');
            final.style.display = 'block';
            setTimeout(() => {
                final.classList.add('mostrar');
                lanzarConfeti(); // Lanza el confeti al mostrar la última página
            }, 10); // Asegurar que la clase se agrega después de la visualización
        } else {
            const mensajeActual = document.getElementById(`pagina-${pagina}`);
            mensajeActual.style.display = 'block';
            setTimeout(() => {
                mensajeActual.classList.add('mostrar');
            }, 10); // Asegurar que la clase se agrega después de la visualización
        }
    }, 500); // Dar tiempo a la transición de ocultar
}

function siguientePagina() {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarPagina(paginaActual);
    } else {
        mostrarPagina('final');
    }
}

function anteriorPagina() {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarPagina(paginaActual);
    }
}

function crearCorazon() {
    const particula = document.createElement('div');
    particula.innerHTML = '❤️';
    particula.className = 'particula';
    document.body.appendChild(particula);

    particula.style.left = Math.random() * 100 + 'vw';
    particula.style.animationDuration = Math.random() * 2 + 3 + 's';

    setTimeout(() => {
        particula.remove();
    }, 5000);
}

// Ajustar la cantidad de corazones generados
setInterval(crearCorazon, 1000);

function lanzarConfeti() {
    for (let i = 0; i < 100; i++) {
        const confeti = document.createElement('div');
        confeti.className = 'confeti';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confeti);

        setTimeout(() => {
            confeti.remove();
        }, 3000);
    }
}
