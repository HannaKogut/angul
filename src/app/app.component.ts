import { Component } from '@angular/core';
import { HomeComponent } from './home/index';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app works!';
  name = 'pukhlia';
  vyshnja ={
		name: "pukhlia",
		belt:"black"
	};
	yell(e){
		alert("i am yelling");
	}
}
