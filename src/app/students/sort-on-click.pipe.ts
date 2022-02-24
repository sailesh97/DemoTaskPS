import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortOnClick'
})
export class SortOnClickPipe implements PipeTransform {

  transform(data: Array<any>, columnName:string, clickedCount: number): Array<any> {
    let sortingDirection = 'desc';
    if(clickedCount == 1){
      sortingDirection = 'asc'
    }
    data = data.sort((a,b) => {
      if(sortingDirection == 'desc'){
        return a[columnName] > b[columnName] ? -1 : 1;
      }
      return a[columnName] > b[columnName] ? 1 : -1;
    })
    return data;
  }

}
