import { CampusModule } from './campus.module';

describe('CampusModule', () => {
  let campusModule: CampusModule;

  beforeEach(() => {
    campusModule = new CampusModule();
  });

  it('should create an instance', () => {
    expect(campusModule).toBeTruthy();
  });
});
