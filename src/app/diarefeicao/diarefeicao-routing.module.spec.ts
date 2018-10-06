import { DiaRefeicaoRoutingModule } from './diarefeicao-routing.module';

describe('DiarefeicaoRoutingModule', () => {
  let diarefeicaoRoutingModule: DiaRefeicaoRoutingModule;

  beforeEach(() => {
    diarefeicaoRoutingModule = new DiaRefeicaoRoutingModule();
  });

  it('should create an instance', () => {
    expect(diarefeicaoRoutingModule).toBeTruthy();
  });
});
