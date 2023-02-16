import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default Input = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");

  const handleBtnAdd = () => {
    if (todo !== "" && description !== "") {
      const newTodo = { name: todo, description: description, done: false };
      addTodo(newTodo);
      setTodo("");
      setDescription("");
    } else {
      alert("Veuillez entrer une tâche et une description !");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={todo}
        onChangeText={setTodo}
        style={styles.input}
        placeholder="Tâche à ajouter"
      ></TextInput>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholder="Description de la tâche"
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleBtnAdd}>
        <Text style={styles.textButton}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    backgroundColor: "#AAAAAA",
  },
  input: {
    height: 50,
    backgroundColor: "white",
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  button: {
    height: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0074D9",
    borderRadius: 15,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});