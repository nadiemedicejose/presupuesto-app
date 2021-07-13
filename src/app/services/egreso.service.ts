import { Egreso } from "../models/egreso.model";

// Creamos la clase
export class EgresoServicio {
  // Crear un arreglo
  egresos: Egreso[] = [
    new Egreso('Renta de casa', 8000),
    new Egreso('Recibo telefónico', 2500),
    new Egreso('Comestibles', 4000)
  ]

  // Crear método eliminar
  eliminar(egreso: Egreso) {
    // Declarar variable para recibir indice
    const indice: number = this.egresos.indexOf(egreso)

    // Acceder a la variable tipo array
    this.egresos.splice(indice, 1)
  }
}
