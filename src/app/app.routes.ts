import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';  
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
// import { authGuard } from './guards/auth/auth.guard';


export const routes: Routes = [

  {
    path: "auth", // Ruta o path
    title: "Agregar Clientes",
    children: [{path: "login", component: LoginComponent}]
    
  },

  
  // {
  //   path: "inicio", // Ruta o path
  //   title: "inicio",
  //   canActivate: [authGuard], // Guard
  //   children: [
  //     {path: "", title: "inicio", component: InicioComponent},
  //     {
  //       path: "dashboard", // Ruta o path
  //       title: "dashboard",
  //       component: DashboardComponent, 
  //       canActivateChild: [authGuard], 
  //       children: [
  //         {
  //           path: "clientes", 
  //           title: "clientes",
  //           component: VerClientesComponent
  //         }, 
  //         {
  //           path: "servicios", 
  //         title: "servicios",
  //         component: ServiciosComponent
  //         }
  //       ] 
  //     },
  //   ],
  // },
  
  /* -------------------------------- */
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

  // Si se encuentra la ruta, redirecciona el login
  // {path: "**", redirectTo: "auth/login", pathMatch: "full"},
];
