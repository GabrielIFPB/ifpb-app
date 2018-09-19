import { DiarefeicaoRoutingModule } from './diarefeicao-routing.module';

describe('DiarefeicaoRoutingModule', () => {
  let diarefeicaoRoutingModule: DiarefeicaoRoutingModule;

  beforeEach(() => {
    diarefeicaoRoutingModule = new DiarefeicaoRoutingModule();
  });

  it('should create an instance', () => {
    expect(diarefeicaoRoutingModule).toBeTruthy();
  });
});
