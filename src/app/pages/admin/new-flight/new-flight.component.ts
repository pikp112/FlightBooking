import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../../core/services/master.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit{
  private masterService = inject(MasterService);
  airports: any = [];
  flightObject: any = {
    "id": 0,
    "flightNumber": "",
    "departureAiportId": 0,
    "departureTime": "string",
    "arrivalAirportId": 0,
    "arrivalTime": "string",
    "price": 0,
    "totalSeats": 0,
    "flightVendorId": 0,
    "travelDate": "2024-02-06T12:00:00.000Z",
  }

  constructor() {
    const localData = localStorage.getItem('flightUser');
    if (localData) {
      this.flightObject = JSON.parse(localData);
    }
   }

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports(){
    this.masterService.getAirports().subscribe((res: any) => {
      this.airports = res.data;
    });
  }

  onSaveFlight(){
    const obj = [];
    obj.push(this.flightObject);
    this.masterService.createFlights(obj).subscribe((res: any) => {
      if (res.result){
        alert('Flight created successfully');
      } else {
        alert(res.message);
      }
    });
  }

}
