import { AlunoRoutingModule } from './aluno-routing.module';

describe('AlunoRoutingModule', () => {
  let alunoRoutingModule: AlunoRoutingModule;

  beforeEach(() => {
    alunoRoutingModule = new AlunoRoutingModule();
  });

  it('should create an instance', () => {
    expect(alunoRoutingModule).toBeTruthy();
  });
});
