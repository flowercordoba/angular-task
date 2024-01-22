import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { GraficaTaskComponent } from './pages/grafica-task/grafica-task.component';
import { GraficaUsersComponent } from './pages/grafica-users/grafica-users.component';


@NgModule({
  declarations: [
    DataTableComponent,
    GraficaTaskComponent,
    GraficaUsersComponent
  ],
  imports: [
    CommonModule,
    DataTableRoutingModule
  ]
})
export class DataTableModule { }
