import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../model/entities.model';
import { WS_MATERIA } from './service.mapping';


@Injectable({
    providedIn: 'root'
})
export class MateriaService {

    constructor(private http: HttpClient) { }

    findAll(): Observable<Materia[]> {
        return this.http.get<Materia[]>(WS_MATERIA)
    }

    save(materia: Materia): Observable<any> {
        return this.http.post(WS_MATERIA, materia)
    }
}
