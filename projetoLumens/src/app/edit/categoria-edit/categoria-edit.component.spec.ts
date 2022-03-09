import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEditComponent } from './categoria-edit.component';

describe('CategoriaEditComponent', () => {
  let component: CategoriaEditComponent;
  let fixture: ComponentFixture<CategoriaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
