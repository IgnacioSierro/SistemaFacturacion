//TARIFAS PARA CADA TIPO DE LLAMADA.
const TARIFAS = {
    locales: {
        HAB8A20: 0.2,
        HAB20A8: 0.1,
        NOHAB: 0.2,
    },
    nacionales: {
        COLON: 0.5,
        GUALEGUAYCHU: 0.6,
    },
    internacionales:{
        CHILE: 8,
        BRASIL:10,
    },
};

//CLIENTE Y SUS LLAMADAS.
const cliente1 = {
    nroCliente = 1,
    nombre = "Juan Casas",
    telefono = 3442405060,
    llamadas: [
        {
            //llamada local en dia habil entre las 8 y las 20.
            tipo = "Local",
            duracionMin = 15,
            codigo = "HAB8A20",
            dia = "Lunes",
            localidad= "Concepcion del Uruguay",
        },
        {
            //llamada local en dia habil entre las 20 y las 8.
            tipo = "Local",
            duracionMin = 20,
            codigo = "HAB20A8",
            dia = "Martes",
            localidad = "Concepcion Del Uruguay",
        },
        {
            //llamada local en dia no habil.
            tipo = "Local",
            duracionMin = 12,
            codigo = "NOHAB",
            dia = "Sabado",
            localidad = "Concepcion Del Uruguay",
        },
        {
            //llamada nacional.
            tipo = "Nacional",
            duracionMin = 13,
            localidad = "COLON",
        },
        {
            //llamada nacional 2.
            tipo = "Nacional",
            duracionMin = 10,
            localidad = "GUALEGUAYCHU",
        },
        {
            //llamada internacional.
            tipo = "Internacional",
            duracionMin = 5,
            pais = "CHILE",
        },
        {
            //llamada internacional 2.
            tipo= "Internacional",
            duracionMin = 4,
            pais = "BRASIL",
        },
            
    ],
};

//SISTEMA DE FACTURACION.
function calcularTotalLlamadas(cliente) {
    let totalLLamadasLocales = 0;
    let totalLLamadasNacionales = 0;
    let totalLLamadasInternacionales = 0;

    for (let i = 0; i < cliente.llamadas.length; i++) {
        const llamada = cliente.llamadas[i];
        const tipoLlamadas = llamada.tipo;

        if (tipoLlamadas = "Local") {
            totalLLamadasLocales += llamada.duracionMin * TARIFAS.locales[llamada.codigo];
        }
        else if (tipoLlamadas = "Nacional") {
            totalLLamadasNacionales += llamada.duracionMin * TARIFAS.nacionales[llamada.localidad];
        }
        {
            totalLLamadasInternacionales += llamada.duracionMin * TARIFAS.internacionales[llamada.pais];
        }
        
    }
    //ABONO FIJO MENSUAL = 1000$
    const totales = {
        totalLoc = totalLLamadasLocales,
        totalNac = totalLLamadasNacionales,
        totalInt = totalLLamadasInternacionales,
        total = totalLLamadasInternacionales + totalLLamadasNacionales + totalLLamadasLocales + 1000,
        
    }
    return totales;
}

//GENERAR FACTURA
function generarFactura(cliente) {
    const totalLamadas = calcularTotalLlamadas(cliente);

    return{
        cliente: {
            nroCliente: cliente.nroCliente,
            nombre: cliente.nombre,
            telefono: cliente.telefono,
        },
         totales: {
             totalLoc: totalLamadas.totalLoc,
             totalNac: totalLamadas.totalNac,
             totalInt: totalLamadas.totalInt,
             total : totalLamadas.total,
         }
        
    }
}
