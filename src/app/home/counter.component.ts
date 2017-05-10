import { Component, Input } from '@angular/core';
@Component({
  selector: 'counter',
  template: `
    <div style="display: inline-block; text-align: center;
      padding: 0 .5em; background-color: #fff; color: #000;
      border: 1px solid #ddd; border-radius: .35em; font-size: .8em;">
      <div style="font-weight: bold;">{{count}}</div>
      <label style="color: darkgray;">{{label | uppercase}}</label>
    </div>
  `
})
export class CounterComponent {
  @Input() public count = 0;
  @Input() public label: string;
}
