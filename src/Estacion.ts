import { Dispositivo } from "./Dispositivo.js";

/**
 * @interface Estacion
 * @description Representa una entidad observada que puede suscribir, desuscribir y notificar a sus observadores.
 */
export interface Estacion {
  /**
   * Suscribe un observador a la estación.
   * @param observador Observador que desea recibir notificaciones.
   */
  suscribir(observador: Dispositivo): void;

  /**
   * Desuscribe un observador de la estación.
   * @param observador Observador que ya no desea recibir notificaciones.
   */
  desuscribir(observador: Dispositivo): void;

  /**
   * Notifica a todos los observadores con los datos del evento.
   * @param datos Información relacionada con el evento.
   */
  notificar(datos: any): void;
}
