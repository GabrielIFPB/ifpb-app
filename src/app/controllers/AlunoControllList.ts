import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../services/Aluno.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-list-aluno',
	templateUrl: '../views/aluno-lista.html',
	styleUrls: ['../css/lista-aluno.css']
})
export class AlunoControllList implements OnInit {

	private _alunos: Aluno[];

	displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'edit', 'delete'];
  	dataSource: MatTableDataSource<UserData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: AlunoService) { 
		// Create 100 users
		const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	getAlunos(): void {
		// this._service.getAlunos()
		//     .subscribe(result => this._alunos = result);
	}
	
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) { this.dataSource.paginator.firstPage(); }
	}
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
	const name =
		NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
		NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  
	return {
	  id: id.toString(),
	  name: name,
	  progress: Math.round(Math.random() * 100).toString(),
	  color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
	};
}

export interface UserData {
	id: string;
	name: string;
	progress: string;
	color: string;
}
