const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log('================================'.green);
        console.log('================================'.red);
        console.log('================================'.yellow);
        for (i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}\n `);
        }
    })

}
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`)
            return
        }
        let data = ' '
        for (i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n `);
        }

        fs.writeFile(`tabla ${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tablas/tabla- ${base}-al-${limite}.txt`.green)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla

}