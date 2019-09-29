/*
 * Class to control data type in angular components.
 */
export class Student {
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:number;

    constructor(id?:number,firstName?:string,lastName?:string,email?:string,phone?:number) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
    }
}

/*
 * Mock Students. Data loaded when no data found in localStorage object by the student service.
 */
export const STUDENTS_LIST: Student[] = [
  new Student(1 ,'Omkar','Shelar','omkar@mail.com',8806512990),
  new Student(2 ,'Shrutik','Chaudhary','shrutik@mail.com',9876543210),
  new Student(3 ,'Dinesh','Roy','dinesh@mail.com',7776543210),
  new Student(4 ,'Nikhil','Korrakuti','nikhil@mail.com',8715671025),
  new Student(5 ,'Admin','Administrator','example@mail.com',8451627149),
];
