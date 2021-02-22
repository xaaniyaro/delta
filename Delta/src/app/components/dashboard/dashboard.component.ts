import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer,
    private router: Router
  ){
    this.matIconRegistry.addSvgIcon(
      "tasks",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/tasks_icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "pie",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/pie_icon.svg")
    ); 
    this.matIconRegistry.addSvgIcon(
      "truck",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/truck_icon.svg")
    );  
    this.matIconRegistry.addSvgIcon(
      "user",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/user_icon.svg")
    ); 
    this.matIconRegistry.addSvgIcon(
      "home",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/home_icon.svg")
    ); 
  }

  ngOnInit(): void {
    this.router.navigate(['home/welcome']);
  }

  onClick(ruta: string){
    this.router.navigate([ruta]);
  }

}
