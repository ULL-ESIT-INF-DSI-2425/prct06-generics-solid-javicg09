import { Estacion } from "./Estacion.js";
import { Dispositivo } from "./Dispositivo.js";

/**
 * @class EstacionMeteorologica
 * @description Implementa la interfaz IEstacion para notificar eventos meteorológicos a sus observadores.
 */
export class EstacionMeteorologica implements Estacion {
  private observadores: Dispositivo[] = [];
  private temperatura: number = 0;

  public suscribir(observador: Dispositivo): void {
    this.observadores.push(observador);
  }

  public desuscribir(observador: Dispositivo): void {
    this.observadores = this.observadores.filter(o => o !== observador);
  }

  public notificar(datos: any): void {
    for (let i = 0; i < this.observadores.length; i++) {
      this.observadores[i].actualizar(this, datos);
    }
  }

  /**
   * Simula un cambio de temperatura y notifica a los observadores.
   * @param temp Nueva temperatura.
   */
  public cambiarTemperatura(temp: number): void {
    this.temperatura = temp;
    this.notificar({ evento: "CambioTemperatura", valor: temp });
  }

  public getTemperatura(): number {
    return this.temperatura;
  }
}
