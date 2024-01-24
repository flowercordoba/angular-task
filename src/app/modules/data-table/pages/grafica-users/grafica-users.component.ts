import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-users',
  templateUrl: './grafica-users.component.html',
  styleUrls: ['./grafica-users.component.css']
})
export class GraficaUsersComponent {
  @Input() users!: any[]; // Asegúrate de que el tipo coincida con los datos
  currentPage: number = 1;
  searchText: string = '';

  nextPage() {
    this.currentPage++;
    this.loadUsers();
  }
  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
    this.loadUsers();
  }

  loadUsers() {
    // Aquí llamarías a tu servicio para obtener los usuarios de la página actual
  }

  applyFilter() {
    // Aquí filtrarías los usuarios basándose en searchText
    // Esto podría involucrar llamar a un servicio que acepte un parámetro de búsqueda
  }
}
