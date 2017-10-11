import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  birthday: Date = new Date();

  pi = 3.1415926;

  size = 7;

  searchInput: FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }

  getStockInfo(value: string) {
    console.log(value);
  }
}
