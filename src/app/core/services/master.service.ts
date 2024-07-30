import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private httpClient = inject(HttpClient);

  getAirports() {
    return this.httpClient.get('http://localhost:3000/airports');
  }

  saveAirport(airport: any) {
    return this.httpClient.post('http://localhost:3000/airports', airport);
  }

  getCities() {
    return this.httpClient.get('http://localhost:3000/cities');
  }

  getFlights() {
    return this.httpClient.get('http://localhost:3000/flights');
  }

  createFlights(flights: any) {
    return this.httpClient.post('http://localhost:3000/flights', flights);
  }

  searchFlight(departureAirportId: number, arrivalAirportId: number, travelDate: string) {
    return this.httpClient.get(`http://localhost:3000/flights?departureAirportId=${departureAirportId}&arrivalAirportId=${arrivalAirportId}&travelDate=${travelDate}`);
  }

  register(flights: any) {
    return this.httpClient.post('http://localhost:3000/flight-booking/register', flights);
  }

  login(login: any) {
    return this.httpClient.post('http://localhost:3000/flight-booking/login', login);
  }

  bookTicket(flights: any) {
    return this.httpClient.post('http://localhost:3000/flight-booking/book', flights);
  }
}