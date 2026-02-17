import { Robot } from "./Robot";

export class Rover extends Robot {
    realizarTarea(): void {
        this.consumirBateria(20);
        console.log(`[${this.id}] Realizando tarea de exploración en terreno.`);
    }
}