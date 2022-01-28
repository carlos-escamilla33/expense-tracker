import {Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs";

// import { CompanyExpense } from 'src/app/models/company-expense.model';
import { Expense } from 'src/app/models/expense.model';
import { User } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
      constructor() {

      }
  }

//   the goal was to create instances in there or something of the sort
// I tried to find a way to connect the data to the other tables I know that this is a way.