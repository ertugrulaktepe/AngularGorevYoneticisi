import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DayComponent } from './day/day.component';
import { CategoryComponent } from './category/category.component';
import { WeekComponent } from './week/week.component';
import { MoonComponent } from './moon/moon.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    CategoryComponent,
    WeekComponent,
    MoonComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
