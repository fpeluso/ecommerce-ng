import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() items: string[];
  @Output() search: EventEmitter<string[]> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
