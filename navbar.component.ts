import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  siteTitle = 'Travel planner'
  displayToggle: boolean = false;

  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(MyModalComponent);
  }

  changeDisplay() { 
    this.displayToggle = !this.displayToggle
  }
}

