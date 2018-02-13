import { Injectable } from '@angular/core';

// Service to control data
@Injectable()
export class LangService {

  valueLang;
  arrayLangs = ["es", "en"];

  constructor() {
    this.valueLang = 'es';
  }

  setValue(val: string){
    this.valueLang = val;
  }

  getValue(){
    return this.valueLang;
  }

  getArray(){
    return this.arrayLangs;
  }

}
