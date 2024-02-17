import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: "", // Ruta o path
    title: "inicio",
    component: InicioComponent,
  },
  {
    path: "about", // Ruta o path
    title: "quienes somos",
    component: AboutComponent,
  },
  {
    path: "login", // Ruta o path
    title: "Login",
    component: LoginComponent,
  },
];
