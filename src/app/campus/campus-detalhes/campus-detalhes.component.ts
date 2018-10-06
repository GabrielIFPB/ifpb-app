import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CampusService } from '../campus.service';
import { Campus } from '../campus';

@Component({
	selector: 'app-editar.campus',
	templateUrl: './campus-detalhes.component.html',
	styleUrls: ['./campus-detalhes.component.css']
})
export class CampusDetalhesComponent implements OnInit {

	constructor(private route: ActivatedRoute, private router: Router, private _service: CampusService) { }

	ngOnInit() {
		let id = this.route.snapshot.paramMap.get('id');
		console.log(id)
		// this._campus$ = this._route.paramMap.pipe(
		// 	switchMap(params => {
		// 		this.selectedId = +params.get('id');
		// 		return this._service.getCampus();
		// 	})
		// );
	}

	gotoCampus() {
		this.router.navigate(['/campus']);
	}
}
