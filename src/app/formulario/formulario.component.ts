import { Component, OnInit } from '@angular/core';
import { Egreso } from '../models/egreso.model';
import { Ingreso } from '../models/ingreso.model';
import { EgresoServicio } from '../services/egreso.service';
import { IngresoServicio } from '../services/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // Declarar variable y asignar valor inicial
  tipo: string = 'ingresoOperacion'

  // Declarar las variables para Inputs
  descripcion: string
  valor: number

  // Inyectar los servicios
  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) { }

  ngOnInit(): void {
  }

  // Definir método para seleccionar operación
  tipoOperacion(evento) {
    // Cambiar tipo de manera dinámica
    this.tipo = evento.target.value
  }

  // Definir método para agregar valor
  agregarValor() {
    // Agregar un registro al arreglo
    if (this.tipo == 'ingresoOperacion') {
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcion, this.valor))
    } else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcion, this.valor))
    }
  }
}
