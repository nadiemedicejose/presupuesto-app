import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../models/ingreso.model';
import { IngresoServicio } from '../services/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  // Declarar variable tipo array
  ingresos: Ingreso[] = []

  // Inyectamos la instancia
  constructor(private ingresoServicio: IngresoServicio) { }

  ngOnInit(): void {
    // Inicializar la variable tipo array
    this.ingresos = this.ingresoServicio.ingresos
  }

  // Establecer método para eliminar registro
  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoServicio.eliminar(ingreso)
  }
}
