import { Component, OnInit } from '@angular/core';
import { SumCountService } from './sumcount.service';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.total = this.serviceObj.sumService();
    }, 0);
    // this.total = this.serviceObj.sumService();
  }
  total: number;

  constructor(private serviceObj: SumCountService) {}

  clickEvent() {}
}
