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
    date: new FormControl(""),
  })


  saveJob() {
    if (this.jobMoonForm.value.name === "" || this.jobMoonForm.value.description === "" || this.jobMoonForm.value.date === "") {
      alert("Lütfen Bilgileri Eksiksiz Doldurun")
    } else {

      this.jobgroupService.jobsMoon.push(this.jobMoonForm.value)
    }


  }
  ngOnInit(): void {

  }

}
