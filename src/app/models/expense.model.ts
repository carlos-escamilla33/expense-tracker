export enum ExpenseCategory {
    Food = "Food",
    Travel = "Travel",
    Supplies = "Supplies"
};

export interface Expense {
    id: string;
    userId: string;
    fullName: string;
    category: ExpenseCategory;
    description: string;
    cost: number;
}