import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfficherPage } from './afficher.page';

describe('AfficherPage', () => {
  let component: AfficherPage;
  let fixture: ComponentFixture<AfficherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfficherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
