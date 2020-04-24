import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: "course", component: CourseListComponent
  },
  {
    path: "course/:id", component: CourseFormComponent,
  }

];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CourseListComponent,
    CourseComponent,
    CourseFormComponent
  ],
  declarations: [
    CourseListComponent,
    CourseComponent,
    CourseFormComponent
  ]
})
export class CourseModule { }
