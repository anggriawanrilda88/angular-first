import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { faFilm, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {
  phone = '';
  code = '';
  closeResult = '';
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  errorMessage = 'Terjadi Kesalahan Pengecekan';

  constructor(
    private dataService: AuthService,
    private modalService: NgbModal,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  // open modal function
  open(content): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  SendOtp(type, content): void {
    this.dataService.PhoneVerification(this.phone, type).subscribe((data: any) => {
      this.cookieService.put('phone', this.phone);
      this.router.navigateByUrl('otp-verification');
      // console.log(data)
    }, (err) => {
      this.errorMessage = err.error.Message;
      this.open(content);
    });
  }

}
