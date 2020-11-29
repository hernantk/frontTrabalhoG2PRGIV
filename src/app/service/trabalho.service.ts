import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newTrabalho, Trabalho } from '../model/entities.model';
import { WS_TRABALHO } from './service.mapping';


@Injectable({
    providedIn: 'root'
})
export class TrabalhoService {

    constructor(private http: HttpClient) { }

    findAll(): Observable<Trabalho[]> {
        return this.http.get<Trabalho[]>(WS_TRABALHO)
    }

    save(trabalho : newTrabalho): Observable<any> {
        return this.http.post(WS_TRABALHO, trabalho)
    }
}
