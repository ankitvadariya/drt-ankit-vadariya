import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFormComponent],
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create`, async(inject([HttpTestingController],
    (httpClient: HttpTestingController) => {
      expect(component).toBeTruthy();
    })));

});
