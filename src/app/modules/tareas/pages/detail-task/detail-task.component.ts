import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTaskDetail();
  }

  getTaskDetail() {
    const taskId = 'idDeLaTarea'; // Reemplaza esto con el ID real de la tarea
    this.taskService.getTaskById(taskId).subscribe(
      taskDetail => console.log('Task details:', taskDetail),
      error => console.log('Error:', error)
    );
  }
}
