import { Egreso } from "../models/egreso.model";

// Creamos la clase
export class EgresoServicio {
  // Crear un arreglo
  egreso: Egreso[] = [
    new Egreso('Renta de casa', 8000),
    new Egreso('Recibo telefónico', 2500)
  ]
}
