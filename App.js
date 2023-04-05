import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [result, setResult] = useState("");

  const handleButtonPress = (value) => {
    setResult(result + value);
  };

  const handleEqualPress = () => {
    setResult(eval(result).toString());
  };

  const handleClearPress = () => {
    setResult("");
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Simple Calculator</Text>

      <Text style={styles.result}>{result}</Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleButtonPress("7")}>
          <Text style={styles.button}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("8")}>
          <Text style={styles.button}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("9")}>
          <Text style={styles.button}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("/")}>
          <Text style={styles.button}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleButtonPress("4")}>
          <Text style={styles.button}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("5")}>
          <Text style={styles.button}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("6")}>
          <Text style={styles.button}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("*")}>
          <Text style={styles.button}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleButtonPress("1")}>
          <Text style={styles.button}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("2")}>
          <Text style={styles.button}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("3")}>
          <Text style={styles.button}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("-")}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleButtonPress("0")}>
          <Text style={styles.button}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress(".")}>
          <Text style={styles.button}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEqualPress()}>
          <Text style={styles.buttonEqual}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress("+")}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => handleClearPress()}>
        <Text style={styles.clearButton}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    fontSize: 40,
    color: "black",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    fontSize: 30,
    color: "black",
    backgroundColor: "lightgray",
    padding: 20,
    margin: 5,
    borderRadius: 10, // Tilføjet for at runde knappernes kanter
    overflow: "hidden",
  },
  buttonEqual: {
    fontSize: 30,
    color: "black",
    backgroundColor: "orange",
    padding: 20,
    margin: 5,
    borderRadius: 10, // Tilføjet for at runde knappernes kanter
    overflow: "hidden",
  },
  clearButton: {
    fontSize: 30,
    color: "black",
    backgroundColor: "red",
    padding: 20,
    margin: 5,
    marginTop: 20,
    borderRadius: 10, // Tilføjet for at runde knappernes kanter
    overflow: "hidden",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
