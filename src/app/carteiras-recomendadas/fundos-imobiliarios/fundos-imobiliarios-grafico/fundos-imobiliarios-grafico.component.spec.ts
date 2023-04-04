import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundosImobiliariosGraficoComponent } from './fundos-imobiliarios-grafico.component';

describe('FundosImobiliariosGraficoComponent', () => {
  let component: FundosImobiliariosGraficoComponent;
  let fixture: ComponentFixture<FundosImobiliariosGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundosImobiliariosGraficoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundosImobiliariosGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
