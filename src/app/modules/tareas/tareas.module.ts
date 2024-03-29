import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { CreateComponent } from './pages/create/create.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { DetailTaskComponent } from './pages/detail-task/detail-task.component';
import { CompletedTaskComponent } from './pages/completed-task/completed-task.component';
import { NofiticationComponent } from 'src/app/components';


@NgModule({
  declarations: [
    TareasComponent,
    CreateComponent,
    ListTaskComponent,
    EditTaskComponent,
    DetailTaskComponent,
    CompletedTaskComponent,
    NofiticationComponent,

  ],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
