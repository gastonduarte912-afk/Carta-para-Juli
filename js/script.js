console.log("ESTE ES MI SCRIPT");

// =========================
// ABRIR CARTA
// =========================

const boton = document.querySelector("#abrirCarta");

const portada = document.querySelector("#portada");

const carta = document.querySelector("#carta");

const navegacion = document.querySelector("#navegacion");


boton.addEventListener("click", function() {
    portada.classList.add("ocultar-portada");
    carta.classList.add("mostrar-carta");
    navegacion.classList.add("visible");

    // Intentar comenzar la canción después del clic
    cancion.play()
        .then(function() {
            botonMusica.textContent = "⏸ Pausar";
        })
        .catch(function() {
            console.log("El navegador bloqueó la reproducción automática.");
        });

    setTimeout(function() {
        carta.scrollIntoView({
            behavior: "smooth"
        });
    }, 100);
});

// =========================
// MÚSICA
// =========================

const botonMusica = document.querySelector("#botonMusica");

const cancion = document.querySelector("#cancion");


botonMusica.addEventListener("click", function() {

    if (cancion.paused) {

        cancion.play();

        botonMusica.textContent = "⏸ Pausar";

    } else {

        cancion.pause();

        botonMusica.textContent = "▶ Reproducir";

    }

}); 

// =========================
// CANJES
// =========================

const botonesCanje = document.querySelectorAll(".boton-canje");


botonesCanje.forEach(function(boton) {

    boton.addEventListener("click", function() {

        boton.textContent = "¡Canjeado! ❤️";

        boton.style.background = "#75666d";

    });

});

// =========================
// CONTADOR DE TIEMPO
// =========================

// CAMBIÁ ESTA FECHA POR LA FECHA REAL
const fechaInicio = new Date("2023-07-08T00:00:00");


function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;


    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );


    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );


    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    document.querySelector("#dias").textContent = dias;

    document.querySelector("#horas").textContent =
        horas.toString().padStart(2, "0");

    document.querySelector("#minutos").textContent =
        minutos.toString().padStart(2, "0");

    document.querySelector("#segundos").textContent =
        segundos.toString().padStart(2, "0");

}


actualizarContador();

setInterval(actualizarContador, 1000);

// =========================
// MENSAJES PRIVADOS
// =========================

const mensajes = document.querySelectorAll(".mensaje");


mensajes.forEach(function(mensaje) {

    mensaje.addEventListener("click", function() {

        mensaje.classList.toggle("abierto");

    });

});

// =========================
// ANIMACIONES AL HACER SCROLL
// =========================

const elementosAnimados = document.querySelectorAll(
    ".historia, .fotos, .musica, .canjes, .contador, .mensajes, .carta-final"
);


elementosAnimados.forEach(function(elemento) {

    elemento.classList.add("animar");

});


