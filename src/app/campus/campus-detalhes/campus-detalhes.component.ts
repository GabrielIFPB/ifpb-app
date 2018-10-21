import { Component, OnInit } from '@angular/core';

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

	constructor(private route: ActivatedRoute, private _service: CampusService) {
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

	onSubmit(form): void {
		let campi = form.form.value.campi;
		if (form.form.status == "VALID" && campi.ativo) {
			campi.id = this._id;
			this._unsub = this._service.put(campi).subscribe();
		} else {
			console.log("else else")
		}
	}
}
