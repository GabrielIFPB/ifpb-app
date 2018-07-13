import { CampusRoutingModule } from './campus-routing.module';

describe('CampusRoutingModule', () => {
  let campusRoutingModule: CampusRoutingModule;

  beforeEach(() => {
    campusRoutingModule = new CampusRoutingModule();
  });

  it('should create an instance', () => {
    expect(campusRoutingModule).toBeTruthy();
  });
});
