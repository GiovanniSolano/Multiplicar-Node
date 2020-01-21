const fs = require('fs');



let listarTabla = (base, limite) => {
    console.log('==============='.green);
    for (let i = 1; i <= limite; i++) {
        console.log('Resultado: ', base * i);
    }
};


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es valido');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `Resultado ${base}x${i}` + ' ' + i * base + '\n';
        }

        //  const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla =${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}