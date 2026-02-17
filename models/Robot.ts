// importamos las interfaces necesarias

import { EstadoOperativo, ICoordenada, IMovil } from "../interfaces/types";

export abstract class Robot implements IMovil {
    protected posicion: ICoordenada = { x: 0, y: 0, z: 0 };
    protected bateria : number = 100;

    constructor(public readonly id: string, public estado: EstadoOperativo = 'IDLE') {}

    // metodos compartidos por todos
    consumirBateria(cantidad: number): void {
        this.bateria -= cantidad;
        if (this.bateria < 0) this.bateria = 0;
    }

    // medotod abstracto que cada tipo de robot implementara a su manera
    abstract realizarTarea(): void;

    // implementación de la interfaz IMovil
    mover(x: number, y: number, z: number): void {
        this.posicion = { x, y, z };
        this.consumirBateria(5); // consumir bateria al moverse
        console.log(`[${this.id}] Moviéndose a (${x}, ${y}, ${z}). Batería restante: ${this.bateria}%`);
    }
    
    obtenerPosicion(): ICoordenada {
        return this.posicion;   
    }
}