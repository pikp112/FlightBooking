import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../../core/services/master.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent implements OnInit{
  private masterService = inject(MasterService);
  flights: any = [];

  ngOnInit(): void {
    
  }

  loadFlights() {
    this.masterService.getFlights().subscribe((res: any) => {
      this.flights = res.data;
    });
  }
}
