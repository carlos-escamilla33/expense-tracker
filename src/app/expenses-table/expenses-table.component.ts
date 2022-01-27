import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit {


  expensesTable: FormGroup;
  control: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.expensesTable = this.fb.group({
      tableRows: this.fb.array([])
    });
  }

  agAfterOnInit() {
    this.control = this.expensesTable.get("tableRows") as FormArray;
  }

  initializeForm() {
    return this.fb.group({
      // user: need information from other component,
      category: []
    })
  }

}
