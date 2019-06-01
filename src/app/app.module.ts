import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Doctor } from './defineclasses';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { SumCountService } from './sumcount.service';
import { CountDoctorsService } from './countdoctors.service';
import { CountPatientsService } from './countpatients.service';

@NgModule({
  declarations: [AppComponent, DoctorsComponent, PatientsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
