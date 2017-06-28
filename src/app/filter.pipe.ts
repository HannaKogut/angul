import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pukhlias: any, term: any): any {
    if (term === undefined) return pukhlias;

    return pukhlias.filter(function(pukhlia){
    	return pukhlia.name.toLowerCase().includes(term.toLowerCase());
    })
  }
  
}
