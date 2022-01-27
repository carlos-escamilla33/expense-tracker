
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  
  form = this.fb.group({
    users: this.fb.array([])
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get users() {
    return this.form.controls["users"] as FormArray;
  }

  addUser() {
    const userForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    })

    this.users.push(userForm);
  }

  deleteUser(userIdx: number) {
    this.users.removeAt(userIdx);
  }

}
