import { Component } from '@angular/core';

@Component({
  selector: 'action-column',
  template: `
    <ng-template #interactiveColumn>
        <ng-content></ng-content>
    </ng-template>
  `
})
export class ActionColumnComponent { }
