import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Vehicle } from '../icommon';
import { VehicleService } from '../vehicle.service';
import { MessageService } from '../message.service';
import * as XLSX from 'xlsx';

declare var require: any;
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css']
})
export class ExporterComponent implements OnInit {

  selectedVehicle?: Vehicle;
  exporter_desc = 'Get your favourite vehicle details in a single click. Enter the VIN & Click on the get VIN details button. Also you can export vehicle info in just one Click. You have the option to Export the data in excel or pdf formats.';
  vehicleDetail : any;
  VIN:string ='';
  vehicleJsonObj: Array<Vehicle[]> = [];
  vehicles: Vehicle[] = [];  
  fileName= 'VinDetails.xlsx';
  constructor(private vehicleService: VehicleService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  

  
  onSelect(vehicleDetail: Vehicle): void {
    this.selectedVehicle = vehicleDetail;
    this.messageService.add(`Exporter Component: Selected hero id=${vehicleDetail.id}`);
  }

  getVehicleDetails(): any {
   return this.vehicleService.getVehicles(this.VIN)
    .subscribe(vehicles => 
      {
        this.vehicleDetail  = vehicles;
      });      
  }

  exporttoexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, this.VIN);
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }  
  public exporttopdf() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

}
