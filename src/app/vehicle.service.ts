import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Vehicle } from './icommon';
import { MessageService } from './message.service';
import { Vehicles } from './mock-vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private url = 'http://ec2-34-235-150-224.compute-1.amazonaws.com/vehicle-stories';
  api_key = '233ba83ab2d3fb5160bd941f461f64ae';


  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

 
  //getHeroes(): Observable<Vehicle[]> {
   getVehicles(vin:string): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders ({
          'Content-Type':  'application/json',
          'api_key': this.api_key
        })
      };

    if(vin =='')
    {
      vin = "1G1ZD5E09CF251160";
    }
   
    let  requestBody = {"vin": vin};
    let vehicles = this.httpClient.post(this.url,requestBody, httpOptions);
    //const heroes = of(Vehicles);
    this.messageService.add('VehicleService: fetched Vehicle');
    return vehicles;
  }
}


// async getAsyncData() {
//   this.asyncResult = await this.httpClient.get<Employee>(this.url).toPromise();
//   console.log('No issues, I will wait until promise is resolved..');
// }

