import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {
  studentId: string;
  marks: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.studentId = params['id'];
      this.getMarks();
    });
  }

  getMarks(): void {
    this.http.get(`http://localhost:3000/students/${this.studentId}/grades`)
    .subscribe(response => {
        this.marks = response;
      });
  }
}