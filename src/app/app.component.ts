import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDA Front-End practice';
  toShow = true;

  fruits = ["apple", "orange", "banana", "mango"];

  showAlertBox() {
    alert("Click Me is clicked!");
  }

  doggies = ["robi", "rex", "bruno", "bosse"];

  addDoggie () {
    let dog = "Jimmy"
    this.doggies.push(dog);
  }


  woofBox() {
    alert("Woof woof!")
  }



}
