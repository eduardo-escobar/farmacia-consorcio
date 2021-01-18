import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  constructor(private http : HttpClient) { }

  /**
   * Centraliza la url del servicio
   * @param query 
   */
  getQuery(query: string) {
    const url = `${environment.urlServicio}${query}`;
    return this.http.get(url);
  }

  /**
   * Obtiene todas las comunas
   */
  getAllCommunes = () => {
    return this.getQuery('/comunas')
      .pipe(map(data => {     
        return data['communes'];
      }));
  }
  
}

export interface Comuna {
  idx: number;
  nombre: string;
}
