import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../services/Aluno.service';

@Component({
    selector: 'app-list-aluno',
    templateUrl: '../views/aluno-lista.html',
    styleUrls: ['../css/lista-aluno.css']
})
export class AlunoControllList implements OnInit {

    private _alunos: Aluno[];

    constructor(private _service: AlunoService) { }

    ngOnInit() { }

    getAlunos(): void {
        // this._service.getAlunos()
        //     .subscribe(result => this._alunos = result);
    }
}