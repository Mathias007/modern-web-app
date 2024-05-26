import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardComponent, MenuComponent, RouterTestingModule],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    authService.login = jasmine.createSpy('login').and.callFake(() => {
      component.isLoggedIn = true;
    });
    authService.logout = jasmine.createSpy('logout').and.callFake(() => {
      component.isLoggedIn = false;
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the menu after logging in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const menu = fixture.debugElement.nativeElement.querySelector('app-menu');
    expect(menu).toBeTruthy();
  });

  it('should hide the menu after logging out', () => {
    component.logout();
    fixture.detectChanges();
    const menu = fixture.debugElement.nativeElement.querySelector('app-menu');
    expect(menu).toBeFalsy();
  });
});

