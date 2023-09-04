import { Component, Input } from '@angular/core';

@Component({
  selector: 'gq-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input("label") label = "Default";
  @Input("type") primary = "primary";
}
