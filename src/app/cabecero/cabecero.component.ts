import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  // Declarar variables y establecer el decorador
  @Input() presupuestoTotal: number
  @Input() ingresoTotal: number
  @Input() egresoTotal: number
  @Input() porcentajeTotal: number

  constructor() { }

  ngOnInit(): void {
  }

}
