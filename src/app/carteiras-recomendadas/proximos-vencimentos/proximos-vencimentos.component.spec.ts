import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosVencimentosComponent } from './proximos-vencimentos.component';

describe('ProximosVencimentosComponent', () => {
  let component: ProximosVencimentosComponent;
  let fixture: ComponentFixture<ProximosVencimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximosVencimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximosVencimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
