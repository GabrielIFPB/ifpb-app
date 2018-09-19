import { DiarefeicaoModule } from './diarefeicao.module';

describe('DiarefeicaoModule', () => {
  let diarefeicaoModule: DiarefeicaoModule;

  beforeEach(() => {
    diarefeicaoModule = new DiarefeicaoModule();
  });

  it('should create an instance', () => {
    expect(diarefeicaoModule).toBeTruthy();
  });
});
