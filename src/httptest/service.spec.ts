import { TestBed } from "@angular/core/testing";
import { MissionsService } from "./missions.service";
import { HttpClientTestingModule } from "./httptest.module";

describe('MissionsService', () => {
  let service: MissionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MissionsService]
    });
    service = TestBed.get(MissionsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
