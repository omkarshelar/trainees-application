import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../mock-students';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: Student[], ...args: any[]): any {
    let searchQuery = args[0].toString().toLowerCase();
    return items.filter((student)=>student.firstName.toLowerCase().startsWith(searchQuery) || student.lastName.toLowerCase().startsWith(searchQuery) || student.email.toLowerCase().startsWith(searchQuery) || student.phone.toString().startsWith(searchQuery));
  }

}
