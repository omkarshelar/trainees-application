import { Pipe, PipeTransform } from '@angular/core';

/*
 * +91 to any given number.
 */
@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    return '+91-'+value;
  }


}
