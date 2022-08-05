import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';



const routes: Routes = [
  {
    path:'carreras',
    component: ContenedorComponent,
    pathMatch: 'full'    
  },
  {
    path:'students',
    component: EstudiantesComponent 
  },
  {
    path:'**',
    redirectTo: ''
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
