import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosValoresRiscosComponent } from './graficos-valores-riscos.component';

describe('GraficosValoresRiscosComponent', () => {
  let component: GraficosValoresRiscosComponent;
  let fixture: ComponentFixture<GraficosValoresRiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosValoresRiscosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosValoresRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
