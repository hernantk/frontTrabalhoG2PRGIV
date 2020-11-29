import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewAluno,Aluno } from '../model/entities.model';
import { WS_ALUNO } from './service.mapping';


@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    constructor(private http: HttpClient) { }

    findAll(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(WS_ALUNO)
    }

    save(aluno: NewAluno): Observable<any> {
        return this.http.post(WS_ALUNO, aluno)
    }
}
