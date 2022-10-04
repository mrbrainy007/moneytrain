import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../icommon';
import { VehicleService } from '../vehicle.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-comparer',
  templateUrl: './comparer.component.html',
  styleUrls: ['./comparer.component.css']
})
export class ComparerComponent implements OnInit {

  
  vehicleDetail1 : any;
  vehicleDetail2 : any;
  VIN1:string ='';
  VIN2:string ='';


  vehicles: Vehicle[] = [];
  comparer_desc = 'Compare different vehicles in just one click...! Just Add the vehicles which you want to compare and click the compare Button.';

  constructor(private vehicleService: VehicleService, private messageService: MessageService) { }

  fileContent: any = '';
  
  ngOnInit(): void {
  }
  // onSelect(vehicleDetail: Vehicle): void {
  //   this.selectedVehicle = vehicleDetail;
  //   this.messageService.add(`Exporter Component: Selected hero id=${vehicleDetail.id}`);
  // }

  getBothVehicleDetails(): any {
     this.vehicleService.getVehicles(this.VIN1).subscribe(vehicles => {
      this.vehicleDetail1  = vehicles;
    });
    return this.vehicleService.getVehicles(this.VIN2).subscribe(vehicles => {
      this.vehicleDetail2  = vehicles;
    });
        
   }

  // getVehicleDetails(vin : string): any {
  //  return this.vehicleService.getVehicles(vin).subscribe(vehicles => {
  //       this.vehicleDetail1  = vehicles;
  //     });      
  // }

}
