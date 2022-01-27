import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  data: FormArray[] = [];
  constructor() { }

  getData() {
    return this.data;
  }

  addData(group: FormGroup) {
    const firstName = group.get("firstName").value
    if (firstName) {
      this.data.push(firstName);
    }
  }
}
