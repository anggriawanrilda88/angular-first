import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { faFilm, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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

  constructor(private dataService: AuthService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }

  //* open modal function
  open(content) {
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

  SendOtp(type, content) {
    this.dataService.PhoneVerificationReq(this.phone, type).subscribe((data: any) => {
      this.router.navigate(['otp-verification']);
      // console.log(data)
    }, (err) => {
      this.errorMessage = err.error.Message;
      this.open(content);
    });
  }

}
