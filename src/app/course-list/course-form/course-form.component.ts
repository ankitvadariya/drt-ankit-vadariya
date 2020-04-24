import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  constructor(public courseService: CourseService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(prams => {
      if (prams.id === "new") {
        this.courseService.course = { id: 0 };
      } else {
        this.courseService.getSingle(prams.id);
      }
    });
  }

  ngOnInit(): void {
  }

  save(f) {
    if (f.form.status === "VALID") {
      this.courseService.save(this.courseService.course).then(() => {
        this.router.navigate(['/course']);
      });
    }
  }
}
