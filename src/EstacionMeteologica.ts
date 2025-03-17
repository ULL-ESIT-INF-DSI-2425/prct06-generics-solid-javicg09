/**
* @file EstacionMeteorologica.ts
* @description Implementa la clase observada del patrón Observer. 
*/

import {Dispositivo} from "./Dispositivo.js";

/**
* Clase que representa una estación meteorológica.
* Notifica a los dispositivos cada vez que se produce un evento.
*/
export class EstacionMeteorologica {
  private dispositivos: Dispositivo[] = [];
  private temperatura: number = 0;

  /**
   * Añade un dispositivo a la estación.
   * @param dispositivo Dispositivo a añadir
   */
  public añadir(dispositivo: Dispositivo): void {
    this.dispositivos.push(dispositivo);
  }

  /**
   * Elimina un dispositivo de la estación.
   * @param dispositivo Dispositivo a eliminar
   */
  public eliminar(dispositivo: Dispositivo): void {
    this.dispositivos = this.dispositivos.filter(d => d !== dispositivo);
  }

  /**
   * Notifica a todos los dispositivos de un evento meteorológico.
   * @param evento Descripción del evento.
   * @param datos Información adicional.
   */
  public notificar(evento: string, datos: any): void {
    for (let i = 0; i < this.dispositivos.length; i++) {
      this.dispositivos[i].actualizar(evento, datos);
    }
  }

  /**
   * Establece la temperatura y notifica el cambio.
   * @param temp Nueva temperatura.
   */
  public establecerTemperatura(temp: number): void {
    this.temperatura = temp;
    this.notificar("CambioTemperatura", temp);
  }

  /**
   * Retorna la temperatura actual.
   * @returns Temperatura actual.
   */
  public obtenerTemperatura(): number {
    return this.temperatura;
  }
}
