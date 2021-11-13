import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
})
export class WeekComponent implements OnInit {

  constructor(public jobGroupService: JobgroupService) { }
  title = "Haftalık Planlarım"

  jobWeekForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
  })
  saveJob() {

    if (this.jobWeekForm.value !== "") {
      this.jobGroupService.jobsWeek.push(this.jobWeekForm.value)

    } else {
      alert("Lütfen Bilgileri Eksiksiz Giriniz")

    }


  }
  ngOnInit(): void {
  }

}
