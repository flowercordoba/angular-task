import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';

export interface User {
  id: string;
  name: string;
  email: string;
  // Puedes agregar roles, estado, y otras propiedades según tus necesidades
}
export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string; // Puede ser un ID o nombre de usuario
  status: string; // Por ejemplo: 'Pendiente', 'Completada'
  // Agrega más propiedades según la estructura de tus datos
}


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  tasks!: Task[];
  users!: User[];

  constructor(private taskService: TaskService, private userService: UserService) {}

  ngOnInit() {
    // Datos ficticios para tareas
    this.tasks = Array.from({ length: 10 }, (_, i) => ({
      id: `task-${i}`,
      title: `Tarea ${i + 1}`,
      description: `Descripción de la tarea ${i + 1}`,
      assignedTo: `usuario-${i}`,
      status: i % 2 === 0 ? 'Pendiente' : 'Completada'
    }));

    // Datos ficticios para usuarios
    this.users = Array.from({ length: 10 }, (_, i) => ({
      id: `user-${i}`,
      name: `Usuario ${i + 1}`,
      email: `usuario${i + 1}@example.com`
    }));
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      data => this.tasks = data,
      error => console.error('Error al cargar las tareas:', error)
    );
  }
  
  loadUsers() {
    const page = 1; // O el número de página que necesites
    this.userService.getAllUsers(page).subscribe(
      data => this.users = data,
      error => console.error('Error al cargar los usuarios:', error)
    );
  }
}
