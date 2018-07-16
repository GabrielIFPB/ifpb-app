import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Campus } from './Campus';

@Component({
	selector: 'app-campus',
	templateUrl: './campus.component.html',
	styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

	private _campus: Campus[];

	displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'edit', 'delete'];
  	dataSource: MatTableDataSource<UserData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private dialog: MatDialog) {
		// Create 100 users
		const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(users);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		console.log(new Date());
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) { this.dataSource.paginator.firstPage(); }
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(ModalComponent, {
			width: '400px',
			height: '320px',
			data: {}
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		//   this.animal = result;
		});
	}
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
	'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
	'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
	'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
	'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
	'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

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

@Component({
	selector: 'app-dialog',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	private _ativo: boolean = null;
	private _cidade: string = '';
	private _sigla: string = '';
	private _campus: Campus;

	constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: UserData) { }

	save(): boolean {
		
		return null;
	}

	close(): void {
		this.dialogRef.close();
	}
}
