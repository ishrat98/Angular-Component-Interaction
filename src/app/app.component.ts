import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  userLoggedIn = true;
  @ViewChild(ChildComponent, { static: true }) childComponentRef: ChildComponent;

  ngAfterViewInit() {
    this.childComponentRef.message = 'Message from parent component';
  }
}
