import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { P404Component } from "./pages/p-404/p-404.component";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "data", loadChildren:()=>import('./modules/data-table/data-table.module').then(m =>m.DataTableModule) },
      { path: "user", loadChildren:()=>import('./modules/user/user.module').then(m =>m.UserModule) },
      { path: "task", loadChildren:()=>import('./modules/tareas/tareas.module').then(m =>m.TareasModule) },

      { path: "", redirectTo: "/user", pathMatch: "full" },

    ],
  },


  { path: "auth", loadChildren:()=>import('./modules/auth/auth.module').then(m =>m.AuthModule) },

  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
