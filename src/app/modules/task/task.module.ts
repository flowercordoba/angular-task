import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { GetAllComponent } from './get-all/get-all.component';
import { GetCreateComponent } from './get-create/get-create.component';
import { GetDeleteComponent } from './get-delete/get-delete.component';
import { GetUpdateComponent } from './get-update/get-update.component';


@NgModule({
  declarations: [
    GetAllComponent,
    GetCreateComponent,
    GetDeleteComponent,
    GetUpdateComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
