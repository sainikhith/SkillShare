
import { Component, Output, output, signal } from '@angular/core';
import { AddResourceDialog } from '../add-resource-dialog/add-resource-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-resource',
  imports: [MatInputModule, MatFormFieldModule ],
  templateUrl: './add-resource.html',
  styleUrl: './add-resource.scss'
})
export class AddResource {
  
  @Output() resource = signal<string>('');
  constructor(private dialog :MatDialog) {}

  openAddResourceDialog(): void {
    const dialogRef = this.dialog.open(AddResourceDialog);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        // Handle the result from the dialog if needed
        console.log('Dialog result:', result);
        this.resource = result; // Update the resource signal with the dialog result
      }
    });
  }
}
