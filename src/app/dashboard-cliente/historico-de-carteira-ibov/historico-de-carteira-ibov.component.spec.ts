import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeCarteiraIbovComponent } from './historico-de-carteira-ibov.component';

describe('HistoricoDeCarteiraIbovComponent', () => {
  let component: HistoricoDeCarteiraIbovComponent;
  let fixture: ComponentFixture<HistoricoDeCarteiraIbovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoDeCarteiraIbovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoDeCarteiraIbovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
