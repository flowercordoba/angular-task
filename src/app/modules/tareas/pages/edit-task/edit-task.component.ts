import { Component } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  constructor(private taskService: TaskService) {}

  updateTaskTest() {
    const taskId = 'idDeLaTarea'; // Reemplaza con el ID de la tarea que deseas actualizar
    const updatedTaskData = {
      // Datos de prueba para actualizar la tarea
      title: 'Tarea Actualizada',
      description: 'Descripción actualizada de la tarea',
      // otros campos según tu modelo de tarea...
    };

    this.taskService.updateTask(taskId, updatedTaskData).subscribe(
      response => console.log('Update task response:', response),
      error => console.log('Error:', error)
    );
  }
}
