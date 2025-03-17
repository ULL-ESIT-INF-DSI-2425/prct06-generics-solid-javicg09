import { Dispositivo } from "./Dispositivo.js";
import { Estacion } from "./Estacion.js";

/**
 * @class DispositivoMovil
 * @description Implementa la interfaz IObservador para recibir notificaciones de la estación.
 */
export class DispositivoMovil implements Dispositivo {
  public notificaciones: string[] = [];

  public actualizar(observable: Estacion, datos: any): void {
    const mensaje = `Móvil recibe: ${datos.evento} - ${datos.valor}`;
    this.notificaciones.push(mensaje);
    console.log(mensaje);
  }
}
