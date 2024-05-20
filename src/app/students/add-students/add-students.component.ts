import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  student_form:FormGroup

  constructor(private router:Router, private service:StudentService, private fb:FormBuilder){
    this.student_form = this.fb.group({
      "first_name":["",Validators.required],
      "last_name":["",Validators.required],
      "date_of_birth":["",Validators.required],
      "email":["",Validators.compose([Validators.required,Validators.email])],
      "address":["",Validators.required],
      "phone_number":["",Validators.required]
    })
   
  }


  addStudent(){
    this.service.addStudent(this.student_form.value).subscribe({
      next:(response)=>{
        console.log("etudiant enregistré avec success")
        this.router.navigateByUrl('/')
      },
      error:(error)=>console.log(error)
    })
  }
}
