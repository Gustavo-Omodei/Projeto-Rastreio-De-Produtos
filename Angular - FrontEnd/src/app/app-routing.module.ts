import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { HomeComponent } from './home/home.component';
import { RastreiosComponent } from './rastreios/rastreios.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent
 } from './contato/contato.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastrosComponent},
  {path: 'rastreios', component: RastreiosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
