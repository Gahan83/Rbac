import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuList } from '../../interfaces/MenuList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [RouterLink, RouterOutlet],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //1st approach:
  //  menuItems:any={
  //   Customer:[
  //     {path:'my-application',title:'My Applications'},
  //     {path:'approved-application',title:'Approved Applications'},
  //   ],
  //   BankEmployee:[
  //     {path:'loan-application',title:'Loan Applications'},
  //     {path:'change-password',title:'Change Password'},
  //     {path:'approvals',title:'Approvals'},
  //     {path:'customers',title:'Customers'},
  //   ]
  //  }

  //2nd approach:
  menuItems: MenuList[] = [
    { path: 'my-application', title: 'My Applications',roles:['Customer'] },
    { path: 'approved-application', title: 'Approved Applications', roles:['Customer']},
    { path: 'loan-application', title: 'Loan Applications', roles:['BankEmployee'] },
    { path: 'change-password', title: 'Change Password', roles:['BankEmployee'] },
    { path: 'approvals', title: 'Approvals', roles:['BankEmployee'] },
    { path: 'customers', title: 'Customers', roles:['BankEmployee'] },
    { path: 'dashboard', title: 'Dashboard', roles:['Customer','BankEmployee'] },
  ];
  loggedMenuItems: any[] = [];

  router = inject(Router);
  constructor() {}

  ngOnInit() {
    const logData = localStorage.getItem('userApp');
    if (logData) {
      const userData = JSON.parse(logData);
      //this.loggedMenuItems = this.menuItems[userData.role];
      this.loggedMenuItems = this.menuItems.filter((item) => item.roles?.includes(userData.role));
    }
  }

  onLogOff() {
    this.router.navigateByUrl('login');
  }
}
