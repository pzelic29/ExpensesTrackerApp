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
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }));

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={300}
        height={300}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientTo: "#08130D",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        hasLegend={false}
        accessor={"value"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 10]}
      />
      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Legend</Text>
        {data.map((item, index) => (
          <View style={styles.legendItem} key={index}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name} - {item.value}</Text>
          </View>
        ))}
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
  legendContainer: {
    flexDirection: "column",
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#555",
  },
  legendTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
  },
});

export default ChartScreen;
