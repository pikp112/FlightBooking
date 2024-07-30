import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{
  private httpclient = inject(HttpClient);
  cities: any = [];

  ngOnInit(): void {
    this.getCities();
  }

  getCities(){
    this.httpclient.get('http://localhost:3000/cities').subscribe((res: any) => {
      this.cities = res.data;
      this.cities.array.forEach(element => {
        element.isEdit = false;
      });
    });
  }

  bulkUpdateCity() {
    this.httpclient.post('http://localhost:3000/cities', this.cities).subscribe((res: any) => {
      console.log(res);
      if (res.result){
        alert('Data updated successfully');
      } else {
        alert(res.message);
      }
    });
  }

  addNew() {
    const object = {
      cityId: 0,
      cityName: ''
    };

    this.cities.unshift(object);
  }
}
