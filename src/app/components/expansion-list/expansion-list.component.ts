import { Component } from '@angular/core';
import { KonstService } from 'src/app/services/konst.service';

@Component({
  selector: 'app-expansion-list',
  templateUrl: './expansion-list.component.html',
  styleUrls: ['./expansion-list.component.scss']
})
export class ExpansionListComponent {

  constructor(
    public konstService: KonstService
  ) {}

  f() {
  }
}
