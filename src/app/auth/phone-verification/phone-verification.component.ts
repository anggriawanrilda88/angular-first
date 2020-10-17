import { AuthService } from './../../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {
  phone = '';
  code = '';

  products = [];
  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
  }

  SendOtp(type) {
    this.dataService.PhoneVerificationReq(this.phone, type).subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }

}
