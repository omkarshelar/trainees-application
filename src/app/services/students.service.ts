import { Injectable } from '@angular/core';
import { Student } from '../mock-students';
import { STUDENTS_LIST } from '../mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:Student[];
  constructor() { 
    this.students = JSON.parse(localStorage.getItem("students_list")) || STUDENTS_LIST;
    this.writeToLocalStorage();
  }

  writeToLocalStorage() {
    localStorage.setItem("students_list",JSON.stringify(this.students))
  }

  getStudents(id?:number) {
    if(typeof id !== 'undefined') {
      return this.students.filter((element:Student)=>element.id == id);
    }
    return this.students;
  }

  addStudent(newStudent:Student) {
    this.students.push(newStudent);
    this.writeToLocalStorage();
  }
  getLatestId():number {
    let maxId:number = this.students.reduce((max, currentValue)=>max>currentValue.id?max:currentValue.id, -1);
    return maxId+1;
  }

  deleteStudent(id:number) {
    this.students = this.students.filter((student)=>student.id!=id);
    this.writeToLocalStorage();
  }

  deleteStudentsDB() {
    localStorage.removeItem("students_list");
  }

  updateStudent(id:number, firstName:string, lastName:string, email:string, phone:number) {
    let oldStudent = this.students.filter((student)=>student.id==id)[0];
    oldStudent.firstName = firstName;
    oldStudent.lastName = lastName;
    oldStudent.email = email;
    oldStudent.phone = phone;
    this.writeToLocalStorage();
  }

}
