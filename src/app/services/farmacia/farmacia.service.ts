import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  constructor(private http : HttpClient) { }

  /**
   * Centraliza la url del servicio
   * @param query 
   */
  getQuery(query: string,data : any) {
    const url = `${environment.urlServicio}${query}`;
    return this.http.post(url,data);
  }

  /**
   * Obtiene todas las comunas
   */
  getAllPharmacy4Filter = (comuna : string, nombrelocal: string) => {
    
    const req = {
      comuna,
      nombrelocal
    };

    return this.getQuery('/farmacia',req)
      .pipe(map(data => {             
        return data['mensaje'].farmacias;
      }));
  }
}
