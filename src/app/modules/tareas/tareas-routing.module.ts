import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas.component';
import { CreateComponent } from './pages/create/create.component';
import { ListTaskComponent } from './pages/list-task/list-task.component';
import { DetailTaskComponent } from './pages/detail-task/detail-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { CompletedTaskComponent } from './pages/completed-task/completed-task.component';

const routes: Routes = [{
  path:'',
  component:TareasComponent,
  children:[
    {path:'create',component:CreateComponent},
    {path:'update',component:EditTaskComponent},
    {path:'detail',component:DetailTaskComponent},
    {path:'list',component:ListTaskComponent},
    {path:'completed',component:CompletedTaskComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
