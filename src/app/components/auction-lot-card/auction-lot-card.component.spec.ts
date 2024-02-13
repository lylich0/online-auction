import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLotCardComponent } from './auction-lot-card.component';

describe('AuctionLotCardComponent', () => {
  let component: AuctionLotCardComponent;
  let fixture: ComponentFixture<AuctionLotCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionLotCardComponent]
    });
    fixture = TestBed.createComponent(AuctionLotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
