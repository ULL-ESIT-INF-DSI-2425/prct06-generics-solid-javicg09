import { Estacion } from "./Estacion.js";
/**
 * @interface Dispositivo
 * @description Representa un observador (por ejemplo, un dispositivo) que puede recibir notificaciones de una estación.
 */
export interface Dispositivo {
    /**
     * Actualiza el observador a partir de la notificación recibida.
     * @param observable La entidad observada (por ejemplo, la estación que notifica).
     * @param datos Datos del evento notificado.
     */
    actualizar(observable: Estacion, datos: any): void;
  }
  