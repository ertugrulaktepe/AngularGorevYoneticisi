import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  providers: [JobgroupService]
})
export class WeekComponent implements OnInit {

  constructor(public jobGroupService: JobgroupService) { }
  title = "Haftalık Planlarım"

  addJob(value: string) {
    if (value !== "") {
      this.jobGroupService.jobsWeek.push(value)
      console.log(this.jobGroupService.jobsWeek)  // Tarayıcı console penceresine log düşürebiliriz
    } else {
      alert('Bir Görev Giriniz ')
    }
  }
  removeJob(job: string) {
    for (let i = 0; i <= this.jobGroupService.jobsWeek.length; i++) {
      if (job == this.jobGroupService.jobsWeek[i]) {
        this.jobGroupService.jobsWeek.splice(i, 1)
      }
    }
  }
  ngOnInit(): void {
  }

}
