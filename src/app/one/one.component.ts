import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {
  
  @Input()
  user;
  
  update() {
    this.user.name = 'matt Skiba';
  }

  constructor() { }

  ngOnInit() {
  }

}
