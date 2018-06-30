import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    template: `
    <div class='well hoverwell thumbnail'>
   <h2>{{event.name}}</h2>
   <div>Date: {{event.date}} </div>
   <div [ngClass]=getStartTimeClass() [ngSwitch]="event?.time">
   Time: {{event.time}} 
    <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
    <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
   </div>
   
   <div>Price: \${{event.price}} </div>
   <div [hidden]="!event?.location">
       <span>Location: {{event?.location?.address}}</span>
       <span class='pad-left'>{{event?.location?.city}}, {{event?.location?.country}}</span>
   </div>
   <div *ngIf="event?.locationUrl">
    <span>URL: {{event?.locationUrl}} </span>
   </div>
   <button class='btn btn-primary' (click)='handleClickMe()'>Click Me!</button>
</div>
`,
styles: [`
 .green { color: green !important; }
 .bold { font-weight: bold; }
 .thumbnail { min-height: 310px;}
 .pad-left { margin-left: 10px; }
 .well div { color: #bbb}
`]

})
//  *ngIf - if statement for truth expression - does not even render into DOM
//  ex. *ngIf="some expression", e.g. ="event?.location" 
//  [hidden] is an element property put on a div or span 
//  ex [hidden]="some expression" like e.g. ="!event.location" is truthy if event.location does not exist
//  [class.green]="event?.time === '8:00 am'" will add a green class to an element if ... express is true
//  [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}"

export class EventThumbNailComponent {
    @Input() event: any; // we don't care what data type event will be
    @Output() eventClick = new EventEmitter(); //
    someProperty: any = 'some value'; // this property can be access using '#variableName 
    //on child component in parent component
    // create clickme handler
    handleClickMe() {
        this.eventClick.emit(this.event.name); // outputs string 'foo' when the parent button is click
    }

    logFoo() {
        console.log('Foo!');
    }

    getStartTimeClass():any {
    
        // const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return {green: isEarlyStart, bold: isEarlyStart};

        // IF RETURN USING STRING
        // if (this.event && this.event.time === '8:00 am')
        //     return 'green bold'
        // return ''

        // IF RETURN USING ARRAY
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        return []
    }
}

//@Input - data going into a child component
//@Output - data going from child to parent
