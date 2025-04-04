var timer;

// POKEMONES 
const movimiento = {
    thunderbolt: {
        nombre: "Thunderbolt",
        potencia: 90,
        precision: 100 / 100,
        pp: 15,
        categoria: "Especial",
        efecto: 100 * 0.10,
        tipo_movimiento: "Electrico"
    },
    thunderWave: {
        nombre: "Thunder Wave",
        potencia: 0,
        precision: 10 / 100,
        pp: 20,
        categoria: "Estatus",
        efecto: 100 * 1,
        tipo_movimiento: "Electrico"
    },
    agility: {
        nombre: "Agility",
        potencia: 0,
        precision: 0,
        pp: 30,
        categoria: "Estatus",
        efecto: 100 * 1,
        tipo_movimiento: "Normal"
    },
    tackle: {
        nombre: "Tackle",
        potencia: 35,
        precision: 95 / 100,//Los pongo de manera que sea la probabilidad entre 0 y 1
        pp: 35,
        categoria: "Fisico",
        efecto: 0,
        tipo_movimiento: "Normal"
    },
    transform: {
        nombre: "Transformar",
        potencia: 0,
        precision: 0,
        pp: 10,
        categoria: "Estado",
        efecto: 0,
        tipo_movimiento: "Normal"
    },
    iceBeam: {
        nombre: "Ice Beam",
        potencia: 95,
        precision: 100 / 100,
        pp: 10,
        categoria: "Especial",
        efecto: 100 * 0.10,
        tipo_movimiento: "Hielo"
    },
    swift: {
        nombre: "Swift",
        potencia: 60,
        precision: 0,
        pp: 20,
        categoria: "Especial",
        efecto: 0,
        tipo_movimiento: "Normal"
    },
    steelWing: {
        nombre: "Steel Wing",
        potencia: 70,
        precision: 90 / 100,
        pp: 25,
        categoria: "Fisico",
        efecto: 100 * 0.10,
        tipo_movimiento: "Acero"
    }
};

class Pokemon {
    constructor(nombre, tipo_primario, tipo_secundario, hp, level, ataque, defensa, velocidad, ataque_especial, defensa_especial, movimientos, efectividad) {
        this.nombre = nombre;
        this.tipo_primario = tipo_primario;
        this.tipo_secundario = tipo_secundario;
        this.hp = hp;
        this.level = level;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.ataque_especial = ataque_especial;
        this.defensa_especial = defensa_especial;
        this.movimientos = movimientos;
        this.efectividad = efectividad
    }
}
// Creamos la mochila
let bag = {
    pokeball: 1
};
// Creamos los pokemones
let pikachu = new Pokemon("Pikachu", 'Electrico', null, 142, 50, 100, 83, 138, 94, 94, [movimiento.thunderbolt, movimiento.thunderWave, movimiento.agility, movimiento.tackle], new Map([
    ['Hielo', 1],
    ['Volador', 2]
]));
let ditto = new Pokemon("Ditto", 'Normal', null, 155, 50, 61, 110, 110, 61, 110, [movimiento.transform], new Map([
    ['Hielo', 1],
    ['Volador', 1]
]));
let articuno = new Pokemon("Articuno", 'Hielo', 'Volador', 181, 50, 121, 136, 121, 131, 161, [movimiento.iceBeam, movimiento.agility, movimiento.swift, movimiento.steelWing], new Map([
    ['Electrico', 1],
    ['Normal', 1],
    ['Hielo', 0.5],
    ['Volador', 2],
]));
// Copia de articuno
let copiaArticuno = { ...articuno };

// ARRAY DE POKEMONES
let pokemones = [pikachu, ditto, articuno];

// AÑADIR SPLITERS DE LOS POKEMONS MEDIANTE PETICIONES
// Esta funcion asincrona hace una peticion a la pokeapi y devuelve los sprites pedidos por parametro
// El primer parametro tiene como valor el nombre del pokemon, y el segundo parametro
// es para saber si quiere de espaldas la imagen del pokemon que en si sera por defecto, si es false dara una imagen del pokemon frontal
async function pokemon(pokemon, boleano, etiqueta_padre, enemigo) {
    let resultados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (resultados.status === 200) {
        let caracteristicas_pokemon = await resultados.json();
        let imagen_gif_frontal = caracteristicas_pokemon.sprites.other.showdown.back_female;
        if (imagen_gif_frontal === null) {
            imagen_gif_frontal = caracteristicas_pokemon.sprites.other.showdown.back_default;
        }
        let imagen_gif_espalda = caracteristicas_pokemon.sprites.other.showdown.front_default;
        let etiqueta_imagen = document.createElement('img');
        let valor = ' ';
        boleano ? valor = imagen_gif_frontal : valor = imagen_gif_espalda;
        etiqueta_imagen.setAttribute('src', valor);
        let id = ' ';
        enemigo ? id = 'enemy' : id = 'mypokemon';
        etiqueta_imagen.setAttribute('id', id);
        etiqueta_padre.appendChild(etiqueta_imagen);
    }
}

