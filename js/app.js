// Arreglos 
let ingresos = [
    new Ingreso('Salario', 20000), 
    new Ingreso('Venta auto', 50000),
    new Ingreso('Venta juguetes', 400)
];

let egresos = [
    new Egreso('Renta', 4000), 
    new Egreso('Ropa', 800)
];

// Funcion cargarCabecero

const cargarCabecero = () => {
    const porcentajeEgreso = totalEgresos() / totalIngresos();

    formatoPorcentaje(porcentajeEgreso);

    let presupuesto = totalIngresos() - totalEgresos();
    presupuesto =  formatoMoneda(presupuesto);

    let totallIng = totalIngresos() ;
    totallIng = formatoMoneda(totallIng);
    
    let totallEge = totalEgresos() ;
    totallEge = formatoMoneda(totallEge);

    // DOM
    document.getElementById('presupuesto').innerHTML = presupuesto;
    document.getElementById('porcentaje').innerHTML = porcentaje;
    document.getElementById('ingresos').innerHTML = totallIng;
    document.getElementById('egresos').innerHTML = totallEge;
};

// Funcion totalIngresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of ingresos) {
        totalIngreso += ingreso._valor;
    }
    return totalIngreso;
};

// Funcion totalEgresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of egresos) {
        totalEgreso += egreso._valor;
    }
    return totalEgreso;
};

// formato moneda
const formatoMoneda = (formatoM) =>{
    return formatoM.toLocaleString("es-MX", {style: "currency", currency: "MXN", maximumFractionDigits: 2});   
}
// formato porcentaje
const formatoPorcentaje = (porcentajeEgreso) => {
    porcentaje = porcentajeEgreso.toLocaleString("es-MX", {style: "percent", maximumFractionDigits: 2});
}

// Funcion cargarApp
function cargarApp(){
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const crearIngresoHTML = (ingreso) => {
    const ingresoHTML = `<div id="lista-ingresos">
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn"><ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso._id})"></ion-icon></button>
            </div>
        </div>
    </div>`

    return ingresoHTML;
}



const cargarIngresos = () => {
    let ingresosHTML = "";

    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    const listaIngresosElement = document.getElementById('lista-ingresos');
    if (listaIngresosElement) {
        listaIngresosElement.innerHTML = ingresosHTML;
    }
}

const eliminarIngreso = (id) =>{
    const indiceEliminar = ingresos.findIndex((ingreso) => ingreso._id === id);

    if (indiceEliminar !== -1) {
        ingresos.splice(indiceEliminar, 1);

        cargarCabecero();
        cargarIngresos(); 
    } else {
        console.error(`No se encontró el elemento con id ${id}`);
    }
}

const crearEgresoHTML = (egreso) => {
    const egresoHTML = `<div class="lista-egresos">
        <div class="elemento limpiarEstilos">            
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">21%</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn"><ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso._id})"></ion-icon></button>
                </div>
            </div>
        </div>
    </div>`

    return egresoHTML;
}

const cargarEgresos = () => {
    let egresosHTML = "";

    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }

    const listaEgresosElement = document.getElementById('lista-egresos');
    if (listaEgresosElement) {
        listaEgresosElement.innerHTML = egresosHTML;
    }
}

const eliminarEgreso = (id) =>{
    const indiceEliminar = egresos.findIndex((egreso) => egreso._id === id);
    if (indiceEliminar !== -1) {
        egresos.splice(indiceEliminar, 1);

        cargarCabecero(); 
        cargarEgresos();
    } else {
        console.error(`No se encontró el elemento con id ${id}`);
    }
}


const agregarDato = () => {
   
    const forma = document.getElementById("forma");

    
    const tipo = forma.querySelector("#tipo").value;
    const descripcion = forma.querySelector("#descripcion").value;
    const valor = forma.querySelector("#valor").value;

    
    if (descripcion.trim() !== "Agregar Descripcion"  && valor.trim() !== 0 ) {
       
        if (tipo === "ingreso") {
            ingresos.push(new Ingreso(descripcion, parseFloat(valor)));

            
            cargarCabecero();
            cargarIngresos();
        }
        else{
            egresos.push(new Egreso(descripcion, parseFloat(valor))); 
            cargarCabecero();
            cargarEgresos();
        }
    }
    else{
        alert("No se cuenta con informacion a agregar");
    }
}
