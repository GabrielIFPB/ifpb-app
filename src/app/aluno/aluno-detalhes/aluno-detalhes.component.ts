import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno';
import { Campus } from '../../campus/campus'
import { Curso } from '../../curso/curso';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  private _expression: string = `[A-Za-z '-çÂãÕõáéíóúâêîôû]*`;
	private _exprNumber: string = `[0-9]*`;
	private _exprcpf: string = `[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}`;
	private _aluno: Aluno;
	private _error: any;
	private _campus: Campus[];
	private _cursos: Curso[];

  constructor() { }

  ngOnInit() {
  }

}
