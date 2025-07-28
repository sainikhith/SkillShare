import {Component, EventEmitter, Output, output} from '@angular/core';
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

  // holds the response from the dialog box user input 
  resource = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<AddResourceDialog>) {}

  //emmitter of the value back to the parent component, addResource
  @Output() addResource = new EventEmitter<string>();
  
  //when form is submitted, return the value of the resource
  onSubmit(){
    if(this.resource.valid) {
      this.dialogRef.close(this.resource.value);
    }
  }

}
