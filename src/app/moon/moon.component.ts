import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss'],
  providers: [JobgroupService]

})
export class MoonComponent implements OnInit {

  constructor(public jobGroupService: JobgroupService) { }
  title = "Aylık Planlarım"
  addJob(value: string) {
    if (value !== "") {
      this.jobGroupService.jobsMoon.push(value)
      console.log(this.jobGroupService.jobsMoon)  // Tarayıcı console penceresine log düşürebiliriz
    } else {
      alert('Bir Görev Giriniz ')
    }
  }
  removeJob(job: string) {
    for (let i = 0; i <= this.jobGroupService.jobsMoon.length; i++) {
      if (job == this.jobGroupService.jobsMoon[i]) {
        this.jobGroupService.jobsMoon.splice(i, 1)
      }
    }
  }
  ngOnInit(): void {
  }

}
