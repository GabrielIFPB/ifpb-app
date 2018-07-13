import { Component, OnInit } from '@angular/core';

import { Campus } from './Campus';

@Component({
	selector: 'app-campus',
	templateUrl: './campus.component.html',
	styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

	private _campus: Campus[];

	constructor() { }

	ngOnInit() { }

}
