import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
  }
  leertemp(ruta: string) {
    return this.db.object(ruta).valueChanges();
}

}
