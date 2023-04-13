import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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
    date: new Date("2022-02-18"),
  },
];

function Expenses({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: "#80ced6",
  },
});
