import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validateinput',
  templateUrl: './validateinput.component.html',
  styleUrls: ['./validateinput.component.css']
})
export class ValidateinputComponent implements OnInit {
@Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
