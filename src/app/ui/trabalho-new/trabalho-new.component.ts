import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { newTrabalho } from 'src/app/model/entities.model';
import { TrabalhoService } from 'src/app/service/trabalho.service';

@Component({
  selector: 'app-trabalho-new',
  templateUrl: './trabalho-new.component.html',
  styleUrls: ['./trabalho-new.component.css']
})
export class TrabalhoNewComponent implements OnInit {

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private trabalhoService: TrabalhoService) { }

  formTrabalho = this.formBuilder.group({
    titulo: [''],
    descricao: [''],
    nota: [''],
    data: ['']
    
})

  ngOnInit(): void {
  }

  save(){
    let trabalho = new newTrabalho()
    trabalho.titulo = this.formTrabalho.value.titulo
    trabalho.descricao = this.formTrabalho.value.descricao
    trabalho.nota = this.formTrabalho.value.nota
    console.log(trabalho.dataEntrega =this.formTrabalho.value.data)

    this.trabalhoService.save(trabalho).subscribe(result => {
      this.router.navigateByUrl("/list-trabalho")
      
  })
}
}
