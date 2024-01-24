// En grafica-task.component.ts
import { Component, Input, OnInit } from '@angular/core';

// Asume que Task está definido en otro lugar o en este mismo archivo
export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  status: string;
}

@Component({
  selector: 'app-grafica-task',
  templateUrl: './grafica-task.component.html',
  styleUrls: ['./grafica-task.component.css']
})
export class GraficaTaskComponent implements OnInit {
  @Input() tasks: Task[] = []; // Inicializado con un array vacío para evitar el error de null
  filteredTasks: Task[] = [];

  ngOnInit() {
    this.filteredTasks = [...this.tasks]; // Usa el operador de propagación para copiar tasks
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Aserción de tipo para el EventTarget
    this.filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      task.description.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
