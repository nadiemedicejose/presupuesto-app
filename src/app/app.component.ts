import { Component } from '@angular/core';
import { Egreso } from './models/egreso.model';
import { Ingreso } from './models/ingreso.model';
import { EgresoServicio } from './services/egreso.service';
import { IngresoServicio } from './services/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  // Declarar arreglos para Ingresos y Egresos
  ingresos: Ingreso[] = []
  egresos: Egreso[] = []

  // Crear el constructor
  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) {
    // Inicializar variables
    this.ingresos = ingresoServicio.ingresos
    this.egresos = egresoServicio.egresos
  }

  // Definir método para sumar Ingresos
  getIngresoTotal() {
    let ingresoTotal: number = 0

    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor
    })

    return ingresoTotal
  }

  // Definir método para sumar Egresos
  getEgresoTotal() {
    let egresoTotal: number = 0

    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor
    })

    return egresoTotal
  }

  // Definir método para obtener porcentaje de Ingresos vs Egresos
  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal()
  }

  // Definir método para obtener diferencia entre Ingresos y Egresos
  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal()
  }
}
