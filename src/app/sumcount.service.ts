import { Injectable } from '@angular/core';
import { CountPatientsService } from './countpatients.service';
import { CountDoctorsService } from './countdoctors.service';

@Injectable({
  providedIn: 'root'
})
export class SumCountService {
  total: number;
  numDoctors: number;
  numPatients: number;
  constructor(
    private doctorServiceObj: CountDoctorsService,
    private patientServiceObj: CountPatientsService
  ) {}
  sumService() {
    this.numDoctors = this.doctorServiceObj.countDoctors();
    this.numPatients = this.patientServiceObj.countPatients();
    this.total = this.numDoctors + this.numPatients;
    return this.total;
  }
}
