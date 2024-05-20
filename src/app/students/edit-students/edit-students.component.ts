import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent {
             
  id_student:any
  student_form:FormGroup

  constructor(private router:Router,private route:ActivatedRoute, private service:StudentService, private fb:FormBuilder){
    this.student_form = this.fb.group({
      "first_name":["",Validators.required],
      "last_name":["",Validators.required],
      "date_of_birth":["",Validators.required],
      "email":["",Validators.compose([Validators.required,Validators.email])],
      "address":["",Validators.required],
      "phone_number":["",Validators.required]
    })
    this.id_student = this.route.snapshot.paramMap.get('id')
    this.getStudent()
  }

  getStudent(){
    this.service.getSingleStudent(this.id_student).subscribe({
      next:(response)=>{
        this.student_form.patchValue(response)
      },
      error:(error)=>console.log(error)
    })
  }

  updateStudent(){
    this.service.updateStudent(this.id_student,this.student_form.value).subscribe({
      next:(response)=>{
        console.log("modification effectué")
        this.router.navigateByUrl('/')
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
