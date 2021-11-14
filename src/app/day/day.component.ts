import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JobgroupService } from '../services/jobgroup.service';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  constructor(public jobgroupService: JobgroupService) { }

  jobDayForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    date: new FormControl(""),
  })
  title = "Günlük Planlarım"
  saveJob() {

    console.log(this.jobgroupService);
    console.log(this.jobgroupService.jobsDay);

    if (this.jobDayForm.value !== "") {
      this.jobgroupService.jobsDay.push(this.jobDayForm.value)
      console.log(this.jobgroupService.jobsDay);
      console.log(this.jobgroupService.jobsDay.length);


    } else {
      alert("Lütfen Bilgileri Eksiksiz Giriniz")

    }


  }


  // addJob(value: string) {
  //   if (value !== "") {
  //     this.jobgroupService.jobsDay.push({ value })
  //     value = '';
  //     console.log(value);

  //     console.log(this.jobgroupService.jobsDay)
  //   } else {
  //     alert('Bir Görev Giriniz ')
  //   }
  // }
  // removeJob(job: string) {
  //   for (let i = 0; i <= this.jobgroupService.jobsDay.length; i++) {
  //     if (job == this.jobgroupService.jobsDay[i]) {
  //       this.jobgroupService.jobsDay.splice(i, 1)
  //     }
  //   }
  // }
  ngOnInit(): void {
  }

}
