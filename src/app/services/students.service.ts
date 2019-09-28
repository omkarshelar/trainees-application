import { Injectable } from '@angular/core';
import { Student } from '../mock-students';
import { STUDENTS_LIST } from '../mock-students';

/*
 * Service used for CRUD operations on students. 
 * This service also manipulates the local storage for trainee list.
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:Student[];

  constructor() {
  }

  /*
   * Utility function to write the students list to the local storage.
   */
  writeToLocalStorage(students) {
    localStorage.setItem("students_list",JSON.stringify(students))
  }

  /*
   * Get student as an array.
   * If ID is provided, the get the student with that ID.
   * ID is an optional parameter. If not provided, the full list of students is fetched.
   */
  getStudents(id?:number) {
    let students = JSON.parse(localStorage.getItem("students_list"));
    if(typeof id !== 'undefined') {
      return students.filter((element:Student)=>element.id == id);
    }
    return students;
  }

  /*
   * Add a new student to instance variable and write to local storage
   */
  addStudent(newStudent:Student) {
    let students = this.getStudents();
    students.push(newStudent);
    this.writeToLocalStorage(students);
  }

  /*
   * Get the latest ID by finding the maximum of the IDs and adding one.
   */
  getLatestId():number {
    let students = this.getStudents()
    let maxId:number = students.reduce((max, currentValue)=>max>currentValue.id?max:currentValue.id, -1);
    return maxId+1;
  }

  /*
   * Delete student of the given ID and write to local storage.
   */
  deleteStudent(id:number) {
    let students = this.getStudents();
    students = students.filter((student)=>student.id!=id);
    this.writeToLocalStorage(students);
  }

  /*
   * Reset students to ensure that after logout, the students list is blank.
   */
  resetStudents() {
    let students = STUDENTS_LIST;
    this.writeToLocalStorage(students);
  }

  /*
   * Update student, pass the ID of the student to be updated. The new values of the student object are passed as parameters.
   */
  updateStudent(id:number, firstName:string, lastName:string, email:string, phone:number) {
    let students = this.getStudents()
    let oldStudent = students.filter((student)=>student.id==id)[0];
    oldStudent.firstName = firstName;
    oldStudent.lastName = lastName;
    oldStudent.email = email;
    oldStudent.phone = phone;
    this.writeToLocalStorage(students);
  }

}
