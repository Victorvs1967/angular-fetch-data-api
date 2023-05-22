import { Component, inject } from '@angular/core';
import { PatentsService } from 'src/app/services/patents.service';

@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.sass']
})
export class PatentsComponent {
  private patentsService = inject(PatentsService);
  patents$ = this.patentsService.getPatents();
}
