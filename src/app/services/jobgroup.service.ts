import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobgroupService {
  jobsDay: any[] = [];
  jobsWeek: any[] = [];
  jobsMoon: any[] = [];
  constructor() { }
}
