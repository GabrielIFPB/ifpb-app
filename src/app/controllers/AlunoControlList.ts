import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
    selector: 'app-list-aluno',
    templateUrl: '../views/aluno-list.html',
    styleUrls: ['../css/lista-aluno.css']
})
export class AlunoControlList implements OnInit {

    private _alunos: Aluno[];

    constructor(private _service: AlunoService) { }

    ngOnInit() { }

    getAlunos(): void {
        this._service.getAlunos()
            .subscribe(result => this._alunos = result);
    }
}