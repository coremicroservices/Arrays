import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-unique-items-from-array',
  templateUrl: './unique-items-from-array.component.html',
  styleUrls: ['./unique-items-from-array.component.scss']
})
export class UniqueItemsFromArrayComponent implements OnInit {

  constructor() { }
  duplicateArray = ['Apples', 'Apricots', 'Avocados', 'Apples', 'Apricots', 'Avocados', 'Bananas',
    'Boysenberries', 'Blueberries', 'Bing Cherry', 'Cherries', 'Cantaloupe', 'Crab apples', 'Clementine',
    'Cucumbers', 'Cherries', 'Cantaloupe', 'Crab apples', 'Clementine', 'Cucumbers'];
  uniqueItemsbyForeach = [];
  uniqueItemsbyfilter = [];
  uniqueItemsbySets = [];
  ngOnInit(): void {
    this.GetUniqueItemsByForeach();
    this.GetUniqueItemsByfilter();
    this.GetUniqueItemsBySets();
  }

  GetUniqueItemsByForeach() {
    this.duplicateArray.forEach(items => {
      if (!this.uniqueItemsbyForeach.includes(items)) {
        this.uniqueItemsbyForeach.push(items);
      }
    });
  }

  GetUniqueItemsByfilter() {
    this.duplicateArray.filter(items => {
      if (this.uniqueItemsbyfilter.indexOf(items) === (-1)) {
        this.uniqueItemsbyfilter.push(items);
      }
    });
  }

  GetUniqueItemsBySets() {
    this.uniqueItemsbySets = [...new Set(this.duplicateArray)];
  }

}
