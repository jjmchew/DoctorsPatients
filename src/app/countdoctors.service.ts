import { Injectable } from '@angular/core';
import { Doctor } from './defineclasses';
import { DoctorsComponent } from './doctors/doctors.component';

@Injectable({
  providedIn: 'root'
})
export class CountDoctorsService {
  localDoctorsArray: Doctor[] = [];

  // constructor(private doctors: DoctorsComponent) {
  //   this.localDoctorsArray = this.doctors.getDoctors();
  // }

  assignDoctors(x: Doctor[]) {
    this.localDoctorsArray = x;
    // console.log(this.localDoctorsArray);
  }

  countDoctors(): number {
    const numDoctors = this.localDoctorsArray.length;
    console.log('numDoctors: ' + numDoctors);
    return numDoctors;
  }
}
