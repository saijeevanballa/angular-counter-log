import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent {
  public count = 0;
  constructor() {}
  onAdd = () => ++this.count;
  onSub = () => {
    this.count = this.count == 0 ? 0: --this.count;
  };
}
