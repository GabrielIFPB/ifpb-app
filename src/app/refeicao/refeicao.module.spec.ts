import { RefeicaoModule } from './refeicao.module';

describe('RefeicaoModule', () => {
  let refeicaoModule: RefeicaoModule;

  beforeEach(() => {
    refeicaoModule = new RefeicaoModule();
  });

  it('should create an instance', () => {
    expect(refeicaoModule).toBeTruthy();
  });
});
