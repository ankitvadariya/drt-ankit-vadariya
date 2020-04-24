import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { CourseComponent } from './course.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { CourseModule } from '../course.module';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [
        RouterModule.forRoot([]),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        Location,
      ]
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: "Fake Course",
      description: 'Fake Description',
      duration: 1,
    }
    fixture.detectChanges();
  });

  it(`should create`, async(inject([HttpTestingController],
    (httpClient: HttpTestingController) => {
      expect(component).toBeTruthy();
    })));
});
