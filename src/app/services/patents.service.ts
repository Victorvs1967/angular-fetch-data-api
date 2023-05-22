import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patent } from '../models/patent';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatentsService {
  private http = inject(HttpClient);
  getPatents(): Observable<Patent[]> {
    return this.http.get<Patent[]>(environment.apiUrl);
  }
}
