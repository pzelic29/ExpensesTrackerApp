import { useContext } from "react";
import Expenses from "../components/Expenses/Expenses";
import { ExpensesContext } from "../store/store";
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <Expenses
      expenses={expensesCtx.expenses}
      periodName="Total"
      fallbackText="No registered expenses found!"
    />
  );
}
export default AllExpenses;
