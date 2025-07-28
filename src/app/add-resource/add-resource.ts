import { Component, Output, output, signal } from '@angular/core';
import { AddResourceDialog } from '../add-resource-dialog/add-resource-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Inject } from '@angular/core';
import { ResourcesService } from '../resources';


@Component({
  selector: 'app-add-resource',
  imports: [MatInputModule, MatFormFieldModule ],
  templateUrl: './add-resource.html',
  styleUrl: './add-resource.scss'
})
export class AddResource {
  //the output signal for the users selection 

  private resource = ' '; 

  constructor(private dialog :MatDialog, private resourcesService: ResourcesService) {
  }


  //open the dialog to allow user to enter a resource value and submit this. 
  openAddResourceDialog(): void 
  {
    const dialogRef = this.dialog.open(AddResourceDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.resource = result;
        this.resourcesService.addResource(this.resource);    
        }
  });

  }
}
