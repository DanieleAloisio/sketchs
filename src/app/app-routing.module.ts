import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/service/route-guard.service';
import { Ruoli } from './models/Ruoli';
import { LoginComponent } from './pages/login/login.component';
import { SketchsComponent } from './pages/sketchs/sketchs.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'sketchs', component: SketchsComponent, canActivate:[RouteGuardService], data: { roles: [Ruoli.user, Ruoli.admin] }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
