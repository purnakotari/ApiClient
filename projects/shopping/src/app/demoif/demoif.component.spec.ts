import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoifComponent } from './demoif.component';

describe('DemoifComponent', () => {
  let component: DemoifComponent;
  let fixture: ComponentFixture<DemoifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
