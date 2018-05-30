import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AlunoControllList } from '../controllers/AlunoControllList';
import { AlunoService } from '../services/Aluno.service';
import { AlunoRoutingModule } from '../routes/aluno-routing.module';
import { MaterialAlunoModule } from '../material/Material.aluno';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AlunoRoutingModule,
		MaterialAlunoModule
	],
	declarations: [
		AlunoControllList
	],
	providers: [
		AlunoService
	]
})
export class AlunoModule {}