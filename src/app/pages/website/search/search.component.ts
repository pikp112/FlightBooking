import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../../core/services/master.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  private masterService = inject(MasterService);
  airports: any = [];
  fromAirport: number = 0;
  toAirport: number = 0;
  travelDate: string = '';
  flights: any = [];

  constructor(){}

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports(){
    this.masterService.getAirports().subscribe((res: any) => {
      this.airports = res.data;
    });
  }

  searchFlights(){
    this.masterService.searchFlight(this.fromAirport, this.toAirport, this.travelDate).subscribe((res: any) => {
      this.flights = res.data;
    });
  }

  bookTicket(){
    const model = document.getElementById('bookModel');
    if (model != null){
      model.style.display = 'block';
    }
  }
  closeModel(){
    const model = document.getElementById('bookModel');
    if (model != null){
      model.style.display = 'none';
    }
  }
}
