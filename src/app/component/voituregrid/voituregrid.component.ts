import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voituregrid',
  templateUrl: './voituregrid.component.html',
  styleUrls: ['./voituregrid.component.css']
})
export class VoituregridComponent implements OnInit {
  voitures: any;
  p: number = 1;
  constructor(private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
    this.getAllVoitures()
  }

  getAllVoitures() {
    this.voitureService.getVoitures().subscribe(
      (res: any) => {
        this.voitures = res;
        console.log("voitures", this.voitures);
      }
    )
  }
}
