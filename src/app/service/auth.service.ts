import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER = 'http://192.168.1.222:7001';

  constructor(private httpClient: HttpClient) { }
  public PhoneVerificationReq(phone: string, type: string) {
    // return this.httpClient.get(this.REST_API_SERVER + 'phone-verification');
    return this.httpClient.post(this.REST_API_SERVER + '/phone-verification', '{"type":"' + type + '", "phone":"' + phone + '"}');
  }
}