// Funcion para cambiar la imagen de ditto
async function pokemon_articuno(etiqueta_imagen, enemigo) {
    let resultados = await fetch(`https://pokeapi.co/api/v2/pokemon/articuno`);
    if (resultados.status === 200) {
        let caracteristicas_pokemon = await resultados.json();
        let imagen_gif_espalda = caracteristicas_pokemon.sprites.other.showdown.front_default;
        etiqueta_imagen.setAttribute('src', imagen_gif_espalda);
        let id = ' ';
        enemigo ? id = 'enemy' : id = 'mypokemon';
        etiqueta_imagen.setAttribute('id', id);
    }
}

// Funcion para la imagen a elegir
async function pokemonElegir(pokemon, etiqueta_padre, personalizacion) {
    let resultados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (resultados.status === 200) {
        let caracteristicas_pokemon = await resultados.json();
        let imagen = caracteristicas_pokemon.sprites.front_default;
        let etiqueta_imagen = document.createElement('img');
        etiqueta_imagen.setAttribute('src', imagen);
        etiqueta_imagen.setAttribute('id', personalizacion);
        etiqueta_imagen.setAttribute('class', 'img-fluid');
        etiqueta_padre.appendChild(etiqueta_imagen);
    }
}


// IMAGEN DE PIKACHU CON SPLITER
let myzone = document.getElementById('myzone');
pokemon('pikachu', true, myzone, false);
// IMAGEN DE ARTICUNO CON SPLITER
let oponent = document.getElementById('opponent');
pokemon('articuno', false, oponent, true);
// IMAGEN PARA DITTO EN POKEMON A ELEGIR
let elegir = document.getElementsByClassName('myzone-elegir')[0];
pokemonElegir('ditto', elegir, 'ditto-elegir');
let elegir2 = document.getElementsByClassName('myzone-elegir')[1];
pokemonElegir('pikachu', elegir2, 'pikachu-elegir');
//Relleno el nombre de los ataques de pikachu, esto lo hare con JQuery
pikachu.movimientos.forEach((movimiento, index) => {
    const attackBox = document.getElementById(`ataque${index + 1}`);
    if (attackBox) {
        attackBox.querySelector('.actionText').textContent = movimiento.nombre;
    }
});


// FUNCION PARA LA ANIMACION DE LA PLATAFORMA
function platform() {
    /* Animaciones estáticas de los personajes:
       -Mientras el usuario esté eligiendo que hacer, ambas plataformas se desplazarán verticalmente
       una pequeña distancia antes de volver a bajar. */
    $("#platform2").animate({ top: "-=10px" }, 600).animate({ top: "+=10px" }, 600);
    $('#platform1').animate({ top: "-=10px" }, 600).animate({ top: "+=10px" }, 600);
    timer = setTimeout(platform, 1200);
}

//Creo esta funcion ya que la usare mas adelante, la cual buscara al objeto con nombre del pokemon
function buscarPokemon(nombre, pokemones) {
    let pokemonEncontrado = null;
    pokemones.forEach(pokemon => {
        if (pokemon.nombre.toUpperCase() === nombre.toUpperCase()) {
            pokemonEncontrado = pokemon;
        }
    });
    return pokemonEncontrado;
}

// Esta es un poco mas de lo mismo solo que buscando el movimiento
function buscarMovimiento(nombre, movimientos) {
    // En pokemon decidi hacerlo con el bucle for each como de costumbre, luego conoci la funcion find
    return movimientos.find(movimiento => movimiento.nombre.toUpperCase() === nombre.toUpperCase());
}

