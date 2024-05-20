import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddStudentsComponent } from './students/add-students/add-students.component';
import { EditStudentsComponent } from './students/edit-students/edit-students.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';

export const routes: Routes = [
  { path: '', component: ListStudentsComponent },
  { path: 'add-student', component: AddStudentsComponent },
  { path: 'edit-student/:id', component: EditStudentsComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
