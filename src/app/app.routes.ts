import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MyApplicationsComponent } from './pages/my-applications/my-applications.component';
import { LoanApplicationsComponent } from './pages/loan-applications/loan-applications.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ApprovalsComponent } from './pages/approvals/approvals.component';
import { ApprovedApplicationsComponent } from './pages/approved-applications/approved-applications.component';
import { CustomersComponent } from './pages/customers/customers.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'my-application',
        component: MyApplicationsComponent,
      },
      {
        path: 'loan-application',
        component: LoanApplicationsComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'approvals',
        component: ApprovalsComponent,
      },
      {
        path: 'approved-application',
        component: ApprovedApplicationsComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
    ],
  },
];
