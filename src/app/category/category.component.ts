import { Component, OnInit } from '@angular/core';
import { JobgroupService } from '../services/jobgroup.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public jobgroupService: JobgroupService) { }

  ngOnInit(): void {
  }

}
