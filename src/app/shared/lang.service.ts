import { Injectable } from '@angular/core';

@Injectable()
export class LangService {

  valueLang;
  arrayLangs = ["es", "en"];

  constructor() {
    this.valueLang = "es";
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
