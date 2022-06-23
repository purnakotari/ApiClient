import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingnameComponent } from './bindingname.component';

describe('BindingnameComponent', () => {
  let component: BindingnameComponent;
  let fixture: ComponentFixture<BindingnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
