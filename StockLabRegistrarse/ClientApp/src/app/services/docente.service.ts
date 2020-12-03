import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Docente } from '../Stocklabre/models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { this.baseUrl = baseUrl; }

  post(docente: Docente): Observable<Docente> {
    
    return this.http.post<Docente>(this.baseUrl + 'api/Docente', docente).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Docente>('Registrar Docente', null))
    );
  }

  
}
