import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Course } from 'src/app/interface/course';
import { AlertService } from '../../_alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  list: Array<Course>;
  course: Course;

  constructor(public httpClient: HttpClient, private alert: AlertService) {

  }


  public get() {
    this.httpClient.get<Course[]>(`/courses`).subscribe((data) => {
      this.list = data;
    })
  }

  public delete(id) {
    this.httpClient.delete(`/courses/${id}`).subscribe((data) => {
      this.alert.warn(`Course #${id} deleted !`);
      this.get(); // this is for save time else to save API call we can remove object from array will work too.
    });
  }

  public getSingle(id) {
    this.httpClient.get<Course>(`/courses/${id}`).subscribe((data) => {
      this.course = data;
    })
  }

  public save(data) {
    const promise = new Promise((resolve, reject) => {
      if (data.id === 0) {
        this.httpClient.post<Course>(`/courses`, data).subscribe((data) => {
          resolve(data);
          setTimeout(() => {
            this.alert.success("Course added !");
          }, 100);
        });
      } else {
        this.httpClient.put<Course>(`/courses/${data.id}`, data).subscribe((data) => {
          resolve(data);
          setTimeout(() => {
            this.alert.success(`Course ${data.title} #${data.id} updated !`);
          }, 100);
        });
      }
    });
    return promise;
  }

}


