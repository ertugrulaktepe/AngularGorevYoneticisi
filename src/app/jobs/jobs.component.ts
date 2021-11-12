import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [JobgroupService]

})
export class JobsComponent implements OnInit {

  constructor(public jobGroupService: JobgroupService) { }
  title = "selamlar"
  ngOnInit(): void {
  }

}
