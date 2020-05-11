const argv = require('./config/yarg').argv;

const { crearArchivo, listarTabla } = require('./multiplicarr/multiplicar')
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e));

    default:
        console.log('Comando no reconocido')

}

//let parametro = argv[2]
//let base = parametro.split('=')[1]
//console.log('base', argv.base)