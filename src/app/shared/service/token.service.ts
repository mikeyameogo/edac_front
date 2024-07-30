import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 
import { environment } from 'src/environments/environment';

const ACCESS_TOKEN = 'auth-token';
const REFRESH_TOKEN = 'refresh_token';
const CODE_VERIFIER = 'code_verifier';
const USER_KEY = 'auth_user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setTokens(access_token: string, refresh_token: string): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
  }
  // public saveToken(token: string): void {
  //   window.sessionStorage.removeItem(ACCESS_TOKEN);
  //   window.sessionStorage.setItem(ACCESS_TOKEN, token);
  // }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  clear(): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  isLogged(): boolean {
    return localStorage.getItem(ACCESS_TOKEN) != null;
  }

  isAdmin(): boolean {
    if(!this.isLogged()) {
      return false;
    }
    const token = this.getAccessToken();
    const payload = token!.split(".")[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if (roles.indexOf('ROLE_ADMIN') < 0) {
      return false;
    }
    return true;
  }

  setVerifier(code_verifier: string): void {
    if(localStorage.getItem(CODE_VERIFIER)) {
      this.deleteVerifier();
    }
    console.warn('Code verifier');
    const encrypted = CryptoJS.AES.encrypt(code_verifier, environment.secret_pkce);
    console.warn('Code verifier', encrypted.key);
    localStorage.setItem(CODE_VERIFIER, encrypted.toString());
  }

  getVerifier(): string {
    const encrypted = localStorage.getItem(CODE_VERIFIER);
    console.warn('Code verifier', encrypted);
    const decrypted = CryptoJS.AES.decrypt(encrypted!, environment.secret_pkce).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
  
  deleteVerifier(): void {
    localStorage.removeItem(CODE_VERIFIER);
  }


  // ================================== NEW ===============================================

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.setItem(ACCESS_TOKEN, token);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) {
      console.log("======= get user saved json========= : ", JSON.parse(user));
      console.log("======= get user saved ========= : ", user);
      return JSON.parse(user);
    }
    return {};
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(ACCESS_TOKEN);
  }
  
}
