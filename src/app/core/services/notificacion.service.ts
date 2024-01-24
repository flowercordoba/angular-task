import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  private readonly base_url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getNotificaciones() {
    return this.http.get(`${this.base_url}/notificaciones`);
  }

  getNotificacionById(id: number) {
    return this.http.get(`${this.base_url}/notificaciones/${id}`);
  }

  deleteNotificacion(notificacionData: any) {
    return this.http.put(`${this.base_url}/delete`, notificacionData);
  }

}
