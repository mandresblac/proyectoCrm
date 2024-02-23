import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { VerClientesComponent } from "../ver-clientes/ver-clientes.component";

export const routes: Routes = [
  {
    path: "dashboard", // Ruta o path
    title: "dashboard",
    component: DashboardComponent, children: [
      {
        path: "clientes", 
        title: "clientes",
        component: VerClientesComponent
      }
    ] 
  },
  /* {
    path: "clientes", 
    title: "clientes",
    component: VerClientesComponent
  } */
];
