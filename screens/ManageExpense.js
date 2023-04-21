import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import ButtonIcon from "../components/UI/ButtonIcon";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/store";


function getCategory(expenseId, expenses) {
  const selectedExpense = expenses.find((expense) => expense.id === expenseId);
  return selectedExpense.category;
}

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  const category = editedExpenseId
  ? getCategory(editedExpenseId, expensesCtx.expenses)
  : "";
  console.log(category);

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
        categoryDefault={category}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <ButtonIcon
            icon="trash"
            size={24}
            color="red"
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#80ced6",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#80ced6",
    alignItems: "center",
  },
});
