import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { HomeComponent } from './home/home.component';
import { RastreiosComponent } from './rastreios/rastreios.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent} from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../../auth.guard';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastrosComponent, canActivate: [AuthGuard]},
  {path: 'rastreios', component: RastreiosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'login',component: LoginComponent},
  {path: 'atualizar', component: AtualizarComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
