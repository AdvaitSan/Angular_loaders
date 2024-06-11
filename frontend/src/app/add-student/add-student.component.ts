import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  newStudent = {
    name: '',
    age: 0,
    grade: ''
  };

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.studentService.addStudent(this.newStudent)
     .subscribe((response) => {
        console.log(response);
        this.newStudent = {
          name: '',
          age: 0,
          grade: ''
        };
        this.studentService.refreshStudents(); // Call refreshStudents method
      }, (error) => {
        console.error(error);
      });
  }
}