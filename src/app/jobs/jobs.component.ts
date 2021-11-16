import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {

  constructor(public jobGroupService: JobgroupService) { }
  deleteJobDay(job: any) {

    this.jobGroupService.jobsDay.splice(0, 1)
  }
  deleteJobWeek(job: any) {

    this.jobGroupService.jobsWeek.splice(0, 1)
  }
  deleteJobMoon(job: any) {

    this.jobGroupService.jobsMoon.splice(0, 1)
  }


  ngOnInit(): void {

  }

}
