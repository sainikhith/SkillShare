<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
=======
import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
>>>>>>> f52fe017a9a5c00ddf7e3f04e7e0f016e9eef045

@Component({
  selector: 'add-resource',
  templateUrl: './add-resource.html',
  styleUrl: './add-resource.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class AddResource {
  ResourceName: string = '';
}