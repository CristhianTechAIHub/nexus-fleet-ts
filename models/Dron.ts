import { Robot } from "./Robot";

export class Dron extends Robot {
    constructor(id: string, public tieneCamaraTermica: boolean){
        super(id); // llamamos al constructor padre
    }

    realizarTarea(): void {
        if (this.estado !== 'MISION') {
            console.log(`[${this.id}] No puedo realizar la tarea, no estoy en misión.`);
            return;
        }
        const consumo = this.tieneCamaraTermica ? 15 : 10;
        this.consumirBateria(consumo);
        console.log(`[${this.id}] Realizando tarea de reconocimiento.`);
    }
}

