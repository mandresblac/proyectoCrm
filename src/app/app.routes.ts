import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';  
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
  {
    path: "", // Ruta o path
    title: "inicio",
    component: InicioComponent,
  },
  {
    path: "home", // Ruta o path
    title: "home",
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
    component: DashboardComponent, children: [
      {
        path: "clientes", 
        title: "clientes",
        component: VerClientesComponent
      }, 
      {
        path: "servicios", 
      title: "servicios",
      component: ServiciosComponent
      }
    ] 
  },
];
