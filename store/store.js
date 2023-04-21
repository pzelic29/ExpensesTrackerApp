import { createContext, useReducer } from 'react';
const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "Cipele",
      amount: 59.99,
      category: "Personal Spending",
      date: new Date("2022-12-19"),
    },
    {
      id: "e2",
      description: "Rucak",
      amount: 89.29,
      category: "Food",
      date: new Date("2023-01-01"),
    },
    {
      id: "e3",
      description: "Wolt",
      amount: 5.99,
      category: "Food",
      date: new Date("2022-12-01"),
    },
    {
      id: "e4",
      description: "Kino",
      category: "Personal Spending",
      amount: 14.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e5",
      description: "Uber",
      category: "Transportation",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
    {
      id: "e6",
      description: "Stol",
      category: "Housing",
      amount: 200.0,
      date: new Date("2023-04-21"),
    },
  ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description,category, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description,category, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;