function dañoMovimiento(nombre_pokemon, pokemon_contrario, nombre_ataque) {

    let pokemon_referencia = buscarPokemon(nombre_pokemon, pokemones);
    let pokemon_referencia_enemigo = buscarPokemon(pokemon_contrario, pokemones);

    // ACCEDO A LOS MOVIMIENTOS DEL POKEMON
    let movimientos_buscar = pokemon_referencia.movimientos;

    // La funcion find busca algun objeto con ciertos parametros especificados
    let movimiento_ataque = buscarMovimiento(nombre_ataque, movimientos_buscar);

    // Reduzco los puntos maximos
    movimiento_ataque.pp -= 1;

    // NIVEL
    let level = pokemon_referencia.level;
    // POTENCIA
    let potencia = movimiento_ataque.potencia;
    // ATAQUE/ATAQUE EPECIAL
    let ataque;
    if (movimiento_ataque.categoria === 'Especial') {
        ataque = pokemon_referencia.ataque_especial;
    } else {
        ataque = pokemon_referencia.ataque;
    }
    // DEFENSA / DEFENSA ESPECIAL
    // Esta sera del pokemon contrario, no esta especificado, pero lo busque por internet
    let defensa;
    if (movimiento_ataque.categoria === 'Especial') {
        defensa = pokemon_referencia_enemigo.defensa_especial;
    } else {
        defensa = pokemon_referencia_enemigo.defensa;
    }

    // SAME TYPE ATTACK BONUS
    let stab;
    if (pokemon_referencia.tipo_primario || pokemon_referencia.tipo_secundario === movimiento_ataque.tipo_movimiento) {
        stab = 1.5;
    } else {
        stab = 1;
    }
    // TIPO 1 : Se puede abreviar en una operacion ternaria, pero lo dejare asi
    let tipo1;
    let efectividades = pokemon_referencia.efectividad;
    let primario_enemigo = pokemon_referencia_enemigo.tipo_primario;
    tipo1 = efectividades.get(primario_enemigo);
    // TIPO 2
    let tipo2;
    let secundario_enemigo = pokemon_referencia_enemigo.tipo_secundario;
    if (secundario_enemigo === null) {
        tipo2 = 1;
    } else {
        tipo2 = efectividades.get(secundario_enemigo);
    }

    // Numero random
    let valor_random = Math.round(Math.random() * (255 - 217) + 217) / 255;
    // Usare Marh.floor para poder dar un numero redondeado, es decir sin decimales
    /*
        Dividir por 50 es parte de la fórmula base del juego para normalizar el daño en un rango manejable. Esta división se hace antes de añadir otros factores como STAB y los modificadores de tipo para asegurar que el daño resultante esté en un rango esperado.
        Hay que tener en cuenta la presicion del ataque al final del resultado, que es una probabilidad en si
    */
    let con_presicion;
    movimiento_ataque.precision === 0 ? con_presicion = 1 : con_presicion = movimiento_ataque.precision;
    let daño_ataque_con_presiscion = Math.floor(
        ((2 * level / 5 + 2) * potencia * (ataque / defensa) / 50 + 2) * stab * tipo1 * tipo2 * valor_random) * con_presicion;
    // Solo para ver el valor de las variables que defini
    console.log(level + " Nivel " + potencia + " Potencia " + ataque + " Ataque " + defensa + " Defensa " + stab + " STAB" + " Tipo 1 " + tipo1 + " Tipo 2 " + tipo2 + " Valor random " + valor_random.toFixed(2) + " Presicion " + movimiento_ataque.precision);
    return (daño_ataque_con_presiscion);
}
/* ----------------------------------------------------------------------------------------------------- */
//Logica para cambiar el hp de articuno(oponente)
function golpear(nombre_pokemon, pokemon_contrario, nombre_ataque) {
    let daño = dañoMovimiento(nombre_pokemon, pokemon_contrario, nombre_ataque);
    // Actualizar los puntos de vida del Pokemon enemigo
    actualizarPuntosVidaEnemigo(daño);
}

// Una funcion para desaparecer con una animacion a Articuno en caso de que su hp llegue a 0
function desaparecerArticuno() {
    let articunoImg = document.getElementById('enemy');
    articunoImg.style.transition = 'opacity 2s';
    articunoImg.style.opacity = '0';
    setTimeout(function () {
        articunoImg.remove();
        // articuno = null;
    }, 4000);
}

// Una funcion para desaparecer con una animacion a ArticunoCopia en caso de que su hp llegue a 0
function desaparecerArticunoCopia() {
    let articunoCopiaImg = document.getElementById('mypokemon');
    articunoCopiaImg.style.transition = 'opacity 2s';
    articunoCopiaImg.style.opacity = '0';
    setTimeout(function () {
        articunoCopiaImg.remove();
    }, 4000);
}

