import { Component, OnInit } from '@angular/core';
import { Doctor } from '../defineclasses';
import { CountDoctorsService } from '../countdoctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctorsArray: Doctor[] = [
    { name: 'd1', specialization: 'spec1' },
    { name: 'd2', specialization: 'spec1' },
    { name: 'd3', specialization: 'spec3' },
    { name: 'd4', specialization: 'spec2' },
    { name: 'd5', specialization: 'spec1' },
    { name: 'd6', specialization: 'spec3' },
    { name: 'd7', specialization: 'spec2' },
    { name: 'd8', specialization: 'spec2' },
    { name: 'd9', specialization: 'spec3' }
  ];
  constructor(private doctorService: CountDoctorsService) {}

  ngOnInit() {
    this.doctorService.assignDoctors(this.doctorsArray);
  }

  // getDoctors(): Doctor[] {
  //   return this.doctorsArray;
  // }
}
