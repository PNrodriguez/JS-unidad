// array para nombres 
let nombresPkm = ["Charmander", "Pikachu", "Bulbasaur", "Squirtle"];

// matriz para sus habilidades
let habilidades = [
    [80, 75, 90], //Charmander
    [65, 55, 95], //Pikachu
    [80, 70, 65], // Bulbasaur
    [85, 90, 70], //Squirtle
];

function calcularPromHab(habilidades) {
    let promedios = [];

    for (let i = 0; i < habilidades.length; i++) {
        let fila = habilidades[i];
        let suma = fila.reduce((total, habilidad) => total + habilidad, 0);
        promedios[i] = suma / fila.length;


    }

    return promedios;
}

function evaluarAptitud(nombresPkm, promedios) {
    for (let i = 0; i < promedios.length; i++) {
        if (promedios[i] >= 70) {
            console.log("El pokemon " + nombresPkm[i] + "Supera el promedio con: " + promedios[i]);
        } else {
            console.log("El pokemon " + nombresPkm[i] + "No supera el promedio" + promedios[i]);
        }
    }
}

let promedios2 = calcularPromHab(habilidades);
evaluarAptitud(nombresPkm,promedios); 