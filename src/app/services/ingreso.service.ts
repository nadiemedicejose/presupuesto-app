import { Ingreso } from "../models/ingreso.model";

// Creamos la clase
export class IngresoServicio {
  // Crear un arreglo
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 12000),
    new Ingreso('Horas extras', 4000)
  ]

  // Definir el método para eliminar
  eliminar(ingreso: Ingreso) {
    // Declarar variable para recibir indice
    const indice: number = this.ingresos.indexOf(ingreso)

    // Eliminar el registro
    this.ingresos.splice(indice, 1)
  }
}
