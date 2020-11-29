import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlunoNewComponent } from './ui/aluno-new/aluno-new.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TrabalhoListComponent } from './ui/trabalho-list/trabalho-list.component';
import { TrabalhoNewComponent } from './ui/trabalho-new/trabalho-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoNewComponent,
    TrabalhoListComponent,
    TrabalhoNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
