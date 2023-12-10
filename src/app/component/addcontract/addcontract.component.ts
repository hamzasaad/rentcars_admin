import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css']
})
export class AddcontractComponent implements OnInit {
  id = this.activateroot.snapshot.params['id']
  demande:any;
  constructor(private formBulder: FormBuilder, private contractService: ContractService, private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneDemande()
  }
 
  getOneDemande(){
    this.contractService.getOneDemande(this.id).subscribe(
      (res: any) => {
        this.demande = res;
        console.log("demande", this.demande);
      }
    )
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Contrat.pdf');
      this.gotoProductDetails('/home/upload',this.id)
    });
  }

  public gotoProductDetails(url:any, id:any) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
}
}
