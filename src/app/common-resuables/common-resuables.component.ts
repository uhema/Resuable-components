import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-resuables',
  templateUrl: './common-resuables.component.html',
  styleUrls: ['./common-resuables.component.css']
})
export class CommonResuablesComponent implements OnInit {
  title = 'datetimepicker';

  droppedItems;
  public loading = false;
  public selectedMoment = new Date();

  
  selectedCars = [3];
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  items = [
    {id: 1, name: 'angular', image: 'python.jpg'},
    {id: 2, name: 'Node Js', image: 'nodejs.jpg'},
    {id: 3, name: 'Java', image: 'java.jpg'},
    {id: 4, name: 'PHP', image: 'php.jpg', disabled: true},     
    {id: 6, name: '.net', image: 'angular.jpg'},
    {id: 7, name: 'Bootstrap', image: 'vue.jpg'},
    {id: 8, name: 'ReactJs', image: 'reactjs.jpg'},
  ];
  selected = [ 1, 7 ];

 

onItemDrop(e: any) {
// Get the dropped data here
this.droppedItems.push(e.dragData);
}




  constructor() { }

  ngOnInit() {
  }

  toggleDisabled() {
    const car: any = this.cars[0];
    car.disabled = !car.disabled;
  }
  
   onSubmit() {
    this.loading = true;           
        setTimeout(()=>{   
          this.loading = false;
     }, 3000);
   
  }
}
