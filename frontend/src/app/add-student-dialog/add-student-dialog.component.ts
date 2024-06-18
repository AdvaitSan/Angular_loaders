// add-student-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css']
})
export class AddStudentDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddStudentDialogComponent>) { }

  addStudentSubmit(student: any): void {
    this.dialogRef.close(student);
  }
}