import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOperacaoEstruturadasComponent } from './tabela-operacao-estruturadas.component';

describe('TabelaOperacaoEstruturadasComponent', () => {
  let component: TabelaOperacaoEstruturadasComponent;
  let fixture: ComponentFixture<TabelaOperacaoEstruturadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaOperacaoEstruturadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaOperacaoEstruturadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
