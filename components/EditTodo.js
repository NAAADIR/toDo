import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const EditTodo = ({ nameTodo, updateTodo, onClose }) => {
    const [newNameTodo, setNewNameTodo] = useState(nameTodo);


    const handleUpdateTodo = () => {
        updateTodo(newNameTodo);
        onClose();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={newNameTodo}
                onChangeText={setNewNameTodo}
            />
            <Button title="Enregistrer" onPress={handleUpdateTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default EditTodo;
