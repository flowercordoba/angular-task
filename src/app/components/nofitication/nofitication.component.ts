import { Component } from '@angular/core';
import { NotificacionService } from 'src/app/core/services/notificacion.service';

@Component({
  selector: 'app-nofitication',
  templateUrl: './nofitication.component.html',
  styleUrls: ['./nofitication.component.css']
})
export class NofiticationComponent {

  
  constructor(private notificacionService: NotificacionService) {}

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }

  getNotificaciones() {
    this.notificacionService.getNotificaciones().subscribe(
      data => console.log('Notificaciones:', data),
      error => console.log('Error:', error)
    );
  }

  getNotificacionById() {
    const id = 1; // Cambia este ID por uno válido para tu prueba
    this.notificacionService.getNotificacionById(id).subscribe(
      data => console.log(`Notificación ${id}:`, data),
      error => console.log('Error:', error)
    );
  }

  deleteNotificacion() {
    const notificacionData = { id: 1 }; // Cambia estos datos por los válidos para tu prueba
    this.notificacionService.deleteNotificacion(notificacionData).subscribe(
      data => console.log('Notificación eliminada:', data),
      error => console.log('Error:', error)
    );
  }

}
