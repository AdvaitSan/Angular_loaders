// student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; 

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  students = [];

  constructor(private studentService: StudentService,  private ngxLoader: NgxUiLoaderService) {}

  ngOnInit(): void {
  }
  getdata(){
    this.ngxLoader.start("do-background-things");
    this.studentService.getStudents().subscribe((students: any[]) => {
      this.students = students;   
    });
    this.ngxLoader.stop("do-background-things");
   
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students = this.students.filter((student) => student._id !== id);
    });
  }
}