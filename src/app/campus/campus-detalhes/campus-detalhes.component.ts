import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { CampusService } from '../campus.service';
import { Campus } from '../campus';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-editar.campus',
	templateUrl: './campus-detalhes.component.html',
	styleUrls: ['./campus-detalhes.component.css']
})
export class CampusDetalhesComponent implements OnInit {

	private _campi: Campus;
	private _unsub: Subscription;
	private _id: string
	private _expression: string = `[A-Za-z '-çÂãÕõáéíóúâêîôû]*`;

	private options: FormGroup;

	constructor(private fb: FormBuilder, private route: ActivatedRoute, private _service: CampusService) {
		
		console.log(this._unsub)
		console.log(this._campi)
	}

	ngOnInit() {
		this._unsub = this.route.params.subscribe(
			(params: any) => {
				this._id = params['id']
				this._unsub = this._service.getCampi(Number(this._id))
											.subscribe(result => this._campi = result);
			}
		);
	}

	ngOnDestroy() {
		this._unsub.unsubscribe();
	}

}
