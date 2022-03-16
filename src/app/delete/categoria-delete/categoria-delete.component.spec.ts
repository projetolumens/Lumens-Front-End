import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDeleteComponent } from './categoria-delete.component';

describe('CategoriaDeleteComponent', () => {
  let component: CategoriaDeleteComponent;
  let fixture: ComponentFixture<CategoriaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
