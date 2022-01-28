import { ExpenseCategory } from "./expense.model";

export interface CampanyExpense {
    id: string;
    category: ExpenseCategory,
    totalExpenses: number
}