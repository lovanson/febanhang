import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-tooltip',
  templateUrl: './ng-tooltip.component.html',
  styleUrls: ['./ng-tooltip.component.scss']
})
export class NgTooltipComponent {

  @Input() image : any
  constructor(){

  }

  ngOnInit(): void {
  }
}
