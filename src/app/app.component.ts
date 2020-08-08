import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { class: "mat-typography" }
})
export class AppComponent { 

  public home = true;
  public test = true;

  public reload() {

    this.home = false;
    // // this.test = false;

    setTimeout(() => this.home = true);
    // setTimeout(() => this.test = true);

  }
}
