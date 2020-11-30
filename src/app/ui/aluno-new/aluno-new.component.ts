import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NewAluno } from 'src/app/model/entities.model';
import { AlunoService } from 'src/app/service/aluno.service';

@Component({
  selector: 'app-aluno-new',
  templateUrl: './aluno-new.component.html',
  styleUrls: ['./aluno-new.component.css']
})
export class AlunoNewComponent implements OnInit {

  formAluno = this.formBuilder.group({
    nome: [''],
    email: ['']
    
})
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private alunoService: AlunoService) { }

  ngOnInit(): void {
  }

  save(){
    let aluno = new NewAluno()
    aluno.nome = this.formAluno.value.nome
    aluno.email = this.formAluno.value.email

    this.alunoService.save(aluno).subscribe(result => {
      this.router.navigateByUrl("/list-trabalho")
      
  })
  }
}