//Funcion para desaparecer mypokemon
function desaparecerPikachu() {
    let pikachuImg = document.getElementById('mypokemon');
    pikachuImg.style.transition = 'opacity 2s';
    pikachuImg.style.opacity = '0';
    setTimeout(function () {
        pikachuImg.remove();
        // pikachu = null
    }, 3000);
}

//Funcion para hacer aparecer a ditto
async function invocarPokemon(pokemonName, boleano, etiqueta_padre, enemigo) {
    await pokemon(pokemonName, boleano, etiqueta_padre, enemigo);
    let pokemonElement = etiqueta_padre.lastChild;
    pokemonElement.classList.add('slideInAnimation');
}

// Función para actualizar los puntos de vida del Pokemon enemigo
function actualizarPuntosVidaEnemigo(daño) {
    articuno.hp -= daño;
    let vidaEnemigo = document.getElementById('vida-enemigo');
    let puntosVidaEnemigo = document.getElementById('puntos-vida-enemigo');
    let puntosVida = parseInt(puntosVidaEnemigo.innerText);
    puntosVida -= daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
        desaparecerArticuno();
    }
    puntosVidaEnemigo.innerText = puntosVida;
    let porcentajeVida = (puntosVida / puntosVidaEnemigo.dataset.vidaTotal) * 100;
    vidaEnemigo.style.width = porcentajeVida + '%';
}

// Funcion para actulizar vida de mypokemon cuando ataque articuno
function actualizarPuntosVidaPikachu(daño) {
    let vidaPikachu = document.getElementById('vida-pikachu');
    let puntosVidaPikachu = document.getElementById('puntos-vida-pikachu');
    let puntosVida = parseInt(puntosVidaPikachu.innerText);
    puntosVida -= daño;
    pikachu.hp -= daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
        pikachu.hp = 0;
        desaparecerPikachu();
        if(pikachu.hp === 0 && copiaArticuno.hp === 0){
            perdiste();
        } else {
            if (puntosVida === 0) {
                if (transformar_ejecutada === true) {
                    cambiarPokemonArticuno();
                } else {
    
                    cambiarPokemon();
                }
            }
        }

    }
    puntosVidaPikachu.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaPikachu.dataset.vidaTotal)) * 100;
    vidaPikachu.style.width = porcentajeVida + '%';
}

// Funcion para actualizar los puntos de vida de la copia articuno
function actualizarPuntosVidaArticunoCopia(daño) {
    let vidaArticuno = document.getElementById('vida-articuno-copia');
    let puntosVidaArticuno = document.getElementById('puntos-vida-articuno-copia');
    let puntosVida = parseInt(puntosVidaArticuno.innerText);
    puntosVida -= daño;
    copiaArticuno.hp -= daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
        copiaArticuno.hp = 0;
        desaparecerArticunoCopia();
        if(pikachu.hp === 0 && copiaArticuno.hp === 0){
            perdiste();
        } else {
            if (puntosVida === 0) {
                cambiarPokemonPikachu();
            }
        }
    }
    puntosVidaArticuno.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaArticuno.dataset.vidaTotal)) * 100;
    vidaArticuno.style.width = porcentajeVida + '%';
}

// Funcion para actualizar los puntos de vida de Ditto
// En esta funcion practicamente, estoy haciendo lo mismo que los demas solo que al afectar a ditto, afectara a la vida de articuno copia tambien.
function actualizarPuntosVidaDitto(daño) {
    let vidaArticuno = document.getElementById('vida-ditto');
    let puntosVidaArticuno = document.getElementById('puntos-vida-ditto');
    let puntosVida = parseInt(puntosVidaArticuno.innerText);
    puntosVida -= daño;
    actualizarPuntosVidaArticunoCopia(daño);
    if (puntosVida <= 0) {
        puntosVida = 0;
        copiaArticuno.hp = 0;
        if(pikachu.hp === 0 && copiaArticuno.hp === 0){
            perdiste();
        } else {
            if (puntosVida === 0) {
                if(contrincacnteArticuno().toUpperCase() !== 'PIKACHU'){
                    cambiarPokemonPikachu();
                }
            }
        }
    }
    puntosVidaArticuno.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaArticuno.dataset.vidaTotal)) * 100;
    vidaArticuno.style.width = porcentajeVida + '%';
}

