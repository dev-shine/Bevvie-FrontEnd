import { Component } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

  public getCurrentYear(): string {
    return moment().format('YYYY');
  }
}
