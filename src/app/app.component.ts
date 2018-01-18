import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any = {
    name: 'Volodymyr Maliarov',
    age: 22,
    location: 'Rzeszow'
  };

  addProp() {
    this.user.email = 'volodymyr@test.com';
  }

  changeName() {
    this.user.name = "Vladyslaw Testowic";
  }

  changeUser() {
    this.user = {
      name: 'Angelina Suvorova',
      age: 21,
      location: 'Kiev'
    };
  }
}
