import { useLayoutEffect, useContext} from "react";
import { View, StyleSheet } from "react-native";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import ButtonIcon from "../components/UI/ButtonIcon";
import Button from "../components/UI/Button";
import {ExpensesContext} from "../store/store";
function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

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
  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpenseId,
        {
          description: 'Test!!!!',
          amount: 29.99,
          category:'test',
          date: new Date('2022-05-20'),
        }
      );
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        category:'test',
        date: new Date('2022-05-19'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
       <ExpenseForm />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#80ced6",
    alignItems: "center",
  },
});
