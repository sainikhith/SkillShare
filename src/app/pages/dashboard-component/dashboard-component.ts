import { Component } from '@angular/core';
import { AddResource } from "../../add-resource/add-resource";

@Component({
  selector: 'app-dashboard-component',
  imports: [ AddResource],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss'
})
export class DashboardComponent {

}
