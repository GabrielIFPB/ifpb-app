import { FuncionarioRoutingModule } from './funcionario-routing.module';

describe('FuncionarioRoutingModule', () => {
  let funcionarioRoutingModule: FuncionarioRoutingModule;

  beforeEach(() => {
    funcionarioRoutingModule = new FuncionarioRoutingModule();
  });

  it('should create an instance', () => {
    expect(funcionarioRoutingModule).toBeTruthy();
  });
});
