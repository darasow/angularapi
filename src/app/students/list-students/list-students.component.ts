import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../interface/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  students:Student[] = []

  constructor(private service:StudentService, private router:Router){}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.service.getStudent().subscribe({
      next:(response)=>{
        this.students = response
        console.log(response)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  editStudent(id_student:number){
    this.router.navigateByUrl(`edit-student/${id_student}`)
  }

  deleteStudent(id_student:number){
    const dialog = confirm("Voulez vous supprimer cet étudiant ");
    if(dialog){
      this.service.delStudent(id_student).subscribe({
        next:(response)=>{
          console.log("etudiant supprime ");
          this.getStudents()
        },
        error:(error)=>console.log(error)

      })
    }
  }

  


}
