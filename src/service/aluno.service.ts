import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../model/entities.model';
import { WS_ALUNO } from './service.mapping';


@Injectable({
    providedIn: 'root'
})
export class SalaService {

    constructor(private http: HttpClient) { }

    findBAll(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(WS_ALUNO)
    }

    save(sala: Aluno): Observable<any> {
        return this.http.post(WS_ALUNO, Aluno)
    }
}