const observador = new IntersectionObserver(function(elementos) {

    elementos.forEach(function(elemento) {

        if (elemento.isIntersecting) {

            elemento.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});


elementosAnimados.forEach(function(elemento) {

    observador.observe(elemento);

});

/* ========================================
   VISOR DE FOTOS
======================================== */

const visorFoto = document.querySelector("#visorFoto");
const fotoGrande = document.querySelector("#fotoGrande");
const cerrarFoto = document.querySelector("#cerrarFoto");
const fotoAnterior = document.querySelector("#fotoAnterior");
const fotoSiguiente = document.querySelector("#fotoSiguiente");
const contadorFotos = document.querySelector("#contadorFotos");

const fotosGaleria = [
    "fotos/foto1.jpeg",
    "fotos/foto2.jpeg",
    "fotos/foto3.jpeg",
    "fotos/foto4.jpeg",
    "fotos/foto5.jpeg",
    "fotos/foto6.jpeg",
    "fotos/foto7.jpg",
    "fotos/foto8.jpg",
    "fotos/foto9.jpg",
    "fotos/foto10.jpg",
    "fotos/foto11.jpg",
    "fotos/foto12.jpg",
    "fotos/foto13.jpg",
    "fotos/foto14.jpg",
    "fotos/foto15.jpg",
    "fotos/foto16.jpg",
    "fotos/foto17.jpg",
    "fotos/foto18.jpg",
    "fotos/foto19.jpg",
    "fotos/foto20.jpg",
    "fotos/foto21.jpg",
    "fotos/foto22.jpg",
    "fotos/foto23.jpg",
    "fotos/foto24.jpg",
    "fotos/foto25.jpg",
    "fotos/foto26.jpg"
];

let fotoActual = 0;


/* ABRIR */

function abrirVisor(indice) {

    fotoActual = indice;

    fotoGrande.src = fotosGaleria[fotoActual];

    contadorFotos.textContent =
        (fotoActual + 1) + " / " + fotosGaleria.length;

    visorFoto.classList.add("visible");

    document.body.style.overflow = "hidden";
}


/* CERRAR */

function cerrarVisor() {

    visorFoto.classList.remove("visible");

    document.body.style.overflow = "";

}


/* ANTERIOR */

function mostrarFotoAnterior() {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotosGaleria.length - 1;
    }

    fotoGrande.src = fotosGaleria[fotoActual];

    contadorFotos.textContent =
        (fotoActual + 1) + " / " + fotosGaleria.length;
}


/* SIGUIENTE */

function mostrarFotoSiguiente() {

    fotoActual++;

    if (fotoActual >= fotosGaleria.length) {
        fotoActual = 0;
    }

    fotoGrande.src = fotosGaleria[fotoActual];

    contadorFotos.textContent =
        (fotoActual + 1) + " / " + fotosGaleria.length;
}


/* BOTONES */

cerrarFoto.addEventListener("click", cerrarVisor);

fotoAnterior.addEventListener(
    "click",
    mostrarFotoAnterior
);

fotoSiguiente.addEventListener(
    "click",
    mostrarFotoSiguiente
);


/* CERRAR HACIENDO CLICK AFUERA */

visorFoto.addEventListener(
    "click",
    function(evento) {

        if (evento.target === visorFoto) {
            cerrarVisor();
        }

    }
);


/* TECLADO */

document.addEventListener(
    "keydown",
    function(evento) {

        if (!visorFoto.classList.contains("visible")) {
            return;
        }

        if (evento.key === "Escape") {
            cerrarVisor();
        }

        if (evento.key === "ArrowLeft") {
            mostrarFotoAnterior();
        }

        if (evento.key === "ArrowRight") {
            mostrarFotoSiguiente();
        }

    }
);


/* ========================================
   ABRIR LAS FOTOS DE LA GALERÍA
======================================== */

const fotosParaAbrir =
    document.querySelectorAll("#galeriaCompleta .foto img");

fotosParaAbrir.forEach(function(foto, indice) {

    foto.addEventListener("click", function() {

        abrirVisor(indice);

    });

});

/* =========================
   CORAZONES FLOTANTES
========================= */

const corazonesFlotantes = document.querySelector("#corazonesFlotantes");

function crearCorazon() {
    const corazon = document.createElement("div");

    const tiposCorazon = ["❤️", "💕", "💗", "🤍", "💖"];
    const corazonElegido =
        tiposCorazon[Math.floor(Math.random() * tiposCorazon.length)];

    corazon.classList.add("corazon-flotante");
    corazon.textContent = corazonElegido;

    corazon.style.left = Math.random() * 100 + "%";
    corazon.style.fontSize = (14 + Math.random() * 18) + "px";
    corazon.style.animationDuration = (6 + Math.random() * 5) + "s";

    corazonesFlotantes.appendChild(corazon);

    setTimeout(function() {
        corazon.remove();
    }, 11000);
}

setInterval(crearCorazon, 900);

/* ========================================
   SUPABASE
======================================== */

const supabaseUrl =
    "https://cqmokuuvyortjssduciz.supabase.co";

const supabaseKey =
    "sb_publishable_joRh8eIzQfhm1XGH_KzKzg_qCGDae7s";

const supabaseClient =
    window.supabase.createClient(
        supabaseUrl,
        supabaseKey
    );

console.log("Supabase conectado:", supabaseClient);
/* ========================================
   NUESTRA CARTELERA
======================================== */

const peliculas = [

    {
        titulo: "Spider-Man: Brand New Day",
        poster: "fotos/peliculas/Spiderman brand new day.jpg",
        calificacion: "Por completar",
        miNota: 1,
        suNota: 1,
        favorita: false,
    },

    {
        titulo: "Toy Story 5",
        poster: "fotos/peliculas/Toy Story 5.jpeg",
        calificacion: "Por completar",
        miNota: 1,
        suNota: 1,
        favorita: false,

    },

    {
        titulo: "The Flash",
        poster: "fotos/peliculas/the flash.jpg",
        calificacion: "Por completar",
        miNota: 1,
        suNota: 1,
        favorita: false,
    },

    {
        titulo: "Elemental",
        poster: "fotos/peliculas/elemental.jpg",
        calificacion: "Por completar",
        miNota: 1,
        suNota: 1,
        favorita: false,
  
    },

    {
        titulo: "Wonka",
        poster: "fotos/peliculas/Wonka.jpg",
        calificacion: "Por completar",
        miNota: 1,
        suNota: 1,
        favorita: false,

    }

];


const gridPeliculas =
    document.querySelector("#gridPeliculas");

const cantidadPeliculas =
    document.querySelector("#cantidadPeliculas");

const mejorPelicula =
    document.querySelector("#mejorPelicula");


/* =========================
   PROMEDIO
========================= */

function calcularPromedio(pelicula) {

    return (
        pelicula.miNota +
        pelicula.suNota
    ) / 2;

}


/* =========================
   ESTRELLAS
========================= */

function crearEstrellas(nota, pelicula, tipo) {

    let estrellas = "";

    for (let i = 1; i <= 10; i++) {

        const activa =
            i <= nota ? "activa" : "";

        estrellas += `
            <button
                type="button"
                class="estrella ${activa}"
                data-nota="${i}"
                data-tipo="${tipo}"
                data-pelicula="${pelicula.titulo}"
                aria-label="Puntuar ${i} sobre 10"
            >
                ${i <= nota ? "★" : "☆"}
            </button>
        `;
    }

    return estrellas;

}


/* =========================
   MOSTRAR PELÍCULAS
========================= */

function mostrarPeliculas(lista) {

    gridPeliculas.innerHTML = "";

    lista.forEach(function(pelicula, indice) {

        const promedio =
            calcularPromedio(pelicula);

        const tarjeta =
            document.createElement("article");

        tarjeta.classList.add(
            "tarjeta-pelicula"
        );


        let puesto = indice + 1;
        let medalla = "";

        if (puesto === 1) {

            medalla = "🥇";

        } else if (puesto === 2) {

            medalla = "🥈";

        } else if (puesto === 3) {

            medalla = "🥉";

        }


        tarjeta.innerHTML = `

            <img
                class="poster-pelicula"
                src="${pelicula.poster}"
                alt="${pelicula.titulo}"
            >

            <div class="info-pelicula">

                <div class="numero-ranking">
                    ${medalla} #${puesto}
                </div>

                <h3>
                    ${pelicula.titulo}
                </h3>


                <div class="puntuaciones">

                    <div class="puntuacion">

                        <strong>
                            ${pelicula.miNota}/10
                        </strong>

                        <span>
                            Gas
                        </span>

                        <div class="estrellas">

                            ${crearEstrellas(
                                pelicula.miNota,
                                pelicula,
                                "mia"
                            )}

                        </div>

                    </div>


                    <div class="puntuacion">

                        <strong>
                            ${pelicula.suNota}/10
                        </strong>

                        <span>
                            Juli
                        </span>

                        <div class="estrellas">

                            ${crearEstrellas(
                                pelicula.suNota,
                                pelicula,
                                "suya"
                            )}

                        </div>

                    </div>

                </div>


                <div class="promedio-pelicula">

                    ⭐ ${promedio.toFixed(1)}/10

                </div>


            </div>

        `;


        gridPeliculas.appendChild(tarjeta);


        tarjeta.addEventListener(
            "click",
            function(evento) {

                if (
                    evento.target.classList.contains(
                        "estrella"
                    )
                ) {

                    return;

                }

                abrirFichaPelicula(pelicula);

            }
        );

    });


    activarEstrellas();

}


/* =========================
   RANKING
========================= */

function ordenarRanking() {

    return [...peliculas].sort(
        function(a, b) {

            return calcularPromedio(b) -
                   calcularPromedio(a);

        }
    );

}


/* =========================
   ESTADÍSTICAS
========================= */

function actualizarEstadisticas() {

    cantidadPeliculas.textContent =
        peliculas.length;


    if (peliculas.length === 0) {

        mejorPelicula.textContent = "—";

        return;

    }


    const ranking =
        ordenarRanking();


    mejorPelicula.textContent =
        ranking[0].titulo;

}


/* =========================
   GUARDAR DATOS
========================= */

async function guardarDatosPeliculas() {

    for (const pelicula of peliculas) {

        const { error } = await supabaseClient
            .from("peliculas")
            .upsert(
                {
                    titulo: pelicula.titulo,
                    poster: pelicula.poster,
                    mi_nota: pelicula.miNota,
                    su_nota: pelicula.suNota,
                    favorita: pelicula.favorita
                },
                {
                    onConflict: "titulo"
                }
            );

        if (error) {

            console.error(
                "Error guardando película:",
                error
            );

        }

    }

}


/* =========================
   CARGAR DATOS
========================= */

async function cargarDatosPeliculas() {

    const { data, error } = await supabaseClient
        .from("peliculas")
        .select("*")
        .order("creado_en", { ascending: true });

    if (error) {

        console.error(
            "Error cargando películas:",
            error
        );

        return;

    }

    if (!data || data.length === 0) {

        console.log(
            "No hay películas en Supabase todavía."
        );

        return;

    }


    peliculas.length = 0;


    data.forEach(function(pelicula) {

        peliculas.push({

            id: pelicula.id,

            titulo: pelicula.titulo,

            poster: pelicula.poster,

            calificacion: "Por completar",

            miNota: pelicula.mi_nota,

            suNota: pelicula.su_nota,

            favorita: pelicula.favorita

        });

    });


    actualizarEstadisticas();

    mostrarPeliculas(
        ordenarRanking()
    );

}


/* =========================
   FILTROS
========================= */

const botonesFiltro =
    document.querySelectorAll(
        ".filtro-pelicula"
    );


let filtroActual = "ranking";


botonesFiltro.forEach(
    function(boton) {

        boton.addEventListener(
            "click",
            function() {

                botonesFiltro.forEach(
                    function(b) {

                        b.classList.remove(
                            "activo"
                        );

                    }
                );


                boton.classList.add(
                    "activo"
                );


                const filtro =
                    boton.dataset.filtro;


                filtroActual = filtro;


                if (filtro === "ranking") {

                    mostrarPeliculas(
                        ordenarRanking()
                    );

                }

                else if (
                    filtro === "favoritas"
                ) {

                    mostrarPeliculas(
                        peliculas.filter(
                            function(pelicula) {

                                return pelicula.favorita;

                            }
                        )
                    );

                }

                else {

                    mostrarPeliculas(
                        peliculas
                    );

                }

            }
        );

    }
);


/* =========================
   ACTIVAR ESTRELLAS
========================= */

function activarEstrellas() {

    const estrellas =
        document.querySelectorAll(
            ".estrella"
        );


    estrellas.forEach(
        function(estrella) {

            estrella.addEventListener(
                "click",
                function() {

                    const titulo =
                        estrella.dataset.pelicula;

                    const tipo =
                        estrella.dataset.tipo;

                    const nota =
                        Number(
                            estrella.dataset.nota
                        );


                    const pelicula =
                        peliculas.find(
                            function(p) {

                                return p.titulo ===
                                    titulo;

                            }
                        );


                    if (!pelicula) {

                        return;

                    }


                    if (tipo === "mia") {

                        pelicula.miNota =
                            nota;

                    }


                    if (tipo === "suya") {

                        pelicula.suNota =
                            nota;

                    }


                    guardarDatosPeliculas();

                    actualizarEstadisticas();


                    if (
                        filtroActual === "ranking"
                    ) {

                        mostrarPeliculas(
                            ordenarRanking()
                        );

                    }

                    else if (
                        filtroActual === "favoritas"
                    ) {

                        mostrarPeliculas(
                            peliculas.filter(
                                function(pelicula) {

                                    return pelicula.favorita;

                                }
                            )
                        );

                    }

                    else {

                        mostrarPeliculas(
                            peliculas
                        );

                    }

                }
            );

        }
    );

}


/* =========================
   INICIAR CARTELERA
========================= */

migrarPeliculasIniciales()
    .then(function() {
        console.log("MIGRACIÓN TERMINADA");
    })
    .catch(function(error) {
        console.error("ERROR EN MIGRACIÓN:", error);
    });
async function migrarPeliculasIniciales() {

    const { data, error } = await supabaseClient
        .from("peliculas")
        .select("titulo");

    if (error) {
        console.error("Error consultando Supabase:", error);
        return;
    }

    for (const pelicula of peliculas) {

        const yaExiste = data.some(function(p) {
            return p.titulo === pelicula.titulo;
        });

        if (yaExiste) {
            continue;
        }

        const { error: errorInsertar } = await supabaseClient
            .from("peliculas")
            .insert({
                titulo: pelicula.titulo,
                poster: pelicula.poster,
                mi_nota: pelicula.miNota,
                su_nota: pelicula.suNota,
                favorita: pelicula.favorita
            });

        if (errorInsertar) {
            console.error(
                "Error agregando:",
                pelicula.titulo,
                errorInsertar
            );
        } else {
            console.log(
                "Película agregada:",
                pelicula.titulo
            );
        }
    }
}

const modalPelicula =
    document.querySelector("#modalPelicula");

const cerrarModalPelicula =
    document.querySelector("#cerrarModalPelicula");

const modalPoster =
    document.querySelector("#modalPoster");

const modalTitulo =
    document.querySelector("#modalTitulo");

const modalCalificacion =
    document.querySelector("#modalCalificacion");

const botonFavorita =
    document.querySelector("#botonFavorita");

let peliculaSeleccionada = null;


function abrirFichaPelicula(pelicula) {

    peliculaSeleccionada = pelicula;

    modalPoster.src = pelicula.poster;

    modalPoster.alt = pelicula.titulo;

    modalTitulo.textContent =
        pelicula.titulo;

    modalCalificacion.textContent =
    "🎟️ " + pelicula.calificacion;


    actualizarBotonFavorita();

    modalPelicula.classList.add("abierto");

    document.body.style.overflow = "hidden";
}


function cerrarFichaPelicula() {

    modalPelicula.classList.remove("abierto");

    document.body.style.overflow = "";

    peliculaSeleccionada = null;
}


function actualizarBotonFavorita() {

    if (!peliculaSeleccionada) {
        return;
    }

    if (peliculaSeleccionada.favorita) {

        botonFavorita.textContent =
            "❤️ Es una de nuestras favoritas";

        botonFavorita.classList.add("activa");

    } else {

        botonFavorita.textContent =
            "♡ Marcar como favorita";

        botonFavorita.classList.remove("activa");

    }
}


botonFavorita.addEventListener(
    "click",
    function() {

        if (!peliculaSeleccionada) {
            return;
        }

        peliculaSeleccionada.favorita =
            !peliculaSeleccionada.favorita;

        guardarDatosPeliculas();
        actualizarBotonFavorita();

    }
);


cerrarModalPelicula.addEventListener(
    "click",
    cerrarFichaPelicula
);


modalPelicula.addEventListener(
    "click",
    function(evento) {

        if (evento.target === modalPelicula) {
            cerrarFichaPelicula();
        }

    }
);


document.addEventListener(
    "keydown",
    function(evento) {

        if (
            evento.key === "Escape" &&
            modalPelicula.classList.contains("abierto")
        ) {
            cerrarFichaPelicula();
        }

    }
);
/* ========================================
   ABRIR / CERRAR GALERÍA
======================================== */

const abrirGaleria =
    document.querySelector("#abrirGaleria");

const cerrarGaleria =
    document.querySelector("#cerrarGaleria");

const galeriaCompleta =
    document.querySelector("#galeriaCompleta");


abrirGaleria.addEventListener(
    "click",
    function() {

        galeriaCompleta.classList.add("visible");

        setTimeout(function() {

            galeriaCompleta.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }
);


cerrarGaleria.addEventListener(
    "click",
    function() {

        galeriaCompleta.classList.remove("visible");

        setTimeout(function() {

            document.querySelector("#fotos")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 100);

    }
);

/* ========================================
   MARIPOSAS Y ABEJITA INTERACTIVA
======================================== */

const decoracionesVoladoras =
    document.querySelector("#decoracionesVoladoras");

let mensajeAbejita = null;


function mostrarMensajeAbejita() {

    if (mensajeAbejita) {
        mensajeAbejita.remove();
    }

    mensajeAbejita = document.createElement("div");

    mensajeAbejita.classList.add("mensaje-abejita");

    mensajeAbejita.innerHTML = `
        <div class="abejita-grande">🐝</div>

        <strong>
            ¡Encontraste a la abejita!
        </strong>

        <p>
            Ahora eres una amejita chiquitita ❤️
        </p>

        <button type="button">
            Cerrar
        </button>
    `;

    document.body.appendChild(mensajeAbejita);

    const botonCerrar =
        mensajeAbejita.querySelector("button");

    botonCerrar.addEventListener(
        "click",
        function() {
            mensajeAbejita.remove();
            mensajeAbejita = null;
        }
    );

}


function crearDecoracionVoladora() {

    const decoracion =
        document.createElement("button");

    const esAbejita =
        Math.random() < 0.12;


    if (esAbejita) {

        decoracion.textContent = "🐝";

        decoracion.classList.add(
            "decoracion-voladora",
            "abejita"
        );

        decoracion.setAttribute(
            "aria-label",
            "Encontraste a la abejita"
        );

        decoracion.addEventListener(
            "click",
            function() {

                mostrarMensajeAbejita();

                decoracion.remove();

            }
        );

    } else {

        decoracion.textContent = "🦋";

        decoracion.classList.add(
            "decoracion-voladora",
            "mariposa"
        );

        decoracion.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    decoracion.style.top =
        (15 + Math.random() * 70) + "%";


    decoracion.style.fontSize =
        (18 + Math.random() * 15) + "px";


    decoracion.style.animationDuration =
        (11 + Math.random() * 7) + "s";


    decoracionesVoladoras.appendChild(
        decoracion
    );


    setTimeout(function() {

        decoracion.remove();

    }, 20000);

}


setInterval(
    crearDecoracionVoladora,
    7000
);

/* ========================================
   AGREGAR NUEVAS PELÍCULAS
======================================== */

const botonAgregarPelicula =
    document.querySelector("#botonAgregarPelicula");

const formularioPelicula =
    document.querySelector("#formularioPelicula");

const nombreNuevaPelicula =
    document.querySelector("#nombreNuevaPelicula");

const posterNuevaPelicula =
    document.querySelector("#posterNuevaPelicula");

const guardarNuevaPelicula =
    document.querySelector("#guardarNuevaPelicula");


botonAgregarPelicula.addEventListener(
    "click",
    function() {

        formularioPelicula.classList.toggle("oculto");

    }
);


guardarNuevaPelicula.addEventListener(
    "click",
    function() {

        const titulo =
            nombreNuevaPelicula.value.trim();

        const poster =
            posterNuevaPelicula.value.trim();


        if (!titulo) {

            alert("Poné el nombre de la película ❤️");

            return;

        }


        const peliculaExistente =
            peliculas.some(
                function(pelicula) {

                    return pelicula.titulo.toLowerCase() ===
                        titulo.toLowerCase();

                }
            );


        if (peliculaExistente) {

            alert("Esa película ya está en nuestra cartelera 🎬");

            return;

        }


        const nuevaPelicula = {

            titulo: titulo,

            poster: poster || "fotos/peliculas/default.jpg",

            calificacion: "Por completar",

            miNota: 1,

            suNota: 1,

            favorita: false

        };


        peliculas.push(nuevaPelicula);


        guardarDatosPeliculas();

        actualizarEstadisticas();

        filtroActual = "ranking";

        mostrarPeliculas(
            ordenarRanking()
        );


        nombreNuevaPelicula.value = "";

        posterNuevaPelicula.value = "";

        formularioPelicula.classList.add("oculto");

    }
);