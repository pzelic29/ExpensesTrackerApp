import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

function SelectedListComponent({ label, onSelectedChange }) {
  const [selected, setValueSelected] = React.useState('');

  const data = [
    { key: 'Food', value: 'Food' },
    { key: 'Housing', value: 'Housing' },
    { key: 'Utilities', value: 'Utilities' },
    { key: 'Transportation', value: 'Transportation' },
    { key: 'Insurance', value: 'Insurance' },
    { key: 'Saving and payments', value: 'Saving and payments' },
    { key: 'Personal spending', value: 'Personal spending' },
    { key: 'Entertainment', value: 'Entertainment' },
  ];

  function handleSelectedChange(value) {
    setValueSelected(value);
    onSelectedChange(value);
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <SelectList
        setSelected={handleSelectedChange}
        data={data}
        dropdownStyles={{ backgroundColor: 'white' }}
        dropdownItemStyles={{ marginHorizontal: 10 }}
        dropdownTextStyles={{ color: 'black' }}
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
    color: 'black',
    marginBottom: 4,
  },
});
