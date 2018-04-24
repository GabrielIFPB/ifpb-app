import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CampusComponent } from './campus/campus.component';

import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './aluno/aluno.service';

import { CursoComponent } from './curso/curso.component';
import { PeriodoComponent } from './periodo/periodo.component';
import { TurmaComponent } from './turma/turma.component';
import { TurnoComponent } from './turno/turno.component';
import { ArquivoComponent } from './arquivo/arquivo.component';
import { BloqueioComponent } from './bloqueio/bloqueio.component';
import { DiarefeicaoComponent } from './diarefeicao/diarefeicao.component';
import { MotivoComponent } from './motivo/motivo.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ConfirmapretensaodiaComponent } from './confirmapretensaodia/confirmapretensaodia.component';
import { ConfirmarefeicaodiaComponent } from './confirmarefeicaodia/confirmarefeicaodia.component';
import { NivelComponent } from './nivel/nivel.component';
import { DiaComponent } from './dia/dia.component';
import { EditalComponent } from './edital/edital.component';
import { EventoComponent } from './evento/evento.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaparefeicaoComponent } from './maparefeicao/maparefeicao.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { PeriodopretensaorefeicaoComponent } from './periodopretensaorefeicao/periodopretensaorefeicao.component';
import { PeriodorefeicaorealizadaComponent } from './periodorefeicaorealizada/periodorefeicaorealizada.component';
import { PessoaacessoComponent } from './pessoaacesso/pessoaacesso.component';
import { PretensaorefeicaoComponent } from './pretensaorefeicao/pretensaorefeicao.component';
import { RefeicaoComponent } from './refeicao/refeicao.component';

@NgModule({
  declarations: [
	AppComponent,
	PessoaComponent,
	CampusComponent,
	AlunoComponent,
	CursoComponent,
	PeriodoComponent,
	TurmaComponent,
	TurnoComponent,
	ArquivoComponent,
	BloqueioComponent,
	DiarefeicaoComponent,
	MotivoComponent,
	FuncionarioComponent,
	ConfirmapretensaodiaComponent,
	ConfirmarefeicaodiaComponent,
	NivelComponent,
	DiaComponent,
	EditalComponent,
	EventoComponent,
	ErrorComponent,
	LoginComponent,
	LogoutComponent,
	MaparefeicaoComponent,
	MatriculaComponent,
	PeriodopretensaorefeicaoComponent,
	PeriodorefeicaorealizadaComponent,
	PessoaacessoComponent,
	PretensaorefeicaoComponent,
	RefeicaoComponent,
  ],
  imports: [
	BrowserModule
  ],
  providers: [
  	AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
