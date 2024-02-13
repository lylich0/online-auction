import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-auction-lot-card',
  templateUrl: './auction-lot-card.component.html',
  styleUrls: ['./auction-lot-card.component.sass']
})
export class AuctionLotCardComponent {
  @Input() imageUrl: string = '';
}
