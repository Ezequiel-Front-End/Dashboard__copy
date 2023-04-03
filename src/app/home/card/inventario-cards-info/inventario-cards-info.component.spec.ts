import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioCardsInfoComponent } from './inventario-cards-info.component';

describe('InventarioCardsInfoComponent', () => {
  let component: InventarioCardsInfoComponent;
  let fixture: ComponentFixture<InventarioCardsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioCardsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioCardsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
