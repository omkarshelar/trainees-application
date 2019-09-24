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

  getStudents() {
    return this.students;
  }

  addStudent(newStudent:Student) {
    this.students.push(newStudent);
    this.writeToLocalStorage();
  }

  deleteStudent(email) {
    this.students = this.students.filter((student)=>student.email!=email);
    this.writeToLocalStorage();
  }

  deleteStudentsDB() {
    localStorage.removeItem("students_list");
  }

}
