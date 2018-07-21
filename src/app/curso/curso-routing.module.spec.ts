import { CursoRoutingModule } from './curso-routing.module';

describe('CursoRoutingModule', () => {
  let cursoRoutingModule: CursoRoutingModule;

  beforeEach(() => {
    cursoRoutingModule = new CursoRoutingModule();
  });

  it('should create an instance', () => {
    expect(cursoRoutingModule).toBeTruthy();
  });
});
