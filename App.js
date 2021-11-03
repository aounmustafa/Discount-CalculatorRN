import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [op, setOp] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [save, setSave] = React.useState(0);
  const [fP, setfP] = React.useState(0);

  React.useEffect(() => {
    let discounted = ((op * discount) / 100).toFixed(2);
    let newPrice = (op - discounted).toFixed(2);

    setfP(newPrice);
    setSave(discounted);
  });

  const checkDiscountVal = (n) => {
    if (n >= 0 && n <= 100) {
      setDiscount(n);
    } else {
      alert("Discount cannot be greater than 100!");
    }
  };
  const checkOpVal = (a) => {
    if (a > 0) {
      setOp(a);
    } else {
      alert("Enter a postive Value");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Discount Calculator</Text>
      <TextInput
        style={styles.fields}
        placeholder="Enter Original Price"
        keyboardType="number-pad"
        onChangeText={(val) => checkOpVal(val)}
      />
      <TextInput
        style={styles.fields}
        placeholder="Enter Discount %"
        keyboardType="number-pad"
        onChangeText={(val) => checkDiscountVal(val)}
      />
      <Text style={styles.label}>You saved: {save}</Text>
      <Text style={styles.label}>Final price: {fP}</Text>
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
  fields: {
    height: "8%",
    width: "60%",
    margin: 5,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#023d3c",
    backgroundColor: "#d9fcfc",
  },
  label: {
    marginTop: 10,
    fontSize: 25,
  },
});
