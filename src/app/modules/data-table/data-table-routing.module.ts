import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table.component';
import { GraficaUsersComponent } from './pages/grafica-users/grafica-users.component';
import { GraficaTaskComponent } from './pages/grafica-task/grafica-task.component';

const routes: Routes = [{
  path:'',
  component:DataTableComponent,
  children:[
    {
      path:'grafica-user',component:GraficaUsersComponent
    },
    {
      path:'grafica-task',component:GraficaTaskComponent
    },
    


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
