import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER = 'http://192.168.1.222:7001';

  constructor(private httpClient: HttpClient) { }

  // PhoneVerificationReq api for get data user
  public PhoneVerification(phone: string, type: string): any {
    return this.httpClient.post(this.REST_API_SERVER + '/phone-verification', '{"type":"' + type + '", "phone":"' + phone + '"}');
  }
  // PhoneVerificationReq api for get data user
  public OtpVerification(phone: string, otp: string, deviceID: string): any {
    const requestData = '{"phone":"' + phone + '", "otp":"' + otp + '", "device_id":"' + deviceID + '"}';
    return this.httpClient.post(this.REST_API_SERVER + '/otp-verification', requestData);
  }
}