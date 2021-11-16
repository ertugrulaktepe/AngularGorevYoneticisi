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

    if (this.jobDayForm.value.name === "" || this.jobDayForm.value.description === "" || this.jobDayForm.value.date === "") {
      alert("Lütfen Bilgileri Eksiksiz Doldurun")
    } else {

      this.jobgroupService.jobsDay.push(this.jobDayForm.value)
    }


  }

  ngOnInit(): void {
  }

}
