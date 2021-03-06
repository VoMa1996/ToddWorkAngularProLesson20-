import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

interface Files {
  name: string,
  size: any,
  type: string
}

import { FileSizePipe } from './filesize.pipe';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    FileSizePipe
  ]
})
export class AppComponent {




  //lesson28
  // files: Files[];
  // mapped: Files[];

  // ngOnInit() {
  //   this.files = [
  //     {name: 'logo.svg', size: 212234, type: 'image/svg'},
  //     {name: 'banner.jpg', size: 46477, type: 'image/jpg'},
  //     {name: 'background.png', size: 575476, type: 'image/png'}
  //   ];

  //   this.mapped = this.files.map(file => {
  //     return {
  //       name: file.name,
  //       type: file.type,
  //       size: this.fileSizePipe.transform(file.size, 'mb')
  //     };
  //   });
  // }

  // constructor(
  //   private fileSizePipe: FileSizePipe
  // ) {}
  //lesson28 -> 27


//   user: any = {
//     name: 'Volodymyr Maliarov',
//     age: 22,
//     location: 'Rzeszow'
//   };

//   addProp() {
//     this.user.email = 'volodymyr@test.com';
//   }

//   changeName() {
//     this.user.name = "Vladyslaw Testowic";
//   }

//   changeUser() {
//     this.user = {
//       name: 'Angelina Suvorova',
//       age: 21,
//       location: 'Kiev'
//     };
//   }

//   items = [{
//     name: 'Volodymyr Maliarov',
//     age: 22,
//     location: 'Poland'
//   },{
//     name: 'Angelina Suvorova',
//     age: 21,
//     location: 'Poland'
//   },{
//     name: 'Todd Motto',
//     age: 25,
//     location: 'USA'
//   },
// ];


// constructor() {
//   setTimeout(()=>{
//     this.items = [...this.items, {name: 'New Person', age: 30, location: 'Australia'}];
//   }, 2000);
// }


}
