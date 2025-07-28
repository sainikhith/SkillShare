import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Inject } from '@angular/core';
import { ResourcesService } from '../../resources';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
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

  constructor(private resourcesService: ResourcesService) {
    this.resources = this.resourcesService.getResources();
    }
  
}
