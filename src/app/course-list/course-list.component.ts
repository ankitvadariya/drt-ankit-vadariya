import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(public courseService: CourseService, protected router: Router) { }

  ngOnInit(): void {
    this.courseService.get();
  }
}
