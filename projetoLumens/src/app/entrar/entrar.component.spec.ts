import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarComponent } from './entrar.component';

describe('EntrarComponent', () => {
  let component: EntrarComponent;
  let fixture: ComponentFixture<EntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
