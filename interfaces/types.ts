export type EstadoOperativo = 'IDLE' | 'MISION' | 'RETORNO' | 'ERROR';

export interface ICoordenada {
    x : number;
    y : number;
    z : number; 
}

export interface IMovil {
    mover(x : number, y : number, z : number) : void;
    obtenerPosicion() : ICoordenada;
}