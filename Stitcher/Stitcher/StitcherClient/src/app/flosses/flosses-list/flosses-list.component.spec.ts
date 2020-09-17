import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlossesListComponent } from './flosses-list.component';

describe('FlossesListComponent', () => {
  let component: FlossesListComponent;
  let fixture: ComponentFixture<FlossesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlossesListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlossesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
