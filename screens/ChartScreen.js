import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ExpensesContext } from "../store/store";

const ChartScreen = () => {
  const { expenses } = useContext(ExpensesContext);

  const expensesByCategory = expenses.reduce((acc, expense) => {
    const { category } = expense;
    acc[category] = acc[category] ? acc[category] + expense.amount : expense.amount;
    return acc;
  }, {});

  const data = Object.keys(expensesByCategory).map((category) => ({
    name: category,
    value: expensesByCategory[category],
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color for each category
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses By Category</Text>
      <View>
      <PieChart
        data={data}
        width={200}
        height={200}
        chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            legend: {
              enabled: true,
              textSize: 14,
              textColor: "#555",
              iconSize: 14,
              iconColor: "#555",
              fontFamily: "Arial",
            },
        }}
        accessor={"value"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 10]}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#80ced6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ChartScreen;
