import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  name = ""
  image = ""
  address = ""
  phone = ""
  dateofappointment = ""
  doctorName = ""
  readValues = () => {
    let data: any = {
      "image": this.image,
      "name": this.name,
      "address": this.address,
      "phone": this.phone,
      "dateofappointment": this.dateofappointment,
      "doctorName": this.doctorName
    }
    console.log(data)
  }
}
