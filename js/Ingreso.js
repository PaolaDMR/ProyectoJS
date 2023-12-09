class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = Ingreso.contadorIngresos++;
    }

    getId() {
        return this._id;
    }
}