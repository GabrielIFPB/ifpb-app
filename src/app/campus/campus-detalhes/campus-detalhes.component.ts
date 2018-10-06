import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CampusService } from '../campus.service';
import { Campus } from '../campus';

@Component({
	selector: 'app-editar.campus',
	templateUrl: './campus-detalhes.component.html',
	styleUrls: ['./campus-detalhes.component.css']
})
export class CampusDetalhesComponent implements OnInit {

	private _campus$: Observable<Campus>;

	constructor(private route: ActivatedRoute, private router: Router, private _service: CampusService) { }

	ngOnInit() {
		let id = this.route.snapshot.paramMap.get('id');
		// this._campus$ = this._route.paramMap.pipe(
		// 	switchMap(params => {
		// 		this.selectedId = +params.get('id');
		// 		return this._service.getCampus();
		// 	})
		// );
		this._campus$ = this._service.getCampi(Number(id));
	}

	gotoCampus() {
		this.router.navigate(['/campus']);
	}
}
