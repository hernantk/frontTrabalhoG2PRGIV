import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AlunoNewComponent } from './ui/aluno-new/aluno-new.component';
import { TrabalhoListComponent } from './ui/trabalho-list/trabalho-list.component';
import { TrabalhoNewComponent } from './ui/trabalho-new/trabalho-new.component';

const routes: Routes = [
{path:"new-aluno",component: AlunoNewComponent},
{path:"list-trabalho",component: TrabalhoListComponent},
{path:"new-trabalho",component: TrabalhoNewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
