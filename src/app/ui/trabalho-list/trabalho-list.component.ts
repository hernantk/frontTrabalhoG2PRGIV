import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabalhoService } from 'src/app/service/trabalho.service';

@Component({
  selector: 'app-trabalho-list',
  templateUrl: './trabalho-list.component.html',
  styleUrls: ['./trabalho-list.component.css']
})
export class TrabalhoListComponent implements OnInit {

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private alunoService: TrabalhoService) { }

  ngOnInit(): void {
  }

}
