import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-membergrid',
  templateUrl: './membergrid.component.html',
  styleUrls: ['./membergrid.component.css']
})
export class MembergridComponent implements OnInit {
  member: any;
  p: number = 1;
  constructor(private memberService: MembersService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMember();
  }

  getAllMember() {
    this.memberService.getMembers().subscribe(
      (res: any) => {
        this.member = res;
        console.log("member", this.member);
      }
    )
  }
}

