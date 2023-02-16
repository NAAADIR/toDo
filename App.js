import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { FlatList } from "react-native";

export default function App() {
  // State pour stocker la liste des tâches
  const [todoList, setTodoList] = useState([]);

  // Fonction pour ajouter une nouvelle tâche à la liste
  const addTodo = (newTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList.push(newTodo);
    setTodoList(tmpTodoList);
  };


  // Fonction pour supprimer une tâche de la liste
  const deleteTodo = (indexTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList.splice(indexTodo, 1);
    setTodoList(tmpTodoList);
  };

  // Fonction pour récupérer la liste des tâches
  const getTodos = () => {
    AsyncStorage.getItem("todoList").then((jsonTodoList) => {
      const todos = JSON.parse(jsonTodoList || "[]");
      setTodoList(todos);
    });
  };

  // Fonction pour sauvegarder la liste des tâches
  const saveTodo = () => {
    AsyncStorage.setItem("todoList", JSON.stringify(todoList))
      .then(() => {
        console.log("Tâche ajouté !");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Fonction pour mettre à jour le statut d'une tâche
  const updateTodoDone = (indexTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList[indexTodo].done =
      !tmpTodoList[indexTodo].done;
    setTodoList(tmpTodoList);
  };

  const updateTodo = (index, newTodo) => {
    const tmpTodoList = [...todoList];
    tmpTodoList[index] = newTodo;
    setTodoList(tmpTodoList);
  };

  // Effet pour récupérer la liste des tâches stockée dans AsyncStorage au chargement de l'application
  useEffect(() => {
    getTodos();
  }, []);

  // Effet pour sauvegarder la liste des tâches dans AsyncStorage à chaque modification de la liste
  useEffect(() => {
    saveTodo();
  });

  console.log(todoList);

  // Rendu de l'application
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header></Header>
      </View>
      <View>
        <Input addTodo={addTodo}></Input>
      </View>
      <View style={styles.todolistContainer}>
        <FlatList
          data={todoList}
          renderItem={({ item, index }) => (
            <Todo
              nameTodo={item.name}
              todoDone={item.done}
              indexTodo={index}
              deleteTodo={deleteTodo}
              updateTodoDone={updateTodoDone}
              updateTodo={updateTodo}
            ></Todo>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>
      <StatusBar hidden={true} style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "purple",
  },
  inputContainer: {
    flex: 2,
  },
  todolistContainer: {
    flex: 5,
    backgroundColor: "#AAAAAA",
  },
});