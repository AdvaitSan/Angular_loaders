import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  data: any;
  selectedStudent: any;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.http.get('http://localhost:3000/students')
    .subscribe(response => {
        this.data = response;
      });
  }

  @ViewChild('viewMarksDialog') viewMarksDialog: any;

  viewMarks(studentId: string): void {
    this.http.get(`http://localhost:3000/students/${studentId}/grades`)
    .subscribe(response => {
        this.selectedStudent = response;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = this.selectedStudent;
        this.dialog.open(this.viewMarksDialog, dialogConfig);
        console.log(response)
      });
  }
}