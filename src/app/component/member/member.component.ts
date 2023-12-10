import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private memberService: MembersService, private router: Router) { }
  member: any;
  p: number = 1;
  ngOnInit(): void {
    this.getAllMembers()
  }

  getAllMembers() {
    this.memberService.getMembers().subscribe(
      (res: any) => {
        this.member = res;
        console.log("member", this.member);
      }
    )
  }

  deleteMember(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.memberService.deleteMember(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllMembers()
          })

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

      }

    }

    )

  }
}
