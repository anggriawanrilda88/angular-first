import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { faFilm, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})

export class OtpVerificationComponent implements OnInit {
  phone = '';
  otp = '';
  faPhone = faPhone;
  closeResult = '';
  params = [];
  errorMessage = 'Terjadi Kesalahan Pengecekan';

  constructor(
    private cookieService: CookieService,
    private dataService: AuthService,
    private modalService: NgbModal,
    private router: Router) {

    if (this.cookieService.get('phone') === undefined) {
      this.router.navigate(['/']);
    }
    this.phone = this.cookieService.get('phone');
  }

  ngOnInit(): void {
  }

  OtpVerification(content): void {
    console.log(this.phone);
    this.dataService.OtpVerification(this.phone, this.otp, this.makeid(25)).subscribe((data: any) => {
      // this.router.navigate(['otp-verification']);
      console.log(data);
    }, (err) => {
      this.errorMessage = err.error.Message;
      this.open(content);
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

  // open modal function
  open(content): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  makeid(length): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

}
