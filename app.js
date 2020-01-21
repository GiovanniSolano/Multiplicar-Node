//  const fs = require('fs'); //Ya existe solo definir
//  const fs = require('express'); //Se instala y luego definir
//  const fs = require('./fs'); //Propios

const argv = require('./config/yargs').argv;

const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(colors.red(`Archivo creado: ${archivo}`));
        }).catch(er => console.log(er));

        break;


    default:

        console.log('Comando no reconocido');
        break;
}

// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.limite);
// console.log(argv2);


// crearArchivo(base).then(archivo => {
//     console.log(`Archivo creado: ${archivo}`);
// }).catch(er => console.log(er));