import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
   }
    getData(){
      return this.db.object('seguridad').valueChanges();
  }
  

  leerDatos(ruta: string) {
    return this.db.object(ruta).valueChanges();
  }
  estado(ruta: string, datos: any) {
    this.db.database.ref(ruta).set(datos);
  }

  dia(ruta: string, datos: any) {
    this.db.database.ref(ruta).set(datos);
  }

  leertemp(ruta: string) {
    return this.db.object(ruta).valueChanges();
  }
  
}
