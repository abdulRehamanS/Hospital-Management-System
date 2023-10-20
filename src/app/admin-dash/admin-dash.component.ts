import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css'],
})
export class AdminDashComponent implements OnInit {
  searchText!: string;
  patients!: Patient[];

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients() {
    this.patientService.getPatientslist().subscribe((data) => {
      this.patients = data;
    });
  }

  updatePatient(id: number) {
    this.router.navigate(['updatepatient', id]);
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
  }
}
