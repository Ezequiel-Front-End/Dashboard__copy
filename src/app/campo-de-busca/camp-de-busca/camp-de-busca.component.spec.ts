import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampDeBuscaComponent } from './camp-de-busca.component';

describe('CampDeBuscaComponent', () => {
  let component: CampDeBuscaComponent;
  let fixture: ComponentFixture<CampDeBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampDeBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampDeBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
