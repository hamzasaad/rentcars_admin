import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { DemandeService } from 'src/app/services/demande.service';
import { ReclamationService } from 'src/app/services/reclamation.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  chartType = 'doughnut';

  chartDatasets = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  chartLabels = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  chartColors = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];


  
  total: any;
  demande: any;
  client: any;
  reclamation: any;
  totalPrice: any;
  constructor(private reclamationService: ReclamationService, private clientService: ClientService, private demandeService: DemandeService, private router: Router) { }


  ngOnInit(): void {
    this.getAllClient();
    this.getAllDemande();
    this.getAllMessage();

  }
  getAllMessage() {
    this.reclamationService.getReclation().subscribe(
      (res: any) => {
        this.reclamation = res;
        console.log("reclamation", this.reclamation);
      }
    )
  }
  getAllDemande() {
    this.demandeService.getDemande().subscribe(
      (res: any) => {
        this.demande = res;
        console.log("demande", this.demande);
      }
    )
  }

  getAllClient() {
    this.clientService.getclient().subscribe(
      (res: any) => {
        this.client = res;
        console.log("client", this.client);
      }
    )
  }

  gettotal() {
    let total = 0;
    this.demande.forEach((element: any) => {
      total = total + Number(element.prix_totale);

    });
    this.totalPrice = total;
    return total;
  }


  chartOptions: any = {
    responsive: true
  };

  chartClicked(event: any): void {
    console.log(event);
  }

  chartHovered(event: any): void {
    console.log(event);
  }

}