// Funcion nombre del contrincante para articuno
function contrincacnteArticuno() {
    let cuadrosPokemon = document.querySelectorAll('.cuadro-vida-mypokemon');
    let nombrePokemon;
    cuadrosPokemon.forEach(cuadro => {
        if (cuadro.style.display === 'block') {
            nombrePokemon = cuadro.querySelector('.cuadro-vida-texto > h1').textContent;
        }
    });
    return nombrePokemon;
}

// Funcion de ataque para Articuno
var ataqueArticunoTexto;
function ataqueArticuno() {
    // Obtener un movimiento aleatorio de los movimientos de Articuno
    let movimientos = articuno.movimientos;
    let movimientosKeys = Object.keys(movimientos);
    let randomIndex = Math.floor(Math.random() * movimientosKeys.length);
    let movimientoSeleccionado = movimientos[movimientosKeys[randomIndex]];
    let nombreContrincacnte = contrincacnteArticuno();
    console.log(nombreContrincacnte);
    ataqueArticunoTexto = movimientoSeleccionado.nombre;
    console.log(pikachu.hp + " " + copiaArticuno.hp + " " + articuno.hp);
    // Obtener el daño del movimiento seleccionado, con el pokemon que tenga su espacio en block
    let daño = dañoMovimiento('Articuno', nombreContrincacnte, movimientoSeleccionado.nombre);
    // Animación de ataque de Articuno
    $('#enemy').animate({ left: "-=200px" }, 200)
        .animate({ left: "+=200px" }, 200);
    $('#mypokemon').addClass('wiggle');
    setTimeout(function () {
        $('#mypokemon').removeClass('wiggle');
    }, 1000);
    if (nombreContrincacnte.toUpperCase() === 'PIKACHU') {
        actualizarPuntosVidaPikachu(daño);
        actualizarPuntosVidaPikachuElegir(daño);
    } else if(nombreContrincacnte.toUpperCase() === 'ARTICUNO') {
        actualizarPuntosVidaArticunoCopia(daño);
        actualizarPuntosVidaArticunoCopiaElegir(daño);
    } else {
        actualizarPuntosVidaDitto(daño);
        actualizarPuntosVidaArticunoCopiaElegir(daño);
    }

}

// Funcion para llenar los ataques de ditto
function llenarAtaquesDitto(movimientosDitto) {
    // Actualizar el primer elemento HTML con el nombre del primer movimiento de Ditto
    let nombreAtaqueElement = document.getElementById('ataque1').querySelector('.actionText');
    nombreAtaqueElement.textContent = movimientosDitto[0].nombre;

    // Los demas ataques estaran vacios
    for (let i = 1; i <= 3; i++) {
        let nombreAtaqueElement = document.getElementById('ataque' + (i + 1)).querySelector('.actionText');
        nombreAtaqueElement.textContent = "";
    }
}


// Funcion para llenar los ataques de articuno
function llenarAtauqesArticuno() {
    copiaArticuno.movimientos.forEach((movimiento, index) => {
        const attackBox = document.getElementById(`ataque${index + 1}`);
        if (attackBox) {
            attackBox.querySelector('.actionText').textContent = movimiento.nombre;
        }
    });
}


//Funcion para poder añadir a ditto en caso de que pikachu llegue a 0 o lo elija, este sera para ditto
function cambiarPokemon() {
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[1].style.display = "block";
    cuadrosVida[0].style.display = "none";
    // Eliminar la imagen de Pikachu
    let pikachuImg = document.getElementById('mypokemon');
    pikachuImg.remove();
    // Invocar la función para mostrar a Ditto
    invocarPokemon('ditto', true, myzone, false);
    llenarAtaquesDitto(ditto.movimientos);
}

//Funcion para poder añadir a pikachu en caso de que pikachu llegue a 0 o lo elija, este sera para ditto
function cambiarPokemonPikachu() {
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[0].style.display = "block";
    cuadrosVida[1].style.display = "none";
    cuadrosVida[2].style.display = "none";
    let dittoImg = document.getElementById('mypokemon');
    dittoImg.remove();
    invocarPokemon('pikachu', true, myzone, false);
    pikachu.movimientos.forEach((movimiento, index) => {
        const attackBox2 = document.getElementById(`ataque${index + 1}`);
        if (attackBox2) {
            attackBox2.querySelector('.actionText').textContent = movimiento.nombre;
        }
    });
}

