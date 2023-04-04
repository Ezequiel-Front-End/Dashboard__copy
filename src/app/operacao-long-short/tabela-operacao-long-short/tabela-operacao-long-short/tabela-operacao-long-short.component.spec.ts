import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOperacaoLongShortComponent } from './tabela-operacao-long-short.component';

describe('TabelaOperacaoLongShortComponent', () => {
  let component: TabelaOperacaoLongShortComponent;
  let fixture: ComponentFixture<TabelaOperacaoLongShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaOperacaoLongShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaOperacaoLongShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
