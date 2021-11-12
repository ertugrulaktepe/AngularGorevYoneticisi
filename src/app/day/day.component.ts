import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
  providers: [JobgroupService]
})
export class DayComponent implements OnInit {

  constructor(public jobgroupService: JobgroupService) { }

  title = "Günlük Planlarım"
  addJob(value: string) {
    if (value !== "") {
      this.jobgroupService.jobsDay.push(value)
      console.log(this.jobgroupService.jobsDay)
    } else {
      alert('Bir Görev Giriniz ')
    }
  }
  removeJob(job: string) {
    for (let i = 0; i <= this.jobgroupService.jobsDay.length; i++) {
      if (job == this.jobgroupService.jobsDay[i]) {
        this.jobgroupService.jobsDay.splice(i, 1)
      }
    }
  }
  ngOnInit(): void {
  }

}
