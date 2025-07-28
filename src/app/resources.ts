import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  
  private resources: string[] = [
    'banana object 1',
    'banana object 2',
    'banana object 3',
    'banana object 4',
    'banana object 5',
  ];


  public  getResources(){
    return this.resources; 
  }

  public  addResource(resource: string) {
    this.resources.push(resource);
    console.log('Resource added:', resource);
  }; 


}
