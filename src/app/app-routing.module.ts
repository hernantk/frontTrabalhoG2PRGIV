import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoNewComponent } from './ui/aluno-new/aluno-new.component';

const routes: Routes = [
{path:"new-aluno",component: AlunoNewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
