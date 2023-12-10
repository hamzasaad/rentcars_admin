import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  empty: boolean = true
  connect: boolean = false
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.check()
  }
  
 // checkEmpty() {
 //   if (localStorage.getItem("userconnect") === null) { this.empty = true; }
 //   this.empty=true
 //   return this.empty
 // }
 check() {
   if (this.state == 0) {
     this.connect = true
     this.empty=false
   }
   console.log('connect', this.connect)
 }
 onLogout() {
   localStorage.clear()
   this.route.navigateByUrl('/')
   this.connect = false
   this.empty=true
 }

}
