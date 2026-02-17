import {Dron} from "./models/Dron";
import { Rover } from "./models/Rovers";
import { FleetManager } from "./services/FleetManager";

//instanciamos el gestor
const nexus = new FleetManager<Dron | Rover>();


// creamos los robots
const alpha = new Dron("DRON-01", true)
const beta = new Rover("ROVER-A")

// Operamos
nexus.agregarUnidad(alpha);
nexus.agregarUnidad(beta);

// simulamos movimientos
alpha.mover(10,50,100);
beta.mover(10,50, 0);

// Ejecutamos la misión global
nexus.iniciarMisionGlobal();

// Reportamos el estado final
nexus.reporteEstado();