import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';  
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { authGuard } from './guards/auth/auth.guard';
import { OportunidadesComponent } from './pages/oportunidades/oportunidades.component';
import { VerUsuariosComponent } from './pages/usuarios/ver-usuarios/ver-usuarios.component';
import { InformesComponent } from './pages/informes/informes.component';
import { InteraccionesComponent } from './pages/interacciones/interacciones.component';



export const routes: Routes = [
  {
    path: "", // Ruta o path
    title: "inicio",
    component: InicioComponent,
  },
  {
    path: "login", // Ruta o path
    title: "Login",
    component: LoginComponent,
  },
  {
    path: "dashboard", // Ruta o path
    title: "dashboard",
    canActivate: [authGuard],
    component: DashboardComponent, children: [
      {
        path: "usuarios", 
        title: "usuarios",
        component: VerUsuariosComponent
      },
      {
        path: "oportunidades", 
        title: "oportunidades",
        component: OportunidadesComponent
      }
      ,
      {
        path: "informes", 
        title: "informes",
        component: InformesComponent
      },
      {
        path: "interacciones", 
        title: "interacciones",
        component: InteraccionesComponent
      }
    ] 
  },

  // Si se encuentra la ruta, redirecciona el login
  {path: "**", redirectTo: "auth/inicio", pathMatch: "full"},
];
