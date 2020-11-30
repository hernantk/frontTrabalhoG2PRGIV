import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabalho } from 'src/app/model/entities.model';
import { TrabalhoService } from 'src/app/service/trabalho.service';

@Component({
  selector: 'app-trabalho-list',
  templateUrl: './trabalho-list.component.html',
  styleUrls: ['./trabalho-list.component.css']
})
export class TrabalhoListComponent implements OnInit {


  trabalho : Trabalho[] = []

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private trabalhoService: TrabalhoService) { }

  ngOnInit(): void {
    this.findTrabalho()
  }

  openTrabalho(){
    this.router.navigateByUrl("/new-trabalho")
    
  }


  findTrabalho() {
    this.trabalhoService.findAll().subscribe(result => {
        this.trabalho = result
    })
}
}
