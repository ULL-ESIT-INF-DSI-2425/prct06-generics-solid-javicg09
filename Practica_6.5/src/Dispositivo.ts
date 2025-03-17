/**
* @file Dispositivo.ts
* @description Interfaz que define los dispositivos observadores.
*/

/**
* Interfaz que representa un dispositivo que recibe notificaciones.
*/
export default interface Dispositivo {
    /**
    * Actualiza el estado del dispositivo a partir de un evento y datos opcionales.
    * @param evento Descripción del evento.
    * @param datos Información relacionada con el evento.
    */
    actualizar(evento: string, datos?: any): void;
}
  