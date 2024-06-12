import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'arks/:id', component: StudentMarksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }