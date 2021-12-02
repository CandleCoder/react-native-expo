import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {
	ComponentContainer,
	InputContainer,
	SubmitButton,
	Input,
	List,
	ContentContainer,
	ManageContainer,
	ChangeButton,
	EditContainer,
	InfoContainer,
	ResponseStatusText,
	HeadingText
} from '../styles/style';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, COMPLETE_TODO, EDIT_TODO, REMOVE_TODO } from '../store/store';
import axios from 'axios';

export default function Todo() {
	const dispatch = useDispatch();
	const todo = useSelector((state) => state.todo);

	const [ title, setTitle ] = useState('');
	const [ editingTodo, setEditingTodo ] = useState(false);
	const [ editingTitle, setEditingTitle ] = useState('');
	const [ editingTodoID, setEditingTodoID ] = useState(null);
	const [ fetchData, setFetchData ] = useState(null);

	const onChangeText = (text) => setTitle(text);
	const onEditingChangeText = (text) => setEditingTitle(text);
	// todo
	/* useEffect(() => {
		axios
			.get('https://test.com')
			.then((response) => {
				const responseResult = [ response.data ]; //we receive 6 objects that we put in array
				const firstObject = responseResult[0]; //we create a variable in which we put the first object from the list from which we will extract the date
				const data = new Date(firstObject.generated_on).toLocaleDateString(); //we create the date where we take from the first object generated_on where the date is stored
				setFetchData(data.toString());
			})
			.catch((error) => setFetchData(error.toString())); //if the server does not respond we receive an error where we take it in catch
	}, []); */

	const addTodo = () => {
		if (title.length !== 0) {
			if (!todo.some((todo) => todo.title.toLowerCase() === title.toLowerCase())) {
				const successObj = {
					id: new Date().toString(),
					title: title,
					checked: false,
					data: new Date().toLocaleTimeString()
				};
				dispatch(ADD_TODO(successObj));
				setTitle('');
			} else alert('Todo List include your todo...');
		} else alert('Input is empty...');
	};

	const removeTodo = (id) => dispatch(REMOVE_TODO(id));
	const completeTodo = (id) => dispatch(COMPLETE_TODO(id));

	const editTodo = (title, id) => {
		setEditingTodoID(id);
		setEditingTitle(title);
		setEditingTodo(!editingTodo);
	};

	const saveEditedContent = () => {
		if (editingTitle.length !== 0) {
			if (!todo.some((todo) => todo.title.toLowerCase() === editingTitle.toLowerCase())) {
				setEditingTodo(!editingTodo);
				const obj = { editingTodoID: editingTodoID, editingTitle: editingTitle };
				dispatch(EDIT_TODO(obj));
			} else alert('You not change your todo...');
		} else alert('Input is empty...');
	};

	return (
		<ComponentContainer>
			<ResponseStatusText>{fetchData}</ResponseStatusText>
			<HeadingText>Todo list...</HeadingText>
			<ManageContainer>
				{editingTodo ? (
					<InputContainer>
						<Input value={editingTitle} placeholder="Add todo..." onChangeText={onEditingChangeText} />
						<SubmitButton onPress={saveEditedContent}>
							<Text>Save</Text>
						</SubmitButton>
					</InputContainer>
				) : (
					<InputContainer>
						<Input value={title} placeholder="Add todo..." onChangeText={onChangeText} />
						<SubmitButton onPress={addTodo}>
							<Text>Add</Text>
						</SubmitButton>
					</InputContainer>
				)}
			</ManageContainer>
			<ContentContainer>
				{todo.map((todo) => {
					return (
						<List key={todo.title} style={todo.checked && { backgroundColor: '#91FFC7' }}>
							<InfoContainer>
								<ChangeButton onPress={() => completeTodo(todo.id)}>
									<Text>Check</Text>
								</ChangeButton>

								<Text>{todo.title}</Text>
							</InfoContainer>

							<Text>{todo.data}</Text>

							<EditContainer>
								<ChangeButton onPress={() => removeTodo(todo.id)}>
									<Text>X</Text>
								</ChangeButton>

								<ChangeButton onPress={() => editTodo(todo.title, todo.id)}>
									<Text>Edit</Text>
								</ChangeButton>
							</EditContainer>
						</List>
					);
				})}
			</ContentContainer>
		</ComponentContainer>
	);
}
