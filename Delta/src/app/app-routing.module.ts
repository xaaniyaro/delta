import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TrackingComponent } from './components/tracking/tracking.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'}, // es la ruta / o home o root
  { path: 'home', component: DashboardComponent, children: [
    { path: 'welcome', component: ButtonsComponent},
    { path: 'graphs', component: GraphsComponent},
    { path: 'tasks', component: TasksComponent},
    { path: 'tracking', component: TrackingComponent}
    ] },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login' } //Este es la ruta default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
