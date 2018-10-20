import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _urlFuncio: string = 'http://localhost:3000/funcionarios';
  private _urlalunos: string = 'http://localhost:3000/alunos';
  
  constructor() { }
}
