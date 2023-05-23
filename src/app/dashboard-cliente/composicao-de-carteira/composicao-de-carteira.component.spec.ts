import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposicaoDeCarteiraComponent } from './composicao-de-carteira.component';

describe('ComposicaoDeCarteiraComponent', () => {
  let component: ComposicaoDeCarteiraComponent;
  let fixture: ComponentFixture<ComposicaoDeCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposicaoDeCarteiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposicaoDeCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