// Funcion para añadir a Articuno copia a la batalla
function cambiarPokemonArticuno() {
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[0].style.display = "none";
    cuadrosVida[1].style.display = "none";
    cuadrosVida[2].style.display = "block";
    let pikachu_img2 = document.getElementById('mypokemon');
    pikachu_img2.remove();
    invocarPokemon('articuno', true, myzone, false);
    llenarAtauqesArticuno();
}

// Variable para saber si ya se ejecuto la funcion transformar()
let transformar_ejecutada = false;
// Funcion para el efecto transformacion
function transformar_efecto() {
    transformar_ejecutada = true;
    let cuadrosVida = document.querySelectorAll('.cuadro-vida-mypokemon');
    cuadrosVida[1].style.display = "none";
    cuadrosVida[0].style.display = "none";
    cuadrosVida[2].style.display = "block";
    copiaArticuno.hp = ditto.hp;
    copiaArticuno.movimientos.forEach(movimiento => {
        movimiento.pp = 5;
    });
    // Actualizar la imagen de Ditto
    let imagenDitto = document.getElementById('mypokemon');
    imagenDitto.remove();

    invocarPokemon('articuno', true, myzone, false);
    // Llena los atauqes con ataques de articuno copia
    llenarAtauqesArticuno();
}

// PARA EL CUADRO DE VIDA AL MOMENTO DE ELEGIR
function actualizarPuntosVidaPikachuElegir(daño) {
    let vidaPikachu = document.getElementById('vida-pikachu-elegir');
    let puntosVidaPikachu = document.getElementById('puntos-vida-pikachu-elegir');
    let puntosVida = parseInt(puntosVidaPikachu.innerText);
    puntosVida -= daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
    }
    puntosVidaPikachu.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaPikachu.dataset.vidaTotal)) * 100;
    vidaPikachu.style.width = porcentajeVida + '%';
}

// Funcion para actualizar los puntos de vida de la copia articuno (Esta funcion costo mucho hacerla)
function actualizarPuntosVidaArticunoCopiaElegir(daño) {
    let vidaArticuno = document.getElementById('vida-articuno-copia-elegir');
    let puntosVidaArticuno = document.getElementById('puntos-vida-articuno-copia-elegir');
    let puntosVida = parseInt(puntosVidaArticuno.innerText);
    puntosVida -= daño;
    if (puntosVida <= 0) {
        puntosVida = 0;
    }
    puntosVidaArticuno.innerText = puntosVida;
    let porcentajeVida = (puntosVida / parseInt(puntosVidaArticuno.dataset.vidaTotal)) * 100;
    vidaArticuno.style.width = porcentajeVida + '%';
}

// FUNCION INTENTAR CAPTURAR
function intentarCapturar() {
    bag.pokeball -= 1;
    let hpActual = articuno.hp;
    let hpMax = 181;
    let f = (hpActual / hpMax) * (255 / 3);
    let m = Math.floor(Math.random() * 256);
    return m > f ? true : false;
}

// FUNCION ESCAPAR
function intentarHuir() {
    let probabilidad = Math.floor(Math.random() * 100);
    // Mejor ponerlo en una condicional ternaria
    return probabilidad <= 20 ? true : false;
}


// FUNCION PARA MOSTRAR EL MENSAJE POR EL MAINBOX
function ataqueRealizado(nombrePokemon, nombrAtaque, texto) {
    $('#mainBox').show();
    $("#mainBox").text(`${nombrePokemon} ${texto} ${nombrAtaque}`);
    $(".elegir-pokemon").hide();
    $('.bag').hide();
    $("#attacks").css("display", "none");
}

// FUNCION EN CASO DE QUE GANASTE, MOSTRARA UN MENSAJE DE "PERDISTE"
function ganaste() {
    var pantallaNegra = $("<div></div>").css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background-color": "black",
        "z-index": "9999",
        "display": "none"
    }).appendTo("body");
    var ganaste_texto = $("<div>¡You win!</div>").css({
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
        "color": "white",
        "font-size": "3em",
        "font-weight": "bold",
        "text-align": "center",
        "z-index": "10000",
        "display": "none"
    }).appendTo("body");
    pantallaNegra.fadeIn(1000);
    ganaste_texto.delay(1000).fadeIn(1000);
}

