import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';  

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
];
