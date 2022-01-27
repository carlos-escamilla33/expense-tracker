
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  
  usersTable: FormGroup;
  control: FormArray;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.usersTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addUser();
  }

  ngAfterOnInit() {
    this.control = this.usersTable.get("tableRows") as FormArray;
  }

  initializeForm(): FormGroup {
    return this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      expenses: [`$${0}`],
      isEditable: [true]
    });
  }

  addUser() {
    const control = this.usersTable.get("tableRows") as FormArray;
    control.push(this.initializeForm());
  }

  deleteUser(index: number) {
    const control =  this.usersTable.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  editUser(group: FormGroup) {
    group.get("isEditable").setValue(true);
  }

  userAdded(group: FormGroup) {
    group.get('isEditable').setValue(false);
    this.dataService.addData(group);
  }

  get getFormControls() {
    const control = this.usersTable.get('tableRows') as FormArray;
    return control;
  }

}
