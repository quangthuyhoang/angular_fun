import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

declare let toastr // this lets typescript know toastr is accessible globally
@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class='row'>
            <div *ngFor='let event of events' class='col-md-5'>

            <app-event-thumbnail (click)='handleThunbnailClick(event.name)' 
            [event]='event'></app-event-thumbnail>
            </div>
    
        </div>
    
    </div>`
})

// - (eventClick) binding in parent needs to match the eventClick function in the child component 
// - $event passed inside the handleEventClicked function is the data string 'foo' passed from the child 
// from the emitter. object can also be passsed

// #thumbnail is a reference variable that allows templates everwhere to have access to a child component
//  methods and variables

// *ngFor - astrick indicates ngFor directives are STRUCTURAL directive, structural directives actually 
// change the shape of the DOM by add or removing things
// 'let event of events' - create varaible events that is then passed into child component

// data into child component using [] brackets
export class EventsListComponent implements OnInit { // lets the class know to initiate OnInit hook for this class on that cycle time
  events:any[]
  constructor(private eventService: EventService, private toastr:ToastrService) {

  }
// components have lifecycles so one method to hook onto a life cycle is ngInit
  ngOnInit() {
      this.events = this.eventService.getEvents()
  }

  handleThunbnailClick(eventName) {
      //toastr is globally accessible because we called the routes in the angular-clijson file
    this.toastr.success(eventName)

  }

    // handleEventClicked(data) {
    //     console.log('Parent received:', data);
    // };
}

// constructor(private eventService: EventService) {
//  now you use EventService in here
// }
//  using the private precursor for eventServices is the same thing as saying
// class EventsListComponent {
  // eventService
    // constructor(EventService) {
      // this.eventService = EventService;
    // }
// }