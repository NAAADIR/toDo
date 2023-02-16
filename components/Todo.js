import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native";
import EditTodo from "./EditTodo";

export default Todo = ({
  nameTodo,
  todoDone,
  updateTodoDone,
  updateTodo,
  indexTodo,
  deleteTodo,
}) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const titleBtn = todoDone ? "Validé" : "A faire";

  const styleBtnUpdate = todoDone
    ? [styles.updateBtn, styles.updateBtnYes]
    : [styles.updateBtn, styles.updateBtnNo];

  const handleUpdateTodo = (newName) => {
    updateTodo(indexTodo, newName);
  };

  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity
        style={styleBtnUpdate}
        onPress={() => {
          updateTodoDone(indexTodo);
        }}
      >
        <Text style={styles.textUpdateBtn}>{titleBtn}</Text>
      </TouchableOpacity>
      <Text style={styles.nameTodo}>{nameTodo}</Text>
      <TouchableOpacity style={styles.deleteBtn}>
        <Text
          style={styles.textButton}
          onPress={() => {
            deleteTodo(indexTodo);
          }}
        >
          Supprimer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => setIsEditModalVisible(true)}
      >
        <Text style={styles.textButton}>Modifier</Text>
      </TouchableOpacity>
      <Modal
        visible={isEditModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <EditTodo
              nameTodo={nameTodo}
              updateTodo={handleUpdateTodo}
              onClose={() => setIsEditModalVisible(false)}
            />
            <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
              <Text style={styles.modalCloseButton}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    backgroundColor: "#1A195E",
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 2,
  },
  nameTodo: {
    flex: 3,
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  deleteBtn: {
    height: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4136",
    borderRadius: 10,
  },
  editBtn: {
    height: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03B7F0",
    borderRadius: 10,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  updateBtn: {
    backgroundColor: "red",
    height: 40,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textUpdateBtn: {
    color: "white",
  },
  updateBtnYes: {
    backgroundColor: "green",
  },
  updateBtnNo: {
    backgroundColor: "red",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 20,
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "grey",
  },
  errorText: {
    color: "red",
    marginVertical: 10,
  },
});
