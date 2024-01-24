import { Component } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private taskService: TaskService) {}

  // Ejemplo de método para probar la creación de una tarea
  createTaskTest() {
    const newTaskData = {
      // Datos de prueba para una nueva tarea
    };

    this.taskService.createTask(newTaskData).subscribe(
      response => console.log('Create task response:', response),
      error => console.log('Error:', error)
    );
  }

}
