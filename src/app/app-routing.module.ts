import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './ui/aluno/aluno.component';
import { SalaComponent } from './ui/sala/sala.component';

const routes: Routes = [
{path:"new-aluno",component: AlunoComponent},
{path:"new-sala",component: SalaComponent},
{path:"new-trabalho"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
