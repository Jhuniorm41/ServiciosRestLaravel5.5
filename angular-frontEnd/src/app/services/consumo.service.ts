import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
// tslint:disable-next-line:class-name
export class serviceLibro {

    private readonly userUrl = environment.apiUrl + 'get/libro';
  constructor(private http: HttpClient) { }

   public listar(): Observable <any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any[]>(
     this.userUrl, {headers: headers}
      );
  }
}
