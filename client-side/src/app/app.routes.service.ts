import { RouterModule, Route, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { ProfileComponent } from './views/profile/profile/profile.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { DashboardComponent } from './views/dashboards/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { OrderComponent } from './order/order/order.component';
import { CheckoutComponent } from './order/checkout/checkout.component';
import { DeliveryComponent } from './order/delivery/delivery.component';
import { AuthGuard } from './core/_guards';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { UserComponent } from './login/user/user.component';
// need to change to employee
import { EmployeeComponent } from './login/user/employee/employee.component';
import { CustomerComponent } from './login/user/customer/customer.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'orders', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'delivery', component: DeliveryComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'users',
    children: [
      { path: 'employee', component: EmployeeComponent },
      { path: 'customer', component: CustomerComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    children: [{ path: ':id', component: ProfileComponent }],
    canActivate: [AuthGuard]
  },
  {
    path: 'modals',
    children: [{ path: 'modal', component: ModalsComponent }]
  },
  {
    path: 'tables',
    children: [{ path: 'table', component: BasicTableComponent }]
  },
  {
    path: 'inventory', component: InventoryComponent,
    children: [{ path: ':id', component: EditInventoryComponent }],
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
