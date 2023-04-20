import { ScrollView, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
function Dropdown() {
  const category = [
    "Food",
    "Housing",
    "Utilities",
    "Transportation",
    "Insurance",
    "Saving and payments",
    "Personal spending",
    "Entertainment",
  ];
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    alwaysBounceVertical={false}>
      <SelectDropdown
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        data={category}
        defaultValue="Personal spending"
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
    />
    </ScrollView>
  );
}
export default Dropdown;
const styles = StyleSheet.create({
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" }
});
