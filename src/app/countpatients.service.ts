import { Injectable } from '@angular/core';
import { Patient } from './defineclasses';
import { PatientsComponent } from './patients/patients.component';

@Injectable({
  providedIn: 'root'
})
export class CountPatientsService {
  localPatientsArray: Patient[] = [];

  // constructor(private patients: PatientsComponent) {
  //   this.localPatientsArray = this.patients.patientsArray;
  // }

  assignPatients(x: Patient[]) {
    this.localPatientsArray = x;
  }

  countPatients(): number {
    const numPatients = this.localPatientsArray.length;
    console.log('numPatients:' + numPatients);
    return numPatients;
  }
}
