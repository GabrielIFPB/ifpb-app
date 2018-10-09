import { DiaRefeicaoModule } from './diarefeicao.module';

describe('DiarefeicaoModule', () => {
  let diarefeicaoModule: DiaRefeicaoModule;

  beforeEach(() => {
    diarefeicaoModule = new DiaRefeicaoModule();
  });

  it('should create an instance', () => {
    expect(diarefeicaoModule).toBeTruthy();
  });
});
