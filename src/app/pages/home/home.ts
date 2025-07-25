import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddResource } from "../../add-resource/add-resource";
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  import { AddResourceDialog } from "../../add-resource-dialog/add-resource-dialog";
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  resources = [
    'banana object 1',
    'banana object 2',
    'banana object 3',
    'banana object 4',
    'banana object 5',
  ];
}
