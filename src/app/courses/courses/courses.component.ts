import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

 // coursesServices: CoursesService;

  constructor(private coursesServices: CoursesService) {
   // this.coursesServices = new CoursesService();
    this.courses$ = this.coursesServices.list();
  }

  ngOnInit(): void {
  }

}
