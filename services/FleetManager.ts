import { Robot } from "../models/Robot";

export class FleetManager<T extends Robot> {
    private flota: T[] = [];
    agregarUnidad(unidad: T): void {
        this.flota.push(unidad);
        console.log(`[SISTEMA] Unidad ${unidad.id} añadida a la flota.`);
    }

    iniciarMisionGlobal(): void {
        console.log('[SISTEMA] Iniciando misión global para toda la flota...');
        this.flota.forEach(robot => {
            robot.estado = 'MISION';
            robot.realizarTarea();
        });
    }

    reporteEstado(): void {
        console.log('[SISTEMA] Reporte de estado de la flota:');
        this.flota.forEach(robot => {
            const pos = robot.obtenerPosicion();
            console.log(`[${robot.id}] Estado: ${robot.estado}, Posición: (${pos.x}, ${pos.y}, ${pos.z})`);
        })
    }
}
