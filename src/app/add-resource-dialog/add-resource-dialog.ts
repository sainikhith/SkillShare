import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-resource-dialog',
  templateUrl: './add-resource-dialog.html',
  styleUrl: './add-resource-dialog.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class AddResourceDialog {
  resource = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<AddResourceDialog>) {}


  //when form is submitted, return the value of the resource
  onSubmit(){
    console.log('here');
    if(this.resource.valid) {
      this.dialogRef.close(this.resource.value);
    }
  }

  //if the user cancels the dialog, close it without returning a value
  onCancel(){
    this.dialogRef.close();
  }
}
