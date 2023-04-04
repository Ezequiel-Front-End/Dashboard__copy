import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCarteiraComponent } from './tabela-carteira.component';

describe('TabelaCarteiraComponent', () => {
  let component: TabelaCarteiraComponent;
  let fixture: ComponentFixture<TabelaCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCarteiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
