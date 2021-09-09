import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

const routes: Routes = [
  {path:"listalibros",component:ListaLibrosComponent},
  {path:"formularionuevo",component:FormularioNuevoComponent},
  {path:"detalle/:isbn",component:DetalleLibroComponent},
  {path:"editar/:isbn",component:EditarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
