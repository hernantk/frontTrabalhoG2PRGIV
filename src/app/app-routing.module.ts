import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoNewComponent } from './ui/aluno-new/aluno-new.component';
import { TrabalhoListComponent } from './ui/trabalho-list/trabalho-list.component';

const routes: Routes = [
{path:"new-aluno",component: AlunoNewComponent},
{path:"list-trabalho",component: TrabalhoListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
