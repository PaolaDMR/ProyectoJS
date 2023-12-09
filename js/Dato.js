class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
    }

    // Métodos para el atributo descripcion
    get descripcion() {
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Métodos para el atributo valor
    get valor() {
        return this._valor;
    }

    set valor (Valor) {
        this._valor = Valor;
    }
}