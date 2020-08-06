import {Expense} from "../types/Expense";
import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  ExpenseActionTypes,
  GET_EXPENSES,
  REMOVE_EXPENSE,
  SET_EXPENSES
} from "../types/actions";

let expensesReducerDefaultState: Expense[] = [];

const expenseReducer = (
    state = expensesReducerDefaultState,
    action: ExpenseActionTypes
): Expense[] => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(({id}) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense
          };
        } else {
          return expense;
        }
      });
    case SET_EXPENSES:
      return action.expenses;
    case GET_EXPENSES:
      return action.payload;
    default:
      return state;
  }
};

export {expenseReducer};
