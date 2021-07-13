import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from '../models/egreso.model';
import { EgresoServicio } from '../services/egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  // Declarar variable tipo array
  egresos: Egreso[] = []

  @Input() ingresoTotal: number

  // Inyectar el servicio en el constructor
  constructor(private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
    // Inicializar el servicio
    this.egresos = this.egresoServicio.egresos
  }

  // Definir método para eliminar egreso
  eliminarEgreso(egreso: Egreso) {
    // Acceder a la clase del servicio
    this.egresoServicio.eliminar(egreso)
  }

  // Definir método para Obtener del Porcentaje
  calcularPorcentaje(egreso: Egreso) {
    // Retornar el resultado de la operación para obtener porcentaje
    return egreso.valor / this.ingresoTotal
  }
}
