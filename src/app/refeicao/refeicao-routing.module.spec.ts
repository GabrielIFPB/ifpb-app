import { RefeicaoRoutingModule } from './refeicao-routing.module';

describe('RefeicaoRoutingModule', () => {
  let refeicaoRoutingModule: RefeicaoRoutingModule;

  beforeEach(() => {
    refeicaoRoutingModule = new RefeicaoRoutingModule();
  });

  it('should create an instance', () => {
    expect(refeicaoRoutingModule).toBeTruthy();
  });
});
