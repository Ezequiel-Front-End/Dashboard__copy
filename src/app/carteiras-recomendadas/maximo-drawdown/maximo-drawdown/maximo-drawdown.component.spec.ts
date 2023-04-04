import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximoDrawdownComponent } from './maximo-drawdown.component';

describe('MaximoDrawdownComponent', () => {
  let component: MaximoDrawdownComponent;
  let fixture: ComponentFixture<MaximoDrawdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximoDrawdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaximoDrawdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
