import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {

  constructor() { }
  duplicateArray = ['Apples', 'Apricots', 'Avocados', 'Bananas',
  'Boysenberries', 'Blueberries', 'Bing Cherry', 'Cherries', 'Cantaloupe', 'Crab apples', 'Clementine',
  'Cucumbers', 'Cherries', 'Cantaloupe', 'Crab apples', 'Clementine', 'Cucumbers'];
  ngOnInit(): void {
  }

}
