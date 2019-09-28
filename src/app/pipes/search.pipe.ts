import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../mock-students';

/*
 * Searches first name, last name, email, phone for the given search paramater.
 * The search is case Insensitive.
 */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: Student[], ...args: any[]): any {
    let searchQuery = args[0].toString().toLowerCase(); // args[0] is the first argument.
    return items.filter((student)=> {
    if(student.firstName.toLowerCase().includes(searchQuery) || student.lastName.toLowerCase().includes(searchQuery) || student.email.toLowerCase().includes(searchQuery) || student.phone.toString().includes(searchQuery)) {
      return true;
    }
  });
  }

}
