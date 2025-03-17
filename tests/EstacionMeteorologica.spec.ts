import { describe, test, expect } from 'vitest';
import {EstacionMeteorologica} from '../src/EstacionMeteologica.js';
import {DispositivoMovil} from '../src/DispositivoMovil.js';

describe('EstacionMeteorologica', () => {
  test('Notifica a todos los dispositivos suscritos al cambio de temperatura', () => {
    const estacion = new EstacionMeteorologica();
    const movil = new DispositivoMovil();

    // Suscribir dispositivos.
    estacion.suscribir(movil);

    // Simular cambio de temperatura.
    estacion.cambiarTemperatura(25);

    // Verificar que ambos dispositivos recibieron la notificación.
    expect(movil.notificaciones.length).toBe(1);
    expect(movil.notificaciones[0]).toContain("CambioTemperatura");
    expect(movil.notificaciones[0]).toContain("25");

  });

  test('No notifica a dispositivos desuscritos', () => {
    const estacion = new EstacionMeteorologica();
    const movil = new DispositivoMovil();

    estacion.suscribir(movil);
    estacion.desuscribir(movil);
    estacion.cambiarTemperatura(30);

    expect(movil.notificaciones.length).toBe(0);
  });
});
