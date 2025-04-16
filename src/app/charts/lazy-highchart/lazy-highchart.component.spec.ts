import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyHighchartComponent } from './lazy-highchart.component';

describe('LazyHighchartComponent', () => {
  let component: LazyHighchartComponent;
  let fixture: ComponentFixture<LazyHighchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyHighchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyHighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
