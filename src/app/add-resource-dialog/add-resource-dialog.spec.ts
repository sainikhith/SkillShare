import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceDialog } from './add-resource-dialog';

describe('AddResourceDialog', () => {
  let component: AddResourceDialog;
  let fixture: ComponentFixture<AddResourceDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResourceDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResourceDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
