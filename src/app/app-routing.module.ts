import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { FlightsComponent } from './pages/admin/flights/flights.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { CityComponent } from './pages/admin/city/city.component';
import { BookingComponent } from './pages/admin/booking/booking.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { WebsiteLandingComponent } from './pages/website/website-landing/website-landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '', component: WebsiteLandingComponent, children: [
    { path: 'search', component: SearchComponent, title: 'Search Flights' },
    { path: 'book-flight', component: BookFlightComponent, title: 'Book Flight' },
    { path: 'my-bookings', component: MyBookingsComponent, title: 'My Bookings' }  
  ]
},
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '', component: LayoutComponent, children: [
    { path: 'airport', component: AirportComponent},
    { path: 'city', component: CityComponent},
    { path: 'bookings', component: BookingComponent},
    { path: 'flights', component: FlightsComponent},
    { path: 'new-flight', component: NewFlightComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
