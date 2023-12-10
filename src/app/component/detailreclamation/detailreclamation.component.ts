import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-detailreclamation',
  templateUrl: './detailreclamation.component.html',
  styleUrls: ['./detailreclamation.component.css']
})
export class DetailreclamationComponent implements OnInit {
  message:any;
  id = this.activateroot.snapshot.params['id']
  constructor( private reclamationService: ReclamationService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneMessage();
  }
  getOneMessage() {
    this.reclamationService.getoneMessage(this.id).subscribe(
      (res: any) => {
        this.message = res;
        console.log("message", this.message);
      }
    )
  }


}
