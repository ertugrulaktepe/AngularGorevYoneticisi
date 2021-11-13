import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss'],

})
export class MoonComponent implements OnInit {

  constructor(public jobgroupService: JobgroupService) { }
  title = "Aylık Planlarım"
  jobMoonForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
  })
  saveJob() {

    console.log(this.jobgroupService);
    console.log(this.jobgroupService.jobsDay);

    if (this.jobMoonForm.value !== "") {
      this.jobgroupService.jobsMoon.push(this.jobMoonForm.value)

    } else {
      alert("Lütfen Bilgileri Eksiksiz Giriniz")

    }


  }
  ngOnInit(): void {
  }

}
