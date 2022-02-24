import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleMenu(menu: any, classStr: any){
    if(classStr.indexOf('show') != -1){
      classStr = classStr.replace("show", '');
    } else{
      classStr = classStr + ' show';
    }
    menu.classList = classStr;
  }
}
