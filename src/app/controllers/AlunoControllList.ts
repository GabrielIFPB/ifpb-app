import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../services/Aluno.service';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-list-aluno',
    templateUrl: '../views/aluno-lista.html',
    styleUrls: ['../css/lista-aluno.css']
})
export class AlunoControllList implements OnInit {

    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    private _alunos: Aluno[];

    constructor(private _service: AlunoService) { }

    ngOnInit() { }

    getAlunos(): void {
        // this._service.getAlunos()
        //     .subscribe(result => this._alunos = result);
    }

    
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];