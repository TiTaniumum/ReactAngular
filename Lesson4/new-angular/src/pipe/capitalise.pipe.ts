import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise',
  standalone:false
})
export class CapitalisePipe implements PipeTransform {

  transform(value:string): string | undefined {
    if(!value) return;
    return value.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
