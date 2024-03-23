
import { Component, OnInit, ViewChild } from '@angular/core';
import { SimplePieComponent } from '../../components/graficas/simple-pie/simple-pie.component';
import { UsuarioService } from '../../services/usuario/usuario.service';

import { UsuarioModel } from '../../core/models/usuario.model';
import { OPORTUNIDADES } from '../../core/enum/oportunidades.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-informes',
  standalone: true,
  imports: [SimplePieComponent],
  templateUrl: './informes.component.html',
  styleUrl: './informes.component.css'
})
export class InformesComponent implements OnInit{
  usuarioSuscription: Subscription;
  usuarios: UsuarioModel[] = [];
  totalOportunidades: number[] = [];

  constructor( 
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();

  }

  cargarUsuarios() {
    this.usuarioSuscription = this.usuarioService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
      this.oportunidades();
    })
  };

  oportunidades() {
    
    
    // Separamos los elementos del array original y los almacenamos en variables individuales 
    const resultPerdida = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.PERDIDA);
    const resultGanada = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.GANADA);
    const resultEnProceso = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.EN_PROCESO);
    const resultCerrada = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.CERRADA);
    
    // Añadimos elementos al objeto total
    this.totalOportunidades.push(resultPerdida.length);
    this.totalOportunidades.push(resultGanada.length);
    this.totalOportunidades.push(resultEnProceso.length);
    this.totalOportunidades.push(resultCerrada.length);
    
    console.log("Total Oportunidades:",this.totalOportunidades);
    
  };
}
