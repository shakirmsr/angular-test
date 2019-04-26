import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroesComponent, DashboardComponent } from './components';//from components.ts

const routes:Routes = [
  {path:'heroes-listing', component: HeroesComponent},
  {path:'dashboard', component:DashboardComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
