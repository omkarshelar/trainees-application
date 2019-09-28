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

  /*
   * The student data is loaded in instance variable when the user is logged in. The local storage is also set.
   */
  constructor() { 
    this.students = JSON.parse(localStorage.getItem("students_list")) || STUDENTS_LIST; // Read the data from localStorage. If not found, 
    this.writeToLocalStorage();
  }

  /*
   * Utility function to write the students list to the local storage.
   */
  writeToLocalStorage() {
    localStorage.setItem("students_list",JSON.stringify(this.students))
  }

  /*
   * Get student as an array.
   * If ID is provided, the get the student with that ID.
   * ID is an optional parameter. If not provided, the full list of students is fetched.
   */
  getStudents(id?:number) {
    if(typeof id !== 'undefined') {
      return this.students.filter((element:Student)=>element.id == id);
    }
    return this.students;
  }

  /*
   * Add a new student to instance variable and write to local storage
   */
  addStudent(newStudent:Student) {
    this.students.push(newStudent);
    this.writeToLocalStorage();
  }

  /*
   * Get the latest ID by finding the maximum of the IDs and adding one.
   */
  getLatestId():number {
    let maxId:number = this.students.reduce((max, currentValue)=>max>currentValue.id?max:currentValue.id, -1);
    return maxId+1;
  }

  /*
   * Delete student of the given ID and write to local storage.
   */
  deleteStudent(id:number) {
    this.students = this.students.filter((student)=>student.id!=id);
    this.writeToLocalStorage();
  }

  /*
   * Called during logout. The students data is removed from the local storage.
   * Reset the data so next login will have the original data.
   */
  deleteStudentsDB() {
    localStorage.removeItem("students_list");
    this.students = STUDENTS_LIST;
  }

  /*
   * Update student, pass the ID of the student to be updated. The new values of the student object are passed as parameters.
   */
  updateStudent(id:number, firstName:string, lastName:string, email:string, phone:number) {
    let oldStudent = this.students.filter((student)=>student.id==id)[0];
    oldStudent.firstName = firstName;
    oldStudent.lastName = lastName;
    oldStudent.email = email;
    oldStudent.phone = phone;
    this.writeToLocalStorage();
  }

}
