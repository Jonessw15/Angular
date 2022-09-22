import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  coursesServices: CoursesService;

  constructor() {
    this.coursesServices = new CoursesService();
    this.courses = this.coursesServices.list();
  }

  ngOnInit(): void {
  }

}