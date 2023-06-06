import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardsInventarioDashboardComponent } from './info-cards-inventario-dashboard.component';



describe('InfoCardsInventarioDashboardComponent', () => {
  let component: InfoCardsInventarioDashboardComponent;
  let fixture: ComponentFixture<InfoCardsInventarioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardsInventarioDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardsInventarioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