// FUNCION EN CASO DE QUE PIERDA, MOSTRARA UN MENSAJE DE "PERDISTE"
function perdiste() {
    var pantallaNegra = $("<div></div>").css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background-color": "black",
        "z-index": "9999",
        "display": "none"
    }).appendTo("body");
    var perdiste_texto = $("<div>You louse :'(</div>").css({
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
        "color": "white",
        "font-size": "3em",
        "font-weight": "bold",
        "text-align": "center",
        "z-index": "10000",
        "display": "none"
    }).appendTo("body");
    pantallaNegra.fadeIn(1000);
    perdiste_texto.delay(1000).fadeIn(1000);
}

// CODIGO JQUERY
$(document).ready(function (event) {
    /* En un principio la plataforma de lucha estara oculta */
    $('#fight').hide();
    $('#ui').hide();
    /* Evento en el play para iniciar la partida */
    $('#contenedor-play').on('click', function () {
        $('#fondo-pokemon').hide();
        $(this).hide();
        $('#fight').show();
        platform();
        $('#opponent').animate({ right: "-=1100px" }, 600);
        $('#myzone').animate({ left: "-=1100px" }, 600);
        setTimeout(() => {
            $('#ui').show('slow');
        }, 1000);
    });

    // Animacion de los cuadros de acciones, es decir los selectores para cada opcion de seleccion
    $(".actionBox").on("mouseenter", function () {
        $(".selector").hide();
        id = $(".actionBox").index(this);
        $("#selector" + (id + 1)).show();
    });
    // Esto ocultara todos los triaungulos de primeras, y depende donde entre o este el mouse mostrara el triangulo
    // Si no se oculta de primeras los triangulos, se mostrara todos los triangulos por donde pase el mouse
    $(".attackBox").on("mouseenter", function () {
        $(".triangle").hide();
        id = $(".attackBox").index(this);
        $("#triangle" + (id + 1)).show();
    });

    //-------------------------------------------------------------- FIGHT -----------------------------------------------------------------
    // Cuando de click en el selector1 es decir de lucha, ocultara el cuadro de texto."Que accion tomara el jugador, en este caso yo"
    // ya que el "ordenador lo hara por defecto"
    $("#selector1").on("click", function () {
        $("#mainBox").hide();
        $("#attacks").css("display", "flex");
        $(".triangle").hide();
        $("#triangle1").show();
        $(".elegir-pokemon").hide();
        $('.bag').hide();
    });



    $('.attackBox').on("click", function (event) {
        $('#mypokemon').animate({ top: "-=200px", left: "+=500px" }, 300)
            .animate({ top: "+=200px", left: "-=500px" }, 300, function () {
                if (articuno.hp > 0) {
                    ataqueArticuno();
                    $('#actions').hide();
                    setTimeout(()=>{
                    $('#actions').show();
                    }, 1000);
                    setTimeout(ataqueRealizado('Articuno', `${ataqueArticunoTexto}. Your turn:`, ' performed the attack: '), 1500);
                } else {
                    ganaste();
                }
            });
        let pokemon_enemigo = $('#enemy');
        pokemon_enemigo.addClass('wiggle');
        setTimeout(function () {
            pokemon_enemigo.removeClass('wiggle');
        }, 500);
        // Esto es el mismo que if(event.target.matches('#ataque1'))
        if ($(this).attr('id') === 'ataque1') {
            // Obtengo el texto del ataque realizado
            var ataque = $(this).find('.actionText').text();
            if (buscarMovimiento(ataque, ditto.movimientos)) {
                transformar_efecto();
                golpear('ditto', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else if (buscarMovimiento(ataque, copiaArticuno.movimientos)) {
                golpear('articuno', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else {
                golpear('pikachu', 'articuno', ataque);
                ataqueRealizado('Pikachu', ataque, ' performed the attack: ');
            }
        }
        if ($(this).attr('id') === 'ataque2') {
            var ataque = $(this).find('.actionText').text();
            if (buscarMovimiento(ataque, copiaArticuno.movimientos)) {
                golpear('articuno', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else {
                golpear('pikachu', 'articuno', ataque);
                ataqueRealizado('Pikachu', ataque, ' performed the attack: ');
            }
        }
        if ($(this).attr('id') === 'ataque3') {
            var ataque = $(this).find('.actionText').text();
            if (buscarMovimiento(ataque, copiaArticuno.movimientos)) {
                golpear('articuno', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else {
                golpear('pikachu', 'articuno', ataque);
                ataqueRealizado('Pikachu', ataque, ' performed the attack: ');
            }
        }
        if ($(this).attr('id') === 'ataque4') {
            var ataque = $(this).find('.actionText').text();
            if (buscarMovimiento(ataque, copiaArticuno.movimientos)) {
                golpear('articuno', 'articuno', ataque);
                ataqueRealizado('Ditto', ataque, ' performed the attack: ');
            } else {
                golpear('pikachu', 'articuno', ataque);
                ataqueRealizado('Pikachu', ataque, ' performed the attack: ');
            }
        }
    });

    //-------------------------------------------------------------- POKEMON -----------------------------------------------------------------
    // Cuando de click en la accion Pokemon
    $("#selector3").on("click", function () {
        if (pikachu.hp === 0 || copiaArticuno.hp === 0) {
            $("#mainBox").show();
            $("#mainBox").text('You no longer have any Pokémon left alive, choose another option:');
            $(".elegir-pokemon").hide();
            $("#attacks").css("display", "none");
            $('.bag').hide();
        } else {
            $("#mainBox").hide();
            $(".elegir-pokemon").show();
            $("#attacks").css("display", "none");
            $('.bag').hide();
        }
    });
    var contenedorDitto = $('.container.elegir-pokemon .row:first-child .col-md-6:first-child .row:first-child .col-md-12:nth-child(1)');
    var contenedorPikachu = $('.container.elegir-pokemon .row:first-child .col-md-6:first-child .row:first-child .col-md-12:nth-child(2)');
    contenedorDitto.on('click', function () {
        if (contrincacnteArticuno().toUpperCase() === "PIKACHU" && transformar_ejecutada === false) {
            cambiarPokemon();
            ataqueRealizado('Pikachu', ' Ditto ', ' changed to');
        } else if (contrincacnteArticuno().toUpperCase() === "PIKACHU" && transformar_ejecutada === true) {
            cambiarPokemonArticuno();
            ataqueRealizado('Pikachu', ' Ditto ', ' changed to');

        }
    });
    contenedorPikachu.on('click', function () {
        if (contrincacnteArticuno().toUpperCase() === "ARTICUNO" || contrincacnteArticuno().toUpperCase() === "DITTO") {
            cambiarPokemonPikachu();
            ataqueRealizado('Ditto', ' Pikachu ', ' changed to');
        }
    });

    // --------------------------------------------- MOCHILA ------------------------------------------------------------------
    let clickSelector2 = 0;
    $("#selector2").on("click", function () {
        if (bag.pokeball === 0) {
            $("#mainBox").show();
            $("#mainBox").text('¡The bag is empty!');
            $(".elegir-pokemon").hide();
            $("#attacks").css("display", "none");
            $('.bag').hide();
        } else {
            clickSelector2 += 1;
            $("#mainBox").hide();
            $(".elegir-pokemon").hide();
            $("#attacks").css("display", "none");
            $('.bag').show();
            if (clickSelector2 === 1) {
                setTimeout(() => {
                    alert('Podras capturar al pokemon dando click en la palabra "CAPTURE"');
                }, 500);
            }
        }
    });

    $('.bag h3').on('click', function () {
        if (intentarCapturar() === true) {
            ataqueRealizado('Has', ' Articuno. ', ' capturado a ');
            setTimeout(ganaste(), 8000);
        } else {
            ataqueRealizado('Has fallado', ' otra opcion: ', ' eligue ');
        }
    });

    // ----------------------------------------- ESCAPAR -----------------------------------------------------------------------
    $('#selector4').on('click', function () {
        $("#mainBox").hide();
        $(".elegir-pokemon").hide();
        $("#attacks").css("display", "none");
        $('.bag').hide();
        if (intentarHuir() === true) {
            ataqueRealizado('You ', ' escape..... ', " could ");
            setTimeout(ganaste(), 5000);
        } else {
            ataqueRealizado('You ', ' escape. Lose your turn.', " couldn't ");
            $('#actions').hide();
            setTimeout(() => {
                if (articuno.hp > 0) {
                    ataqueArticuno();
                    $('#actions').hide();
                    setTimeout(()=>{
                    $('#actions').show();
                    }, 1000);
                    setTimeout(ataqueRealizado('Articuno', `${ataqueArticunoTexto}. Your turn:`, ' performed the attack: '), 1500);
                }
            }, 2000);
        }
    });
});