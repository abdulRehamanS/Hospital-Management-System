import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DocterDashComponent } from './docter-dash/docter-dash.component';
import { DocterLoginComponent } from './docter-login/docter-login.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { NewsFeedbackComponent } from './news-feedback/news-feedback.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AuthenticationService } from './authentication.service';

// this is  for routings in the components
const routes: Routes = [
  { path: '', component: NewsFeedbackComponent },
  { path: 'doclogin', component: DocterLoginComponent },
  { path: 'adlogin', component: AdminLoginComponent },
  { path: 'home', component: NewsFeedbackComponent },
  {
    path: 'createpatient',
    component: CreatePatientComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'docdash',
    component: DocterDashComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updatepatient/:id',
    component: UpdatePatientComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admindash',
    component: AdminDashComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'medicinelist',
    component: MedicineListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'createmedicine',
    component: CreateMedicineComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'updatemedicine/:id',
    component: UpdateMedicineComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'appointmentlist',
    component: AppointmentListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'createappointment',
    component: CreateAppointmentComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'viewpatient/:id', component: ViewPatientComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    AdminLoginComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    CreateMedicineComponent,
    CreatePatientComponent,
    DocterDashComponent,
    DocterLoginComponent,
    MedicineListComponent,
    NewsFeedbackComponent,
    UpdateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    AppointmentComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
