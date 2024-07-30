import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDemande } from '../shared/model/demande.model';
import { DemandeService } from '../shared/service/demande-service.service';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadFileService} from "../shared/service/upload.service";


@Component({
  selector: 'app-dashboard-administration',
  templateUrl: './dashboard-administration.component.html',
  styleUrls: ['./dashboard-administration.component.scss']
})
export class DashboardAdministrationComponent implements OnInit {

    stackedData: any;

    stackedOptions: any;


    selectedFiles?: FileList;
    currentFile?: File;
    message = '';
    errorMsg = '';

    demandes: IDemande[]=[];
    

  constructor(private uploadService: UploadFileService,
   private demandeService: DemandeService) {

  }

  ngOnInit(): void {
    this.statGlobale()
      this.stackedData = {
          labels: ['Janvier', 'Febrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
          datasets: [{
              type: 'bar',
              label: 'Total',
              backgroundColor: '#d47575',
              data: [
                  50,
                  25,
                  12,
                  48,
                  90,
                  76,
                  42,
                  12,
                  62,
                  19,
                  21,
                  42
              ]
          }, {
              type: 'bar',
              label: 'Terminés',
              backgroundColor: '#66BB6A',
              data: [
                  21,
                  84,
                  24,
                  75,
                  37,
                  65,
                  34,
                  16,
                  5,
                  45,
                  51,
                  34
              ]
          }, {
              type: 'bar',
              label: 'En cours',
              backgroundColor: '#FFA726',
              data: [
                  41,
                  52,
                  24,
                  74,
                  23,
                  21,
                  32,
                  17,
                  32,
                  12,
                  39,
                  32
              ]
          }]
      };

      this.stackedOptions = {
          tooltips: {
              mode: 'index',
              intersect: false
          },
          responsive: true,
          scales: {
              xAxes: [{
                  stacked: true,
              }],
              yAxes: [{
                  stacked: true
              }]
          }
      };

  }

  statGlobale(): void{
    this.demandeService.statDemande().subscribe(result => {
        if (result && result.body) {
            
            this.demandes = result.body || [];

            console.log("les données", this.demandes);
        }
    });   
}

}


