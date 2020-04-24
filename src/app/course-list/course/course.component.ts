import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../interface/course';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: '.app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
  }

}
