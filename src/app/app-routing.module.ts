import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayComponent } from './day/day.component';
import { JobsComponent } from './jobs/jobs.component';
import { MoonComponent } from './moon/moon.component';
import { WeekComponent } from './week/week.component';

const routes: Routes = [
  { path: "day", component: DayComponent },
  { path: "moon", component: MoonComponent },
  { path: "week", component: WeekComponent },
  { path: "jobs", component: JobsComponent },
  { path: "", redirectTo: "jobs", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
