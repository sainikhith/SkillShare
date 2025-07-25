import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'add-resource',
  templateUrl: './add-resource.html',
  styleUrl: './add-resource.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class AddResource {
  ResourceName: string = '';
}