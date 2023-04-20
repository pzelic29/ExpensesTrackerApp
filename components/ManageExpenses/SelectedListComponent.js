import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

function SelectedListComponent({ label }) {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Food" },
    { key: "2", value: "Housing" },
    { key: "3", value: "Utilities" },
    { key: "4", value: "Transportation" },
    { key: "5", value: "Insurance" },
    { key: "6", value: "Saving and payments" },
    { key: "7", value: "Personal spending" },
    { key: "8", value: "Entertainment" },
  ];

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <SelectList
        setSelected={setSelected}
        data={data}
        dropdownStyles={{ backgroundColor: "white" }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: "black" }}
        placeholder="Select category"
        maxHeight={100}
      />
    </View>
  );
}
export default SelectedListComponent;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: "black",
    marginBottom: 4,
  },
});
