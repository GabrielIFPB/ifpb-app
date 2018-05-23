import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-panel',
    templateUrl: '../views/panel.html',
    styleUrls: ['../css/panel.css']
})
export class PanelControll implements OnInit {
    shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    folders = [
        {
          name: 'Photos',
          updated: new Date('1/1/16'),
        },
        {
          name: 'Recipes',
          updated: new Date('1/17/16'),
        },
        {
          name: 'Work',
          updated: new Date('1/28/16'),
        }
      ];
      notes = [
        {
          name: 'Vacation Itinerary',
          updated: new Date('2/20/16'),
        },
        {
          name: 'Kitchen Remodel',
          updated: new Date('1/18/16'),
        }
      ];

    constructor() { }

    ngOnInit() { }
}