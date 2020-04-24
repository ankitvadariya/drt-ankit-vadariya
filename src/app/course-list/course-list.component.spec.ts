import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { CourseModule } from './course.module';
import { By } from '@angular/platform-browser';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CourseModule
      ],
      providers: [
        Location,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.courseService.get();
  });


  it(`should create`, async(inject([HttpTestingController],
    (httpClient: HttpTestingController) => {
      expect(component).toBeTruthy();
    })));

  it(`should go to create new`, fakeAsync(inject([Location],
    (location: Location) => {
      let button = fixture.debugElement.nativeElement.querySelector('.btn-new');
      button.click();
      tick();
      expect(location.path()).toBe('/course/new');
    })));

});
