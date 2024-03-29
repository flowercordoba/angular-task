import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Task } from 'src/app/modules/data-table/data-table.component';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly base_url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createTask(taskData: any) {
    return this.http.post(`${this.base_url}/create-task`, taskData);
  }

  sendTask(taskData: any) {
    return this.http.post(`${this.base_url}/send-task`, taskData);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.base_url}/task`);
  }
  getTaskById(id: string) {
    return this.http.get(`${this.base_url}/task/${id}`);
  }

  updateTask(taskData: any,update:any) {
    return this.http.put(`${this.base_url}/task-update`, taskData);
  }

  deleteTask(taskData: any) {
    return this.http.delete(`${this.base_url}/task-delete`, { body: taskData });
  }

}
