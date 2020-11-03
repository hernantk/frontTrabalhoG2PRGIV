import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../model/entities.model';
import { WS_SALA_BY_USER,WS_SALA } from './service.mapping';


@Injectable({
    providedIn: 'root'
})
export class SalaService {

    constructor(private http: HttpClient) { }

    findByUser(iduser: Number): Observable<Sala[]> {
        return this.http.get<Sala[]>(WS_SALA_BY_USER + iduser)
    }

    save(sala: Sala): Observable<any> {
        return this.http.post(WS_SALA, sala)
    }
}
