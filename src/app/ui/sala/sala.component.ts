import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  toAluno(){
    this.router.navigateByUrl
  }

}
