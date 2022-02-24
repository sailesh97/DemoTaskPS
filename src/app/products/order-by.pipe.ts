import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: true
})
export class OrderByPipe implements PipeTransform {

    transform(value: any[], propertyName: string, filterPrice: string): any[] {
        // console.log(propertyName, value, filterPrice)
        if (propertyName)
            return value.sort(
                (a: any, b: any) => {
                    if(filterPrice && filterPrice.toLowerCase() == 'hightolow'){
                        return b[propertyName] - a[propertyName];
                    } else{
                        return a[propertyName] - b[propertyName]; 
                    }
                }
            );
        else
            return value;
    }

}