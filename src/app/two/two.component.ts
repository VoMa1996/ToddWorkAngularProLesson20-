import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  changeDetection: ChangeDetectionStrategy.Default,
  // encapsulation: ViewEncapsulation.Native,
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent{
  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
