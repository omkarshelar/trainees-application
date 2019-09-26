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


// export const STUDENTS_LIST: Student[] = [
//   { id:1 , firstName:'Omkar', lastName: 'Shelar', email:'omkar@mail.com', phone:9876543210 },
//   { id:2 , firstName:'firstName1', lastName: 'lastName1', email:'f1l1@mail.com', phone:9876543210 },
//   { id:3 , firstName:'firstName2', lastName: 'lastName2', email:'f1l1@mail.com', phone:9876543210 },
//   { id:4 , firstName:'firstName3', lastName: 'lastName3', email:'f1l1@mail.com', phone:9876543210 },
//   { id:5 , firstName:'firstName4', lastName: 'lastName4', email:'f1l1@mail.com', phone:9876543210 },
//   { id:6 , firstName:'firstName5', lastName: 'lastName5', email:'f1l1@mail.com', phone:9876543210 },
//   { id:7 , firstName:'firstName6', lastName: 'lastName6', email:'f1l1@mail.com', phone:9876543210 },
// ];

export const STUDENTS_LIST: Student[] = [
  new Student(1 ,'Omkar','Shelar','omkar@mail.com',8806512990),
  new Student(2 ,'Naresh ','M','naresh@mail.com',9876543210),
  new Student(3 ,'Dinesh','Roy','dinesh@mail.com',7776543210),
  new Student(4 ,'Nikhil','K','nikhil@mail.com',8715671025),
  new Student(5 ,'Admin','Administrator','example@mail.com',8451627149),
  
];
