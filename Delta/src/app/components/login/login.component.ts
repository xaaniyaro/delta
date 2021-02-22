import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean;

  constructor(
    private router: Router
  ) { 
    this.hide = true;
  }

  ngOnInit(): void {
  }

  onClick(ruta: string){
    this.router.navigate([ruta]);
  }
}
