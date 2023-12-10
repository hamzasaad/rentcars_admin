import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  formLogin: FormGroup;
  constructor(private formBulder: FormBuilder, private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    this.getFormLogin();
  }
  getFormLogin() {
    this.formLogin = this.formBulder.group({

      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    this.authentificationService.login(this.formLogin.value).subscribe(
      (res: any) => {
        console.log(res)
        if (res.user.enabled == true && res.user.role == 'ADMIN') {
          Swal.fire({
            icon: 'success',
            title: 'Welcome ',
          })
          this.router.navigateByUrl('/home')
          localStorage.setItem('userconnect', JSON.stringify(res.user))
          localStorage.setItem('token', res.access_token)
          localStorage.setItem("state", "0")
        }
        if (res.user.role != 'ADMIN') {
          Swal.fire({
            icon: 'error',
            title: 'Login Error',
            text: 'You must  be admin',
          })
         
        }
      }, (err: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: 'username or password invalid',
        })
      }
    )
  }
}
