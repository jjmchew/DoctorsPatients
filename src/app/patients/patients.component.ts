import { Component, OnInit } from '@angular/core';
import { Patient } from '../defineclasses';
import { CountPatientsService } from '../countpatients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientsArray: Patient[] = [
    { name: 'p1', illness: 'illness3' },
    { name: 'p2', illness: 'illness1' },
    { name: 'p3', illness: 'illness2' },
    { name: 'p4', illness: 'illness2' },
    { name: 'p5', illness: 'illness1' },
    { name: 'p6', illness: 'illness3' },
    { name: 'p7', illness: 'illness3' },
    { name: 'p8', illness: 'illness2' },
    { name: 'p9', illness: 'illness1' },
    { name: 'p10', illness: 'illness2' }
  ];

  constructor(private patientService: CountPatientsService) {}

  ngOnInit() {
    this.patientService.assignPatients(this.patientsArray);
  }
  // printPatientArray() {
  //   console.log(this.patientsArray);
  // }
}
