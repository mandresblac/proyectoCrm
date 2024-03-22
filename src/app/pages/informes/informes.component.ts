
import { Component, OnInit, ViewChild } from '@angular/core';
import { SimplePieComponent } from '../../components/graficas/simple-pie/simple-pie.component';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Subscription } from 'rxjs';
import { UsuarioModel } from '../../core/models/usuario.model';
import { OPORTUNIDADES } from '../../core/enum/oportunidades.enum';

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

  constructor( 
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioSuscription = this.usuarioService.getUsuarios().subscribe((res: any) => {
      this.usuarios = res.usuarios;
      console.log(res);
    })

    this.totalOportunidades();
  }

  totalOportunidades() {
    let total: any = {
        perdida: [],
        ganada: [],
        enProceso: [],
        cerrada: []
    };
    
    // Separamos los elementos del array original y los almacenamos en variables individuales 
    const resultPerdida = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.PERDIDA);
    const resultGanada = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.GANADA);
    const resultEnProceso = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.EN_PROCESO);
    const resultCerrada = this.usuarios.filter(usuario => usuario.oportunidades === OPORTUNIDADES.CERRADA);
    
    // Añadimos elementos al objeto total
    total.perdida.push(resultPerdida);
    total.ganada.push(resultGanada);
    total.enProceso.push(resultEnProceso);
    total.cerrada.push(resultCerrada);
    console.log("Total desde informes:",total);

    // Retornamos
    return `Perdida: ${total.perdida.length} \nGanada: ${total.ganada.length} \nEn proceso: ${total.enProceso.length} \nCerrada: ${total.cerrada.length}`;
    
};
}
