
import { Component } from '@angular/core';

@Component({
    selector:'bwm-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent{
    public counter: number = 0;

    increment(event: any,incrementor: number){
        this.counter += incrementor;
    }

    decrement(){
        this.counter -=1;
    }
}
