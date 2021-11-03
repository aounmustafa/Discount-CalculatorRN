import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [op, setOp] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [save, setSave] = React.useState(0);
  const [fP, setfP] = React.useState(0);

  React.useEffect(() => {
    let discounted = (op * discount) / 100;
    let newPrice = op - discounted;
    setfP(newPrice);
    setSave(discounted);
  });

  return (
    <View style={styles.container}>
      <Text>Discount Calculator</Text>
      <TextInput
        placeholder="Enter Original Price"
        onChangeText={(val) => setOp(val)}
      />
      <TextInput
        placeholder="Enter Discount %"
        onChangeText={(val) => setDiscount(val)}
      />
      <Text>You saved: {save}</Text>
      <Text>Final price: {fP}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
