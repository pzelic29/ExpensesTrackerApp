import {Text} from 'react-native';
import { FlatList } from "react-native-web";
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item}/>;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
export default ExpensesList;
