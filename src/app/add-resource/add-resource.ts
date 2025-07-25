import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-resource',
  templateUrl: './add-resource.html',
  styleUrl: './add-resource.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class AddResource {
  ResourceName: string = '';
}
