import { Ingreso } from "../models/ingreso.model";

// Creamos la clase
export class IngresoServicio {
  // Crear un arreglo
  ingreso: Ingreso[] = [
    new Ingreso('Salario', 12000),
    new Ingreso('Horas extras', 4000)
  ]
}
